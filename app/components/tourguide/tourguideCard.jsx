import React from 'react';

function TourGuideCard({ idCard, hourlyRate, bio, experience, location }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={URL.createObjectURL(idCard)} alt="ID Card" className="h-56 w-full object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">Tour Guide</h2>
                <p className="text-gray-500 text-sm mb-2"><strong>Hourly Rate:</strong> ${hourlyRate}</p>
                <p className="mt-2 text-gray-600 text-sm"><strong>Bio:</strong> {bio}</p>
                <p className="mt-2 text-gray-600 text-sm"><strong>Experience:</strong> {experience}</p>
                <p className="mt-2 text-gray-600 text-sm"><strong>Location:</strong> {location}</p>
               
                <div className="flex justify-between items-center mt-6">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition">
                        Contact Guide
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TourGuideCard;
