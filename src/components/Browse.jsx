import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div className="flex w-full flex-col h-screen bg-white">
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse; 