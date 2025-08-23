import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = < >

    <NavLink className={' font-semibold hover:text-green-600 hover:border-2  border-green-600 rounded p-1 '} to={'/'} > Home </NavLink>
    <NavLink className={'font-semibold hover:text-green-600 hover:border-2  border-green-600 rounded p-1'} to={'/listed-books'}> Listed Books </NavLink>
    <NavLink className={'font-semibold hover:text-green-600 hover:border-2  border-green-600 rounded p-1'} to={'/listed-books'}> Pages to read </NavLink>

  </>
  return (
    <div className="navbar bg-base-100 shadow-sm  ">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to={'/'}>
          <div className="flex items-center gap-2.5 font-bold text-xl">
            <img className="w-10 h-10" src="/src/assets/images/hand-book-logo-illustration-art-background-43965136.webp" alt="" />
            <p>Book Vibe</p>
          </div>

        </NavLink>
      </div>
      <div className="navbar-center items-center hidden lg:flex">
        <ul className="menu menu-horizontal  gap-10">

          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="btn btn-outline btn-success">sign-in</button>
        <button className="btn btn-outline btn-info">sign-up</button>

      </div>
    </div>
  );
};

export default Navbar;