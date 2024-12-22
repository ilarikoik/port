export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      id="projects"
      className="flex justify-center items-center flex-col py-20"
    >
      <h1
        className={`text-3xl font-semibold mb-12 ${
          !darkMode ? "text-green" : "text-blue-500"
        }`}
      >
        Projektit
      </h1>
      <div className="grid sm:grid-cols-2 max-w-[1200px] max-h-[1200px] h-full w-full ">
        <div className=" bg-red-500 h-fit w-full ">
          <div className=" h-72 bg-green m-2"></div>
          <div className=" h-72 bg-green m-2"></div>
        </div>
        <div className=" bg-red-500 h-fit w-full ">
          <div className=" h-72 bg-blue-400 m-2"></div>
          <div className=" h-72 bg-blue-400 m-2"></div>
        </div>
      </div>
    </div>
  );
}
