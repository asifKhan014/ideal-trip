import { useState, useEffect } from "react";
import axios from "axios";
export default function FeedbackSection({ tourGuideId }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [ratingStats, setRatingStats] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const authToken = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/get-feedback/${tourGuideId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        
        const data = await response.json();
        console.log("data { feedback }: ", data);
        if (data.isSuccess) {
          setFeedbackList(data.data);
          // setRatingStats(data.stats);
        } else {
          setError(data.message || "Failed to fetch feedback.");
        }
      } catch (error) {
        setError("Something went wrong while fetching data.");
        console.error("Error fetching feedback:", error);
      }
    };

    if (tourGuideId) fetchFeedbackData();
  }, [tourGuideId]);

  

  const submitFeedback = async (tourGuideId, feedbackText, rating) => {
      try {
          const authToken = localStorage.getItem("token");
          const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/add-feedback`,
              {
                  serviceId: tourGuideId,
                  feedbackText,
                  rating
              },
              {
                  headers: { 
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${authToken}`
                  }
              }
          );
          // console.log("response.data --------- ", response.data);
          if (response.data.isSuccess) {
              console.log("Feedback submitted successfully:", response.data);
          } else {
              console.error("Error submitting feedback:", response.data.message);
          }
      } catch (error) {
          console.error("Request failed:", error);
      }
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  submitFeedback(tourGuideId, feedbackText, rating);
  setLoading(false);
}
console.log("feedbackList: ---- ", feedbackList);
  return (
    <div className="w-full p-6 flex gap-6 py-36">
     <div className="w-1/2">
     <h2 className="text-2xl font-semibold mb-4">Share Your Feedback</h2>
      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <textarea
          className="w-full p-2 border rounded-md"
          rows="4"
          placeholder="Write your feedback..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        ></textarea>
        <div className="flex items-center justify-between mt-3">
          <input
            type="number"
            min="1"
            max="5"
            className="border p-2 rounded-md w-16"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rate"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
     </div>

     <div className="w-1/2">
     <h2 className="text-2xl font-semibold mb-4"> Reviews</h2>
      {ratingStats && (
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <span className="text-3xl font-bold">⭐ {ratingStats.average.toFixed(1)}</span>
            <span className="ml-2 text-gray-600">{ratingStats.total} reviews</span>
          </div>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center text-sm mb-1">
              <span className="w-12">{star} stars</span>
              <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${ratingStats[star]}%` }}
                ></div>
              </div>
              <span className="ml-2 text-gray-600">{ratingStats[star]}%</span>
            </div>
          ))}
        </div>
      )}

      <div>
        {feedbackList?.map((feedback, index) => (
          <div key={index} className="p-4 mb-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {feedback.user.fullName[0].toUpperCase()}
              </div>
              <div className="ml-3 flex justify-between w-full">
                <p className="font-medium">{feedback.user.fullName}</p>
                <p className="text-gray-500 text-sm">⭐ {feedback.rating} • Reviewed on {new Date(feedback.date).toLocaleDateString()}</p>
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