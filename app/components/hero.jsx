import React from "react";

const profiles = [
  {
    id: 1,
    image: "logo-icon.png",
    title: "J Thomas",
    description: "Software engineer and musical horror nerd. J has a passion for writing and all things creative, when not building systems.",
  },
  {
    id: 2,
    image: "logo-icon.png",
    title: "Matt Rickaby",
    description: "Matt is an exceptional writer with a talent for building worlds and characters that are both engaging and intricate.",
  },
];

const Hero = () => {
  return (
    <div className="mt-24">
      <h2 className="tracking-tighter font-black  text-3xl md:text-6xl m-4 mx-auto text-center">we do creative.</h2>
      <p className="tracking-tighter font-bold text-lg text-center">We love all things creative. From software design to writing fantasy epics - we are an outlet for creative people to do creative things.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4  m-4 rounded-md my-20">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center bg-white rounded-lg p-4"
          >
            <img
              src={profile.image}
              alt={profile.title}
              className="w-24 h-24 md:w-48 md:h-48 rounded-full"
            />
            <h3 className="mt-2 text-xl md:text-2xl font-semibold">{profile.title}</h3>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-lg">{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
