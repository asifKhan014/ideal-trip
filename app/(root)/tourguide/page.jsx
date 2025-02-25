import React from 'react';
import TourGuideCard from '../../components/tourguide/tourguideCard';
const dummyTourGuides = [
    {
        idCard: new Blob(), // Replace with actual image blob or URL
        hourlyRate: 20,
        bio: 'Experienced tour guide with a passion for history and culture.',
        experience: '5 years',
        location: 'New York, USA'
    },
    {
        idCard: new Blob(), // Replace with actual image blob or URL
        hourlyRate: 25,
        bio: 'Adventure enthusiast and expert in local wildlife.',
        experience: '3 years',
        location: 'Denver, USA'
    },
    {
        idCard: new Blob(), // Replace with actual image blob or URL
        hourlyRate: 30,
        bio: 'Professional guide with extensive knowledge of ancient ruins.',
        experience: '7 years',
        location: 'Rome, Italy'
    }
];

function TourGuide() {
    return (
        <div className='min-h-screen pt-32 px-16'>
            <div className='text-center mb-8'>
            <h1 className='text-3xl '>Here, Find your required tourGuide</h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyTourGuides.map((guide, index) => (
                    <TourGuideCard
                        key={index}
                        idCard={guide.idCard}
                        hourlyRate={guide.hourlyRate}
                        bio={guide.bio}
                        experience={guide.experience}
                        location={guide.location}
                    />
                ))}
            </div>
        </div>
    );
}

export default TourGuide;