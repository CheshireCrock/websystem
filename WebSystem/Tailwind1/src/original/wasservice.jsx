import { programs } from "../data/data";

const ProgramList = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 px-6 py-16 bg-gray-950 text-white">

      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Our Programs
        </h1>

        <p className="text-gray-400">
          Choose the workout style that matches your goals
        </p>

     
      </div> 

      {/* RIGHT SIDE (DYNAMIC) */}
      <div className="md:flex-row grid grid-cols-1 sm:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="flex flex-col gap-3 bg-gray-800 p-5 rounded-xl">

            {/* icon from data */}
            {program.icon}

            <h3 className="font-semibold text-lg text-white">
              {program.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {program.description}
            </p>

          {/*  <a
              href={program.link}
              className="text-gray-400 text-sm font-medium cursor-pointer hover:text-lime-300"
            >
              LEARN MORE
            </a>*/} 

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProgramList;