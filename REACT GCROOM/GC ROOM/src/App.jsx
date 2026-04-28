function App(){
  return(
    
    <>

<div>
  {/* Navbar */}
  <div className=" bg-white h-20 rounded-2xl  m-4 flex justify-between shadow-blue-200 shadow-lg hover:shadow-blue-400 duration-500">
    {/* Left div of navbar */}
    <div className="w-58 h-20  flex items-center gap-4">
      <i className="fa-solid fa-bars text-2xl text-black ml-5 hover:scale-110 hover:duration-500 hover:text-black cursor-pointer" />
      <img src="https://www.gstatic.com/classroom/logo_square_rounded.svg" className=" h-8 w-8" />
      <div className=" text-sm xl:text-2xl text-slate-400 hover:text-black bold cursor-pointer"> <u>Classroom</u></div>
    </div>
    {/* rightmost div of navbar */}
    <div className="hidden md:block">
      <button className="flex items-center gap-4 w-30 h-20 ">
        <i className="fa-solid fa-plus text-slate-600 cursor-pointer" />
        <i className="fa-solid fa-braille text-slate-600 cursor-pointer" />
        <p className="bg-gradient-to-r from-slate-400 to-blue-700 rounded-full text-white size-8 flex justify-center items-center cursor-pointer">S</p>
      </button>
    </div>
  </div>  {/*navbar wala div khtm hogya yahan par*/}
  {/* main centre wale dono divs ka parent */}
  <div className=" h-screen grid  grid-cols-12 sm:grid-cols-12 gap-5 ">
    {/* main centre wale div ka left wala div*/}
    <div className="  sm:col-span-2 text-sm overflow-y-auto h-135 text-white hidden sm:block"> {/* doubt haii######## isme flex flex col lgakr flex 1 kyun kaam nahi kr raha agar hum h-135 htakr ye lagaein tohh ?*/}
      {/*hidden sm:block ka matlab haii ki block sm aurr usse badi screen pr visible rhega but usse choti screen size pr hidden hojaega  */}
      {/* us left wale div ka top most wala div */}
      <div className=" p-4 text-black  gap-7 flex flex-col flex-1">
        <button className="flex gap-8 items-center hover:bg-blue-400  hover:bg-slate-100 cursor-pointer"><i className="fa-solid fa-house" />
          <p className="text-lg ">Home</p>
        </button>
        <button className=" flex gap-8 items-center hover:bg-blue-400  hover:bg-slate-100 cursor-pointer"><i className="fa-regular fa-calendar " />
          <p className="text-lg">Calendar</p>
        </button></div>
      <hr className="border-gray-800 " />  {/* border code  */}
      {/* left wale div ke centre wala div  */}
      <div className="  p-3 flex flex-col flex-1 gap-6 items-left text-black">
        <button className="flex gap-4 items-center hover:bg-slate-100 cursor-pointer"><i className="fa-solid fa-graduation-cap" />
          <p>Enrolled</p>
        </button>  {/*enrolled wala button */}
        <button className="flex items-center gap-4 hover:bg-slate-100 cursor-pointer">
          <i className="fa-solid fa-list-check" />
          <p>To-do</p>  
        </button>
        {/* classes wale button */}
        <div className=" flex flex-col flex-1 gap-6 text-left ">
          <button className="flex items-center gap-4   hover:bg-slate-100 cursor-pointer">
            <p className="bg-black rounded-full text-white size-8 flex justify-center items-center cursor-pointer ">L</p>
            <p>LINUX/Git-4 March</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-pink-500 rounded-full text-white size-8 flex justify-center items-center cursor-pointer ">F</p>
            <p>Frontend BATCH - A</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-yellow-500 rounded-full text-white size-8 flex justify-center items-center cursor-pointer ">I</p>
            <p>Intermediate CPP-2</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-red-500 rounded-full text-white size-8 flex justify-center items-center cursor-pointer">B</p>
            <p>BEGINNER CPP-2</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-black rounded-full text-white size-8 flex justify-center items-center cursor-pointer">L</p>
            <p>LINUX/Git</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-orange-500 rounded-full text-white size-8 flex justify-center items-center cursor-pointer ">C</p>
            <p>C LOGICAL A-24</p>
          </button>
          <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
            <p className="bg-green-500 rounded-full text-white size-8 flex justify-center items-center cursor-pointer ">C</p>
            <p>C LOGICAL A-23</p>
          </button>
        </div>
        {/* ye us left wale div ke 2nd div ka end haii */}
      </div>
      <hr className="border-gray-900 " /> 
      {/* left wale div ka lower most Div */}
      <div className=" p-5  flex flex-col text-black flex-1 gap-6">
        <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">    {/*Doubt*## */}
          <i className="fa-solid fa-box-archive" />
          <p>Archived classes</p>
        </button>
        <button className="flex items-center gap-4  hover:bg-slate-100 cursor-pointer">
          <i className="fa-solid fa-gear" />
          <p>Settings</p>
        </button>
      </div>
      {/* ye last wala khtm hone wala div main centre parent div ke left wale div ka haii */}
    </div>  
    {/*right wala div  */}
    <div className="   grid sm:grid-cols-1 md:grid-cols-2 overflow-y-auto h-135 lg:grid-cols-3  sm:col-span-10 col-span-12 gap-9 rounded-2xl p-5 "> {/*yehan pr humne do properties grid ki ek saath use kari hain single row meyy kitne elements honge wo wali aurr upar wali properties wali bhii*/}
      {/* card1 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200  relative cursor-pointer">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_backtoschool.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Intermediate CPP-2</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl ml-[3px] text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 2 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">LINUX/Git-4 Mar</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 3 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200  relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_graduation.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Frontend BATCH - A</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 4 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Beginner-cpp-2</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 5 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Linux/git</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 6 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">C-LOgical A-24</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 7 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">C-logical-A-23</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 8 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Intermediate CPP-5</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
      {/* card 9 */}
      <div className="overflow-hidden w-80 h-60 bg-white rounded-xl shadow-lg shadow-slate-400 hover:shadow-slate-500 duration-200 relative">
        <button className="cursor-pointer">
          <img src="https://gstatic.com/classroom/themes/img_code.jpg" className="h-30 w-80" />
          <h1 className="absolute top-3 left-3 text-white text-2xl">Intermediate CPP-6</h1>
          <p className="absolute top-19 left-3 text-white ">REGex software</p>
          <div className="bg-lime-600 rounded-full size-17 absolute left-60 bottom-10 relative">
            <h1 className="absolute left-5 top-3 text-4xl text-white">R</h1>  
            <div className="flex flex-col items-center"><hr className="border-gray-400 absolute w-155 top-30" /></div>
            <i className="fa-solid fa-folder-closed absolute top-32" />
            <i className="fa-regular fa-id-badge absolute top-32 text--gray-400  right-16 te" />
          </div>
        </button>
      </div>
    </div>  {/*sm:col-span-9 col-span-12 means jb size sm se chota hoga toh ye wala div poore 12 columns lelega pr sm ya usse bade size pr 9 cols lega */}
  </div>
</div>



</>
  )
}

export default App;

