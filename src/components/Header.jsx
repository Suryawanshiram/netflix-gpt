

const Header = () => {
  return (
    <section className="backgroundImg(">
    <div className="w-full flex justify-center items-between gap-5">
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full">
      <img className="w-44 object-contain text-sm" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    </div>

      <form className="absolute ml-56 mt-40 mx-auto items-center justify-center gap-5 p-20 bg-black right-0 left-0 flex flex-col w-fit">
        <h1 className="text-white font-bold text-3xl items-center justify-center text-justify mx-auto">Sign In</h1>
           <input type="text" placeholder="Email address" className="px-4 py-2 m-3 rounded-md" />
           <input type="text" placeholder="Password" className="px-4 py-2 rounded-md m-3" />
          <button className="mx-auto w-full px-4 items-center justify-center text-center py-2 rounded-md  bg-red-500 gap-5">Sign In</button>
         
        </form>
      </div>
      </section>
  )
}

export default Header