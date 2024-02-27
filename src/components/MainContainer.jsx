import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"



const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)
 
  if (!movies) return;  // Its called Early return
  const mainMovie = movies[0];
  console.log(mainMovie);
  
  const {original_title,overview} = mainMovie
  return (
    <div className="flex w-full flex-col">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground/>
    </div>
  )
}

export default MainContainer