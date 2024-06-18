import Nav from "@/components/nav";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({children}) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  if(!session){
    return (
      <div className="bg-cardBg w-screen h-screen flex items-center">
        <div className="text-center w-full"> 
        <div className='sm:mx-auto sm:w-full sm:max-w-md shadow-md p-10 rounded-md bg-white'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 mb-5'>
                Register as a new user 
            </h2>
            <input className="bg-white p-2 px-4 rounded-lg mb-5" type="text"
                      placeholder="Name"
                      name="name"
                      onChange={ev => setName(ev.target.value)} />
            <input className="bg-white p-2 px-4 rounded-lg mb-5" type="text"
                      placeholder="Email"
                      name="email"
                      onChange={ev => setName(ev.target.value)} />
          <button onClick={() => signIn('google')} className="bg-black text-white p-2 px-4 rounded-lg mb-5 border-gray-100 border-2 mr-5">Login</button>
          <button onClick={() => signIn('google')} className="bg-black text-white p-2 px-4 rounded-lg mb-5 border-gray-100 border-2">Login with Google</button>
        </div>
        </div>
      </div> 
    );
  }
  return (
    <div className="bg-cardBg min-h-screen ">
      <div className="md:hidden flex grow items-center justify-between p-4 mr-6 ml-1">
        <button onClick={() => setShowNav(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
          <Logo />
      </div>
        <div className="flex">
          <Nav show={showNav} />
          <div className="flex-grow p-4">
            {children}
          </div>
        </div>
    </div>

  );
}