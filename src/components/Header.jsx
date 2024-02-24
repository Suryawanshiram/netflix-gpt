import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="w-full bg-gray-300 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          className="h-10"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        
      { user && (<div className="flex items-center">
          <img
            className="h-8 mr-4"
            src={user?.photoURL}
            alt="User Icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-400 p-2 font-semibold hover:bg-red-300 cursor-pointer rounded-md"
          >
            Sign Out
          </button>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;
