function App(){
  return(
    <>
<div>
  {/* navbar  top */}
  <div className="bg-slate-100 h-16   flex shadow-lg hover:shadow-slate-400 duration-300 ">
    {/* gmail logo */}
    <button className=" hover:bg-slate-300 cursor-pointer absolute rounded-full  text-center ml-6 mt-4 text-xl">
      <i className="fa-solid fa-bars  relative" />
    </button>
    {/* google  mail image */}
    <img className="h-11 mt-2 ml-14 cursor-pointer" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="GMAIL" />
    {/* center search bar */}
    <div className="absolute  w-175 ml-68 mt-2  ">
      <button className="absolute left-3 top-1/2 -translate-y-1/2  text-lg">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
      <p className="absolute flex  text-2xl mt-0.5 ml-160 text-slate-500">|</p>
      <button className="absolute text-lg flex  mt-3 ml-163">
        <i className="fa-solid fa-sliders" />
      </button>
      <input type="text" placeholder="Search for songs, artists..." className="w-full pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-[#4f4f4f] bg-slate-200" />
    </div>
    <button> 
      <i className="fa-solid fa-circle-question text-xl mt-3 ml-299 hover:bg-slate-300 cursor-pointer rounded-2xl  " />
    </button>
    <button>    
      <i className="fa-solid fa-gear            text-xl mt-3 ml-5  hover:bg-slate-300 cursor-pointer  rounded-2xl" />
    </button>
    <button>     
      <i className="fa-solid fa-chess-board     text-xl mt-3 ml-5  hover:bg-slate-300 cursor-pointer rounded-2xl " />
    </button>
    <button>     
      <i className="fa-solid fa-user            text-xl mt-3 ml-5  hover:bg-slate-300 cursor-pointer rounded-2xl " />
    </button>
  </div>
  {/* left wali div */}
  <div className="bg-slate-100  h-150 w-69 mt-2 ml-1  rounded-xl flex  absolute"> 
    <div className=" bg-blue-300 h-15 w-37 rounded-2xl  ml-2 mt-4  shadow-lg hover:shadow-slate-400 duration-500   cursor-pointer ">
      <button className="cursor-pointer  ">
        <i className="fa-solid fa-pen absolute mt-5.5  -ml-10 text-xl"> </i> 
        <p className=" relative ml-13 mt-4.5 ">Compose</p>
      </button>
    </div> 
    {/* compose ke niche vale buttons */}
    <div className=" mt-20  ml-4 text-sm gap-1 px-2 py-1 absolute  ">
      <button className="  w-35 h-10  rounded-xl flex items-center gap-2 hover:bg-blue-300 cursor-pointer text-sm font-sans ">
        <i className="fa-solid fa-clone" />
        <p className="font-bold  text-sm ml-5 ">Inbox</p>
      </button> 
      <button className="  w-35 h-5 rounded-xl flex items-center gap-1.5 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-star" />
        <p className="font-bold  text-sm ml-5">Starred</p>
      </button>
      <button className="  w-35 h-8  rounded-xl flex items-center gap-2 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-clock" />
        <p className="font-bold  text-sm ml-5">Snoozed</p>
      </button>
      <button className="  w-35 h-6  rounded-xl flex items-center gap-2 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-paper-plane" />
        <p className="font-bold  text-sm ml-5">Sent</p>
      </button>
      <button className=" w-35 h-8  rounded-xl flex items-center gap-2 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-draw-polygon" />
        <p className="font-bold  text-sm ml-5">Draft</p>
      </button>
      <button className=" w-45 h-4  rounded-xl flex items-center gap-2 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-caret-down" />
        <p className="font-bold  text-sm ml-6"> More</p>
      </button>
      <p className="mt-9 text-xl">labels</p> <i className="fa-solid fa-plus ml-55  -mt-4.5 text-xm absolute hover:bg-blue-300 cursor-pointer rounded-2xl " />
      <button className=" w-45 h-10  rounded-xl flex items-center gap-4 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-tag" />
        <p className="font-bold  text-sm ml-5"> Notes</p>
      </button>
      <button className=" bg-white  w-60 h-9  mt-55 rounded-xl flex items-center gap-4 hover:bg-blue-300 cursor-pointer">
        <i className="fa-solid fa-trophy" />
        <p className="font-bold  text-sm ml-5"> Upgrade</p>
        <i className="fa-solid fa-arrow-right ml-20  " />
      </button>
    </div>
  </div>
  {/* center div which contain mail */}
  <div className="bg-white h-148 w-310 ml-72 mt-3 rounded-2xl shadow-lg  duration-300  absolute">
    <div className=" h-7 w-30 ml-6 flex relative mt-4 gap-5 ">
      <button className="cursor-pointer">
        <i className="fa-regular fa-square-check" />
      </button>
      <button className="cursor-pointer">
        <i className="fa-solid fa-caret-down" />
      </button>
      <button className="cursor-pointer">
        <i className="fa-solid fa-rotate-right" />
      </button>
      <button className="cursor-pointer">
        <i className="fa-solid fa-bars " />
      </button>
    </div>  
    <div className=" w-40 h-5 justify-center flex absolute ml-270 -mt-6">
      <p className="flex relative ">1-15 of 300</p>
      <button>
        <i className="fa-solid fa-caret-left relative flex mt-1 ml-4 cursor-pointer" />
      </button>
      <button>
        <i className="fa-solid fa-caret-right ml-5 mt-1 relative flex cursor-pointer" />
      </button>
    </div>
    <div className=" absolute flex gap-25 ml-5 mt-2 h-18 w-300 text-sm">  {/* updates vali div */}
      <button className="  w-45 h-10  rounded-xl flex flex-col items-start gap-1   cursor-pointer relative ">
        <i className="fa-solid fa-clone absolute mt-6 ml-4" />
        <p className=" ml-12 mt-4 text-sm ">Primary</p>
        <div className="bg-green-500 h-5 w-13 rounded-2xl absolute ml-25 mt-5   ">18 New</div>
        <p className="ml-10 text-sm">Apple airpods..</p>
      </button> 
      <button className="  w-45 h-10  rounded-xl flex flex-col items-start gap-1 cursor-pointer relative">
        <i className="fa-solid fa-tag mt-6 absolute" />
        <p className=" ml-9 mt-3 text-sm">Promotion</p>
        <div className="bg-red-500 h-5 w-13 rounded-2xl absolute ml-28 mt-3.5 ">11 New</div>
        <p className="ml-10 text-sm">Apple airpods..</p>
      </button>
      <button className="  w-45 h-10  rounded-xl flex flex-col items-start gap-1  cursor-pointer relative">
        <i className="fa-solid fa-user-plus absolute mt-5" />
        <p className="text-sm ml-10 mt-3">Social</p>
        <div className="bg-yellow-300 h-5 w-13 rounded-2xl absolute ml-22 mt-3">50 New</div>
        <p className="ml-10 text-sm">Netflix is hiring..</p>
      </button>
      <button className="  w-45 h-10  rounded-xl flex flex-col items-start gap-1  cursor-pointer relative">
        <i className="fa-solid fa-circle-info mt-5" />
        <p className="text-sm ml-7 -mt-7">Updates</p>
        <div className="bg-blue-400 h-5 w-13 rounded-2xl absolute ml-23 mt-3 ">11 New</div>
        <p className="ml-7 text-sm">Facebook is now..</p>
      </button>
    </div>
    <div className=" h-115 mt-20 ml-1 w-308 absolute rounded-2xl p-4 overflow-auto">
      <table className="min-w-full divide-y divide-blue-500">
        <thead>
          <tr className="bg-white">
            <th className="px-0.1 py-2 text-left text-xs font-medium text-gray-500">Select</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Star</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Sender</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Preview</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-500 ">
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Apple</td>
            <td className="px-4 py-2 text-gray-500">Apple airpods release their new update with new exiting features click to know more</td>
            <td className="px-4 py-2 text-xs">Jul 31</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300  transition-shadow  cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Netflix</td>
            <td className="px-4 py-2 text-gray-500">Netflix is hiring..</td>
            <td className="px-4 py-2 text-xs">Jul 30</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">HDFC</td>
            <td className="px-4 py-2 text-gray-500">Pay your card bill before 2nd August</td>
            <td className="px-4 py-2 text-xs">Jul 29</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Amazon</td>
            <td className="px-4 py-2 text-gray-500">Your order is delivered</td>
            <td className="px-4 py-2 text-xs">Jul 28</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Amazon</td>
            <td className="px-4 py-2 text-gray-500">Your order is out for delivery</td>
            <td className="px-4 py-2 text-xs">Jul 28</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">REGex software</td>
            <td className="px-4 py-2 text-gray-500">Batch shift notification</td>
            <td className="px-4 py-2 text-xs">Jul 25</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Money view loans </td>
            <td className="px-4 py-2 text-gray-500">Pay your EMI before due date</td>
            <td className="px-4 py-2 text-xs">Jul 24</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">coding ninja</td>
            <td className="px-4 py-2 text-gray-500">Enroll for our bootcamp</td>
            <td className="px-4 py-2 text-xs">Jul 24</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">NYKAA</td>
            <td className="px-4 py-2 text-gray-500">Flash sale grab or gone</td>
            <td className="px-4 py-2 text-xs">Jul 23</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">WOW</td>
            <td className="px-4 py-2 text-gray-500">Get sunscreen @499</td>
            <td className="px-4 py-2 text-xs">Jul 22</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300 cursor-pointer">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2 "><i className="fa-solid fa-star text-yellow-400" /></td>
            <td className="px-4 py-2 font-semibold text-sm">IRCTC</td>
            <td className="px-4 py-2 text-gray-500">Ticket confirmed</td>
            <td className="px-4 py-2 text-xs">Jul 21</td>
          </tr>
          <tr className="hover:shadow-slate-400 shadow-md duration-300  cursor-pointer ">
            <td className="px-4 py-2"><i className="fa-regular fa-square-check" /></td>
            <td className="px-4 py-2"><i className="fa-solid fa-star text-gray-300" /></td>
            <td className="px-4 py-2 font-semibold text-sm">Kotak bank</td>
            <td className="px-4 py-2 text-gray-500">TRX of rs 400 ..</td>
            <td className="px-4 py-2 text-xs">Jul 20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>




</>

  )
}

export default App;