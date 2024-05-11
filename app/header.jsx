import Link from "next/link";
import React from "react";
import { LogoutBtn } from "../components/Clients";
import 'tailwindcss/tailwind.css';
const Header = () => {
  return (

<header className="mb-2 px-4  bg-[#1F2937]">
  <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
    <a className="flex items-center text-2xl font-black" href="/">
      <span className="mr-2 text-3xl text-blue-600"
        ></span>
      <span className="text-white">NEXT-TODO</span>
    </a>
    <input className="peer hidden" type="checkbox" id="navbar-open" />
    <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
      <span className="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
    </label>
    <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
      <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
        <li className=""><Link className="text-white hover:text-blue-600 text-lg" href={"/"}>Home</Link></li>
        <li className=""><Link className="text-white hover:text-blue-600 text-lg" href={"/profile"}>Profile</Link></li>
      
        <li className="mt-2 sm:mt-0">  <LogoutBtn />  </li>
      </ul>
    </nav>
  </div>
</header>




   
    // <div className="header" >
    //   <div>
    //     <h2 className="font-black text-2xl">Next-Todo</h2>
    //   </div>
    //   <article className="">
    //     <Link href={"/"}>Home</Link>
    //     <Link href={"/profile"}>Profile</Link>
     
    //     <LogoutBtn />
    //   </article>
    // </div>
  );
};

export default Header;
