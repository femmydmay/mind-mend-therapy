"use client";

import React from "react";

export function PicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl  mx-auto  font-bold mb-4">
          Our Purpose is to save lives
        </h1>
        <p className="text-red-600 text-bold mx-auto text-xl justify-center mb-6">
          Immediate Response: Quick intervention therapy helps identify warning
          signs of mental health crises, such as suicidal thoughts, self-harm
          tendencies, or severe anxiety, before they worsen.
          <br />
          Active Listening and Validation Providing a space to express thoughts
          and emotions reduces feelings of isolation and despair, which are key
          factors in preventing self-harm or suicide.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
         LET US HELP YOU, SEEK THERAPY TODAY.
        </button>
      </div>

      {/* Pictures Section */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/pic1.jpg"
          alt="Sample Image 1"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="pic2.jpg"
          alt="Sample Image 2"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="/pic3.jpg"
          alt="Sample Image 3"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="/pic5.jpg"
          alt="Sample Image 4"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
