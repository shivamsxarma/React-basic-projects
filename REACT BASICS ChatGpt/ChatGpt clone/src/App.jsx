function App(){
  return(
    <>

<div>
  {/* uppar middle vala portion */}
  <nav className="  absolute bg-white h-10 w-full  "> 
    <button className=" hover:bg-slate-200  rounded-2xl absolute justify-center text-xl ml-370 cursor-pointer h-9 w-12 mt-1">
      <i className="fa-solid fa-comment-dots" />
    </button>
  </nav> 
  <div className="bg-slate-100  text-indigo-600 h-9 w-36  ml-210 mt-2 rounded-2xl flex absolute cursor-pointer">
    <i className="fa-solid fa-star mt-3 ml-3   text-sm"> </i> 
    <b className="mt-2 ml-2 relative text-sm font-medium">Upgrade to Go</b>
  </div>
  <div className=" h-9 w-25 absolute ml-73 mt-2 rounded-2xl cursor-pointer hover:bg-slate-200   ">
    <b className="font-medium text-xl">  ChatGPT^</b>
  </div>
  {/* left vala complete div  */}
  <div className="absolute flex  bg-slate-50 h-160 w-65 overflow-y-auto overflow-x-hidden">
    <button className=" mt-3 ml-2 cursor-pointer  hover:bg-slate-200 rounded-2xl  h-9 w-10  items-center flex justify-center ">
      <img src="https://img.icons8.com/?size=512&id=4KY3tfAid4dZ&format=png" alt="Gpt" className="size-7" />
    </button>
    <button className="mt-3 ml-38 text-xl flex cursor-pointer  hover:bg-slate-200 rounded-2xl  h-8 w-8 justify-center items-center">
      <i className="fa-solid fa-copy " />
    </button>
    <div className="  h-50  mt-16 p-1 m-2 ml-3 flex flex-col  gap-4 text-sm font-medium w-full absolute">
      <ul className="flex flex-col gap-1 ">
        <li className>
          <button className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 rounded-2xl h-8 w-45  ">
            <i className="fa-solid fa-pen-to-square relative "> </i>
            <p className=" ">New chat</p>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 rounded-2xl h-8 w-45 ">
            <i className="fa-solid fa-magnifying-glass relative " />
            <p className>Search chat</p>
          </button>
        </li>
        <li className="mb-6">
          <button className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 rounded-2xl h-8 w-45 ">
            <i className="fa-solid fa-book relative" />
            <p className>Library</p>
          </button>
        </li>
        <li className="mb-0.5">
          <button className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 rounded-2xl h-8 w-45 ">
            <i className="fa-solid fa-circle-play" />
            <p className>Sora</p>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 rounded-2xl h-8 w-45 ">
            <i className="fa-solid fa-braille" />
            <p className>GPTs</p>
          </button>
        </li>
        <div className=" text-sm text-slate-400 font-bold h-9 w-22 mt-4 relative">
          <p className> Chats</p>
        </div>
        <ul className="text-slate-700 flex flex-col gap-4">
          <li> Change image request</li>
          <li> MERN stack Roadmap</li>
          <li> How to generate OTP in JS</li>
          <li> Developer portfolio in tailwind </li>
          <li> How to drive ferrari</li>
          <li> Give me three reason to live</li>
          <li> Enlist 5 way to learn MBA methamatics</li>
          <li> How to use micro wave oven like a pro</li>
          <li> Is chat gpt is better than google</li>
          <li> Create spotify clone </li>
        </ul>
      </ul>
    </div>
  </div>
  <div className=" w-66 h-13 bg-slate-50 absolute flex mt-161 hover:bg-slate-200 rounded-2xl">
    <i className="fa-solid fa-circle-user relative text-4xl mt-1.5 ml-2 cursor-pointer" />
    <p className=" ml-4 cursor-pointer">Shivam Sharma</p>
    <p className=" mt-6 absolute ml-15 cursor-pointer  ">Premium</p>
  </div>
  {/* middle vala search bar */}
  <div className=" ab bg-white h-65 w-180 absolute  mt-64 ml-135"> 
    <p className="ml-50 text-3xl"><b className="font-mono font-medium">What can i help with?</b></p>
    <div className="bg-white border-1 shadow-lg  hover:shadow-slate-400 duration-300 cursor-pointer h-28 w-190 mt-8 -ml-4 absolute rounded-4xl ">
      <input type="text" placeholder="Ask anything..." className="w-full pl-10 pr-4 py-2.5 rounded-full focus:outline-none   text-bg-[#4f4f4f]  mt-2" />
      <p className="ml-3 mt-4" />
      <div className="flex items-center gap-8  ml-8 absolute">
        <button className="hover:bg-slate-200 rounded-2xl  text-xl size-9">
          <i className="fa-solid fa-plus text-xl hover:bg-slate-200  rounded-2xl" />
        </button>
        <button className="hover:bg-slate-200 rounded-2xl  text-xl  h-9 w-17">
          <span className="flex items-center">
            <i className="fa-solid fa-sliders text-xl" />
            <span className="ml-2 text-base ">tools</span>
          </span>
        </button>
        <button className="hover:bg-slate-200 rounded-2xl text-xl size-9 ml-110 ">
          <i className="fa-solid fa-microphone  " />
        </button>
        <button className="hover:bg-slate-200 rounded-2xl  text-xl size-9">
          <i className="fa-solid fa-clock" />
        </button>
      </div>
    </div>
    {/* BOTTOM MIDDLE VALA div Promotion vala  */}
    <div className="bg-white border-1 shadow-lg flex items-center gap-8 hover:shadow-slate-400 duration-300 cursor-pointer h-18 w-210 mt-74 m-5 absolute rounded-4xl px-6 -ml-15">  
      <b className="font-medium text-base -mt-7 ">Unlock more with Plus</b> 
      <b className="font-medium text-sm absolute mt-4">ChatGPT Plus gives you higher limits, smarter models, and Sora for video.</b>
      {/* black get plus vali div */}
      <div className="bg-black h-7 w-23 rounded-2xl overflow-auto text-white flex  px-4  ml-auto">Get Plus</div>
      <button className="hover:bg-slate-200 rounded-2xl size-8">
        <i className="fa-solid fa-xmark text-xl cursor-pointer " />
      </button>
    </div>
  </div> 
</div>

</>

  )
}

export default App;