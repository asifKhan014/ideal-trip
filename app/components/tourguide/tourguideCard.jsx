import React from 'react';
import Link from 'next/link';

function TourGuideCard({ id, idCard, hourlyRate, bio, experience, location }) {
    const imageSrc = idCard 
        ? (idCard instanceof Blob ? URL.createObjectURL(idCard) : idCard) 
        : '/default-tour-guide.jpg'; // Replace with an actual default image path
console.log("bio");
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={'/images/guide-3.jpg'} alt="Tour Guide" className="h-56 w-full object-cover" />

            <div className="p-6 flex flex-col space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Tour Guide</h2>
                <p className="text-gray-500 text-sm mb-2">
                    <strong>Hourly Rate:</strong> ${hourlyRate || 'Not Available'}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    <strong>Bio:</strong> {bio || 'No bio available'}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    <strong>Experience:</strong> {experience || 'Not specified'}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    <strong>Location:</strong> {location || 'Unknown'}
                </p>
               
                <div className="flex justify-end items-center mt-6">
                    {/* <Link href={`/tourguide/${id}`}> */}
                        {/* <button className="bg-gray-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-600 transition">
                            View Details
                        </button> */}
                    {/* </Link> */}

                    {/* <Link href={`/tourguide/${id}/booking`}> */}
                        <button className="bg-purple-600 text-white py-2 px-4 w-full rounded-lg text-lg hover:bg-purple-700 transition">
                            Book Now
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default TourGuideCard;
