const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video flex pt-[20%] px-24 flex-col gap-5 text-justify absolute text-white">
      <h1 className="px-10 text-3xl font-bold">{title}</h1>
      <p className="px-10 w-1/4">{overview}</p>

      <div className="flex w-full gap-5 px-10 rounded-md">
        <button className="bg-white text-black px-3 rounded-md text-xl text-center">
          ▶️ Play
        </button>
        <button className="bg-blue-300 pl-5 py-1 rounded-md ">
          Info ℹ️
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
