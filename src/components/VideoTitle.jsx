

const VideoTitle = ({title, overview}) => {
  return (
      <div className="w-full grid gap-5 text-justify ">
          <h1 className="px-10 text-3xl font-bold">{title}</h1>
          <p className="px-10 w-1/4">{overview}</p>
          
          <div className="flex w-full gap-5">
              <button className="bg-gray-500 px-2 rounded-sm text-xl text-center">▶️ Play</button>
              <button className="bg-blue-300 px-2 py-1 rounded-sm ">More Info..</button>
          </div>
    </div>
  )
}

export default VideoTitle