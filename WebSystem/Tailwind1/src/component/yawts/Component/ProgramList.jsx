import { programs } from "../data/data";

const ProgramList = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-16">

      {/* TITLE ON TOP */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Our Programs
        </h1>

        <p className="text-gray-400 mt-2">
          Choose the workout style that matches your goals
        </p>
      </div>

      {/* PROGRAM ROWS */}
      <div className="flex flex-wrap justify-center gap-6">

        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-xl flex flex-col gap-3
                       w-full sm:w-[48%] lg:w-[30%]"
          >
            {/* title */}
            <h3 className="font-semibold text-lg text-white">
              {program.title}
            </h3>

            {/* icon */}
            <div className="text-2xl">{program.icon}</div>

            {/* description */}
            <p className="text-gray-400 text-sm">
              {program.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProgramList;