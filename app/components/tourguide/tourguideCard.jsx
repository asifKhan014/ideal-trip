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
                <h2 className="text-2xl font-semibold text-black">Tour Guide</h2>
                <p className="text-black text-sm mb-2">
                    <strong>Hourly Rate:</strong> ${hourlyRate || 'Not Available'}
                </p>
                <p className="mt-2 text-black text-sm">
                    <strong>Bio:</strong> {bio || 'No bio available'}
                </p>
                <p className="mt-2 text-black text-sm">
                    <strong>Experience:</strong> {experience || 'Not specified'}
                </p>
                <p className="mt-2 text-black text-sm">
                    <strong>Location:</strong> {location || 'Unknown'}
                </p>
               
                <div className="flex justify-end items-center mt-6">

                   
                        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg text-lg hover:bg-blue-600 transition">
                            Book Now
                        </button>
                   
                </div>
            </div>
        </div>
    );
}

export default TourGuideCard;
