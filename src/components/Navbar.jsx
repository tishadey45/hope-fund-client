import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="max-lg:collapse bg-emerald-50 
     shadow-sm  rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar flex justify-between">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link href="/"><Image src={logo} alt="logo" width={70} height={70}></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-emerald-500 font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/campaigns">All campains</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
