import { useState, useEffect } from "react";
import axios from "axios";

export default function FeedbackSection({ transporterId }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [ratingStats, setRatingStats] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeedbackData();
  }, [transporterId]);

  const fetchFeedbackData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/get-feedback/${transporterId}`,
        {
          method: "GET",
            credentials: "include", // 🔐 Send cookies
            headers: {
              "Content-Type": "application/json",
            },
        }
      );
      const data = await response.json();
      if (data.isSuccess) {
        setFeedbackList(data.data);
        // console.log("response ---------------------", data.data);

        const stats = { total: data.data.length, average: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 };
        data.data.forEach(feedback => stats[feedback.rating]++);
        stats.average = data.data.reduce((sum, feedback) => sum + feedback.rating, 0) / stats.total;
        setRatingStats(stats);
      } else {
        setError(data.message || "Failed to fetch feedback.");
      }
    } catch (error) {
      setError("Something went wrong while fetching data.");
    }
  };

  const submitFeedback = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/add-feedback`,
        {
          serviceId: transporterId,
          feedbackText,
          rating,
        },
        {
          withCredentials:true,
        }
      );
      if (response.data.isSuccess) {
        // console.log("response ---------------------[transport] add", response.data);
        const newFeedback = {
          user: { fullName: "You" }, // Fallback name
          rating,
          feedbackText,
          date: new Date().toISOString(),
        };
        setFeedbackList([newFeedback, ...feedbackList]);
        setFeedbackText("");
        setRating(0);
        setError(null);
        fetchFeedbackData();
      } else {
        setError(response.data.message || "Feedback submission failed.");
      }
    } catch (error) {
      setError("An error occurred while submitting feedback!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!feedbackText.trim()) {
      setError("Please enter your feedback before submitting.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Please select a rating between 1 and 5.");
      return;
    }

    setLoading(true);
    await submitFeedback();
    setLoading(false);
  };

  return (
    <div className="w-full px-4 py-10 md:py-20 flex flex-col md:flex-row gap-8 border-b-2 border-gray-200">
      {/* Feedback Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Share Your Feedback</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your feedback..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>

          <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-500 transition`}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {error && <p className="text-red-600 mt-3">{error}</p>}
        </form>
      </div>

      {/* Feedback List & Stats */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

        {ratingStats && (
          <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold text-yellow-500">⭐ {ratingStats.average.toFixed(1)}</span>
              <span className="ml-2 text-gray-600">{ratingStats.total} reviews</span>
            </div>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center text-sm mb-1">
                <span className="w-12">{star}★</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${(ratingStats[star] / ratingStats.total) * 100 || 0}%` }}
                  ></div>
                </div>
                <span className="text-gray-600">{ratingStats[star]}</span>
              </div>
            ))}
          </div>
        )}

        <div className="max-h-[700px] overflow-y-auto">
          {feedbackList.map((feedback, index) => (
            <div key={index} className="p-4 mb-4 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {feedback.user?.fullName?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="ml-3 flex justify-between w-full">
                  <p className="font-medium">{feedback.user?.fullName || "Anonymous"}</p>
                  <p className="text-gray-500 text-sm">
                    ⭐ {feedback.rating} • {new Date(feedback.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{feedback.feedbackText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
