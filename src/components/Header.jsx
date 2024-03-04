import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    console.log("Signing out...");
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(unsubscribe());
        // navigate("/")
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="w-full bg-black pt-5 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="h-10" src={LOGO} alt="Netflix Logo" />

        {user && (
          <div className="flex items-center">
            <img className="h-8 mr-4" src={user?.photoURL} alt="User Icon" />
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
