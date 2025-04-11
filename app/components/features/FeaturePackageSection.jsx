'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function FeaturedPackages() {
  const [packages,setPackages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTransitioning = useRef(false);
  const router = useRouter();
    useEffect(() => {
      const fetchPackages = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Package`);
          console.log(response);
          const data = await response.json();
          if (data.isSuccess) {
            console.log(data);
            setPackages(data.data);
          } else {
            console.error("Failed to fetch packages:", data.Messege);
          }
        } catch (error) {
          console.error("Error while fetching packages:", error);
        }
      };
  
      fetchPackages();
    }, []);
  // Slide Navigation Handlers
  const handlePrevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTimeout(() => (isTransitioning.current = false), 500);
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTimeout(() => (isTransitioning.current = false), 500);
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  const handleBookNow = (id) => {
    var token = localStorage.getItem('token');
    if (token) {
      router.push(`/tour-packages/booking?id=${id}`);
    }
    else{
      router.push("/login");
    }
    // Navigate to booking page with package ID
    
  };

  return (
    <section className="py-24 bg-white" {...handlers}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Featured Packages
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore the best travel packages across Pakistan for unforgettable
          experiences.
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              willChange: "transform",
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.packageId}
                className="w-full flex-shrink-0"
                style={{ flexBasis: "100%" }}
              >
                {/* Package Card */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  {/* Thumbnail */}
                  <div className="relative">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.title}
                      width={500}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg"
                      priority={false}
                    />
                    {pkg.tag && (
                      <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-lg">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  {/* Details */}
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Duration: {pkg.durationDays} Days / {pkg.durationDays - 1}
                      <span> Nights</span>
                    </p>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <div className="text-gray-500 mt-3">
                      <p>
                        <strong>Tour Date:</strong> {pkg.tourDate}
                      </p>
                      <p>
                        <strong>Available Spots:</strong> {pkg.availableSpots}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-green-600">
                        PKR : {pkg.price}
                      </span>
                      <button
                        // onClick={() => handleBookNow(1)}
                        onClick={() => handleBookNow(pkg.packageId)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <FaArrowLeft className="text-gray-800 text-xl" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <FaArrowRight className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
