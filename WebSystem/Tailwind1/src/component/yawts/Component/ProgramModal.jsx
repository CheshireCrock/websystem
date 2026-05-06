import React from "react";
import { programs } from "../data/data";

const ProgramModal = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose} 
    >
      {/* Modal Container */}
      <div 
        className="bg-black border border-gray-800 rounded-3xl p-6 md:p-10 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-all"
        >
          Close
        </button>

        {/* Header */}
        <div className="mb-10">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">
            Training Tracks
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            Choose the best workout program for your fitness goals
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
            Explore curated plans for strength, cardio, and flexibility so you can train smarter every day.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((course) => (
            <div
              key={course.id}
              className="bg-[#020617] rounded-2xl p-6 border border-gray-800 flex flex-col hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-lime-400 text-lg">{course.icon}</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
                  {course.duration}
                </span>
              </div>

              <h3 className="text-white text-xl font-bold mb-3 leading-snug">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="text-gray-500 text-xs mb-6 space-y-1 font-medium">
                <p>Sessions: <span className="text-gray-300">{course.sessions}</span></p>
              </div>

              <div className="space-y-2 mt-auto">
                {course.highlights?.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#111827] text-gray-300 text-[11px] py-2.5 px-4 rounded-xl border border-gray-800 text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;