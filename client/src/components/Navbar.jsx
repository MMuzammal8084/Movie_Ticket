import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon, Ticket, TicketPlus, XIcon  } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false)

  const {user} = useUser()

  const{openSignIn} = useClerk()

  const navigate = useNavigate()

  return (
    <div className=" fixed top-0 left-0 w-full flex items-center justify-between px-6 z-50 md:px-16 lg:px-36 py-5">
      <Link to="/" className="max-md:flex-1 ">
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </Link>
      
     <div
  className={`
    z-50 flex flex-col md:flex-row items-center gap-8 py-3 
    md:bg-white/10 md:border border-gray-300/20 md:rounded-full md:px-8
    backdrop-blur bg-black/70 max-md:absolute max-md:top-0 max-md:left-0 
    max-md:w-full max-md:h-screen max-md:justify-center max-md:font-medium 
    max-md:text-lg transition-all duration-300 overflow-hidden 
    ${isOpen ? 'max-md:opacity-100 max-md:pointer-events-auto' : 'max-md:opacity-0 max-md:pointer-events-none'}
  `}
>
  <XIcon
    className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
    onClick={() => setIsOpen(false)}
  />
  <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/">Home</Link>
  <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/movies">Movies</Link>
  <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/">Theaters</Link>
  <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/">Releases</Link>
  <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/favorites">Favorites</Link>
</div>


      <div className="flex items-center gap-8">
        <SearchIcon className='max-md:hidden w-6 h-6 cursor pointer'/>
        {
          !user ? (
             <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
          Login
        </button>
          ) 
          :
           ( <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My bookings" labelIcon={<TicketPlus width={15} onClick={()=> navigate('./my-bookings')}/>}/>
            </UserButton.MenuItems>
           </UserButton>)
        }

       
      </div>

      <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" onClick={()=> {setIsOpen(!isOpen)}} />
    </div>
  );
};

export default Navbar;
