function App(){
  return(
    <>
    <div>
 
  {/* main parent div  */}
  <div className="bg-white h-1080">
    {/* oraange backgroung vala  parent div */}
    <div className="bg-[#FF5200] h-200">
      <div className="h-20 w-full mt-9 absolute">
        <img className="h-13 mt-4 ml-30 cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="logo" />
        <div className="h-17 w-190 ml-177 -mt-15 absolute flex gap-12 text-white cursor-pointer">
          <div className="mt-5">
            <button className="cursor-pointer">Swiggy Corporate</button>
          </div>
          <div className="mt-5">
            <button className="cursor-pointer">Partner With Us</button>
          </div>
          <div className="mt-2 border-amber-50 border-2 rounded-2xl h-13 w-40">
            <button className="cursor-pointer ml-6 mt-2.5">
              Get The App <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
          <div className="mt-2 bg-black h-13 w-33 rounded-2xl font-bold items-center">
            <button className="cursor-pointer ml-9 mt-3">Sign in</button>
          </div>
        </div>
      </div>
      {/* uppar swiggy logo vali line end */}
      {/* side ki 2 images start */}
      <div className="absolute flex w-full justify-between mt-25 ">
        <div className=" w-60  "><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="left side image" /></div>
        <div className=" w-60  "><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="right side image" /></div>
      </div>
      {/* side ki 2 images end  */}
      <div className="absolute h-35 w-full mt-50 text-white text-5xl font-extrabold text-center">
        <p className>
          Order Food &amp; Groceries. Discover <br />
          Best Restaurants. SWIGGY it!
        </p>
      </div>
      <div className="absolute  h-19 mt-80 w-full flex gap-8 p-4">   {/* middle vale selectors */}
        <div className="bg-white h-13 w-70 ml-100 rounded-xl">
          <i className="fa-solid fa-location-crosshairs ml-3 mt-4.5" />
          <label htmlFor="search">Enter Your delivery location</label>
          <select className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" name="location" id="search">
            <option />
            <option />
            <option />
          </select>
        </div>
        <div className="bg-white h-13 w-100 rounded-xl text-black">
          <label htmlFor="more" />
          <input className=" mt-3 ml-3 w-80" type="text" name="rest" id="more" placeholder="Search For Restaurants,Items or more" />
          <i className="fa-solid fa-magnifying-glass ml-6  font-light" />
        </div>
      </div>            {/* selectors finish  */}
      {/* three white boxes starts */}   <div className="absolute  h-87 w-full mt-95 flex  justify-center ">
        <div className=" w-100 h-90 mt-6 rounded-2xl cursor-pointer">
          <img className="w-100" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="image" />
        </div>
        <div className=" w-100 mt-6 rounded-2xl cursor-pointer ">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="image" />
        </div>
        <div className="w-100 mt-6 rounded-2xl cursor-pointer">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="image" />
        </div>
      </div>   {/* three white boxes ends */}
    </div>     {/* orange div end  */}
    {/* food options vali tab scrollable */}
    <div className=" w-320 h-100 mt-30 ml-32">
      <div className="absolute h-15 w-320 flex">
        <p className="font-bold text-xl  mt-2 ">Order Our Best Food Options</p>
        <div className="ml-225 text-2xl gap-2 mt-3 cursor-pointer">
          <i className="fa-solid fa-arrow-left" />
          <i className="fa-solid fa-arrow-right ml-7" />
        </div>
      </div>
      {/* dish ke buttons  */}
      <div className="flex absolute  mt-15 w-320">
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" alt="food image" /></button></div>
      </div>
      <div className="flex absolute mt-58 w-320 ">
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rasgulla.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png" alt="food image" /></button></div>
        <div><button className="cursor-pointer"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" alt="food image" /></button></div>
      </div>
    </div>
    {/* shop Groceries on instamart   */}
    <div className=" w-320 h-70 mt-30 ml-32">
      <div className="absolute h-15 w-320 flex">
        <p className="font-bold text-xl  mt-2 ">Shop Groceries on instamart</p>
        <div className="ml-225 text-2xl gap-2 mt-3 cursor-pointer">
          <i className="fa-solid fa-arrow-left" />
          <i className="fa-solid fa-arrow-right ml-7" />
        </div> 
      </div>
      {/* items sections */}
      <div className="flex absolute mt-14 w-320 gap-3">
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a" alt /></button></div>
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd" alt=" product image " /></button></div>
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e" alt=" product image " /></button></div>
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783" alt=" product image " /></button></div>
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a" alt=" product image " /></button></div>
        <div> <button><img className="size-50  cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa" alt=" product image " /></button></div>
      </div>
    </div>
    {/* Discover best restaurants on Dineout div close  */}
    <div className=" w-320 h-100 mt-30 ml-32">
      <div className=" h-15 w-320 absolute">
        <p className="font-bold text-xl  mt-5  ml-3">Discover best restaurants on Dineout</p>
        <div className="ml-290 text-2xl gap-2 -mt-7 cursor-pointer">
          <i className="fa-solid fa-arrow-left" />
          <i className="fa-solid fa-arrow-right ml-7" />
        </div> 
      </div>
      {/* dineout templates */}
      <div className="absolute  h-73 mt-25 w-320 flex gap-3 justify-center ">
        <div className="bg-slate-50 h-80 w-77 mt-1 rounded-2xl cursor-pointer">
          <div className="absolute text-white font-bold  flex mt-33"><p className="ml-3">The 202 Kitchen And Cafe</p> <p className="ml-13"><i className="fa-solid fa-star text-green-600" /> 4.6</p></div>
          <img className="rounded-2xl w-full h-40" src="https://b.zmtcdn.com/data/pictures/0/19703300/d46147cd0fc180b159d32b507164d0e0.jpg?fit=around|960:500&crop=960:500;*,*" alt="202 cafe" />
          <div className="absolute flex h-5  w-77 mt-2 text-xs "><p className="mt-1 ml-3">Vaishali Nagar,Jaipur </p> <p className="ml-36 mt-1">5.2 KM</p></div>
          <div className="absolute h-5 w-30 bg-slate-100 rounded-2xl mt-15 ml-2 text-xs flex  "> <i className="fa-solid fa-check ml-2 mt-1" />  <p className="ml-3 mt-0.5">Table Booking</p> </div>
          <div className="absolute bg-green-700 w-75 h-6 mt-22 ml-1 rounded-sm text-sm flex text-white font-bold  "> <p className="ml-2">% Flat 10% Off On Pre-Booking</p> <p className="ml-4.5">+ 2 More</p></div>
          <div className="absolute bg-green-300 w-75 h-6 mt-30 ml-1 rounded-sm text-sm flex text-green-800 font-bold  "><p className="ml-2">Upto 10% Off With Bank Offers</p></div>
        </div>
        <div className="bg-slate-50 h-80 w-77 mt-1 rounded-2xl cursor-pointer">
          <div className="absolute text-white font-bold  flex mt-33"><p className="ml-3">Jaipur Modern -  Store...</p> <p className="ml-16"><i className="fa-solid fa-star text-green-600" /> 4.4</p></div>
          <img className="rounded-2xl w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE53bCk3fblYAwBfxkR5f0TcPlUg4Nzecbgw&s" alt="modern cafe" />
          <div className="absolute flex h-5  w-77 mt-2 text-xs"><p className="mt-1 ml-3">C - Scheme,Jaipur </p> <p className="ml-42 mt-1">2 KM</p></div>
          <div className="absolute h-5 w-30 bg-slate-100 rounded-2xl mt-15 ml-2 text-xs flex "> <i className="fa-solid fa-check ml-2 mt-1" />  <p className="ml-3 mt-0.5">Table Booking</p> </div>
          <div className="absolute bg-green-700 w-75 h-6 mt-22 ml-1 rounded-sm text-sm flex text-white font-bold  "> <p className="ml-2">% Flat 10% Off On Pre-Booking</p> <p className="ml-4.5">+ 2 More</p></div>
          <div className="absolute bg-green-300 w-75 h-6 mt-30 ml-1 rounded-sm text-sm flex text-green-800 font-bold  "><p className="ml-2">Upto 10% Off With Bank Offers</p></div>
        </div>
        <div className="bg-slate-50 h-80 w-77 mt-1 rounded-2xl cursor-pointer">
          <div className="absolute text-white font-bold  flex mt-33"><p className="ml-3">Rajasthani Thali Dal Bati..</p> <p className="ml-13"><i className="fa-solid fa-star text-green-600" /> 4.2</p></div>
          <img className="rounded-2xl w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YFAR6uT0msNrV0_n95GoJRjRxTr28rYfyw&s" alt="rajasthani dal bati" />
          <div className="absolute flex h-5  w-77 mt-2 text-xs"><p className="mt-1 ml-3">Gayatri Sadan,Bani Park ,Jaipur </p> <p className="ml-23 mt-1">2.3 KM</p></div>
          <div className="absolute h-5 w-30 bg-slate-100 rounded-2xl mt-15 ml-2 text-xs flex "> <i className="fa-solid fa-check ml-2 mt-1" />  <p className="ml-3 mt-0.5">Table Booking</p> </div>
          <div className="absolute bg-green-700 w-75 h-6 mt-22 ml-1 rounded-sm text-sm flex text-white font-bold  "> <p className="ml-2">% Flat 10% Off On Pre-Booking</p> <p className="ml-4.5">+ 2 More</p></div>
          <div className="absolute bg-green-300 w-75 h-6 mt-30 ml-1 rounded-sm text-sm flex text-green-800 font-bold  "><p className="ml-2">Upto 10% Off With Bank Offers</p></div>
        </div>
        <div className="bg-slate-50 h-80 w-77 mt-1 rounded-2xl cursor-pointer">
          <div className="absolute text-white font-extrabold  flex mt-33"><p className="ml-3">The Lama</p> <p className="ml-41"><i className="fa-solid fa-star text-green-600" /> 4.6</p></div>
          <img className="rounded-2xl w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwwh4dwlT6ovRgQXygjqVS4htv3DIMp2cnA&s" alt="the lama cafe" />
          <div className="absolute flex h-5  w-77 mt-2 text-xs"><p className="mt-1 ml-3">C - Scheme,Jaipur </p> <p className="ml-42 mt-1">2 KM</p></div>
          <div className="absolute h-5 w-30 bg-slate-100 rounded-2xl mt-15 ml-2 text-xs flex "> <i className="fa-solid fa-check ml-2 mt-1" />  <p className="ml-3 mt-0.5">Table Booking</p> </div>
          <div className="absolute bg-green-700 w-75 h-6 mt-22 ml-1 rounded-sm text-sm flex text-white font-bold  "> <p className="ml-2">% Flat 10% Off On Pre-Booking</p> <p className="ml-4.5">+ 2 More</p></div>
          <div className="absolute bg-green-300 w-75 h-6 mt-30 ml-1 rounded-sm text-sm flex text-green-800 font-bold  "><p className="ml-2">Upto 10% Off With Bank Offers</p></div>
        </div>
      </div>
    </div>        {/* Discover best restaurants on Dineout div close  */}
    <img className="mt-30 cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="swiggy image with qr" />
    {/* cities with grocery delivery section   1  */}
    <div className=" w-320 h-100 mt-30 ml-32">
      <div className=" h-15 w-320 absolute">
        <p className="font-bold text-xl  mt-3  ml-3">Cities With Food Deliveries</p>
      </div>
      <div className="absolute cursor-pointer  h-17  mt-20  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Banglore </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Gurgaun</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Hyderabad</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Delhi</p></div>
      </div>
      <div className="absolute cursor-pointer h-17  mt-45  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Mumbai </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Pune</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Kolkata</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Chennai</p></div>
      </div>
      <div className="absolute cursor-pointer h-17  mt-70  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Ahmedabad </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Chandigarh</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Food In Jaipur</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl text-orange-600"><p className="mt-3">SHOW MORE </p></div>
      </div> 
    </div>
    {/* cities with grocery delivery section   2   */}
    <div className=" w-320 h-100 mt-30 ml-32">
      <div className=" h-15 w-320 absolute">
        <p className="font-bold text-xl  mt-3  ml-3">Cities With Grocery Deliveries</p>
      </div>
      <div className="absolute cursor-pointer  h-17  mt-20  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Banglore </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Gurgaun</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Hyderabad</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Delhi</p></div>
      </div>
      <div className="absolute cursor-pointer h-17  mt-45  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Mumbai </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Pune</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Kolkata</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Chennai</p></div>
      </div>
      <div className="absolute cursor-pointer h-17  mt-70  w-320 flex gap-6 justify-center">
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Ahmedabad </p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Chandigarh</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl"><p className="mt-3">Order Grocery  In Jaipur</p></div>
        <div className="  h-14 w-73 mt-1.5 border-1 shadow-xl flex justify-center rounded-xl text-orange-600"><p className="mt-3">SHOW MORE </p></div>
      </div> 
    </div>
    {/* swiggy support section   */}
    <div className="h-130 mt-29">
      <div className="absolute ml-40 mt-15 cursor-pointer ">
        <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Swiggy" />
        <div className="mt-2"><p>@2025  Swiggy Limited</p></div>
      </div>
      <div className="absolute ml-140 mt-15 "> <p className="font-bold cursor-pointer">Company</p>
        <ul className="flex flex-col gap-4 mt-3 cursor-pointer">
          <li>About US</li>
          <li>Swiggy Corporate</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Dineout</li>
          <li>Mini's</li>
          <li>Pyng</li>
        </ul>
      </div>
      <div className="absolute mt-15 ml-190"> <p className="font-bold cursor-pointer">Contact Us</p>
        <ul className="flex flex-col gap-4 mt-3 cursor-pointer">
          <li>Help &amp; Support</li>
          <li>Partner With Us</li>
          <li>Ride With US</li>
        </ul>
      </div>
      <div className="absolute ml-190 mt-60 "> <p className="font-bold cursor-pointer">Legal</p>
        <ul className="flex flex-col gap-4 mt-3 cursor-pointer">
          <li>Terms &amp; Conditions</li>
          <li>Cookie Policies</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div className="absolute mt-15 ml-250"> <p className="font-bold cursor-pointer">Available In</p>
        <ul className="flex flex-col gap-4 mt-3 cursor-pointer">
          <li>Banglore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
        <div className="mt-5 border-1 cursor-pointer "> 
          <label htmlFor="city">685 Cities</label>
          <select className name="cities" id="city" />
        </div>
      </div>
      <div className="absolute mt-15 ml-300 "> <p className="font-bold cursor-pointer">Life At Swiggy</p>
        <ul className="flex flex-col gap-4 mt-3 cursor-pointer">
          <li>Explore With Swiggy</li>
          <li>Swiggy News</li>
          <li>Snackables</li>
        </ul></div>
      <div className="absolute  mt-60 ml-300 "> <p className="font-bold cursor-pointer">Social Links</p>
        <div className="flex  gap-4 mt-3">
          <i className="cursor-pointer fa-brands fa-linkedin" />
          <i className="cursor-pointer fa-brands fa-instagram" />
          <i className="cursor-pointer fa-brands fa-facebook" />
          <i className="cursor-pointer fa-brands fa-pinterest" />
          <i className="cursor-pointer fa-brands fa-twitter" />
        </div>
      </div>
    </div>
    <hr />
    {/* last div -- for better experience  */}
    <div className=" h-30 mt-2">
      <div className="absolute flex gap-10 mt-7">
        <div className="font-bold text-xl ml-50 mt-5"><p>For Better Experience, Download The Swiggy App Now </p></div>
        <div className> <button className="cursor-pointer"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store" /></button></div>
        <div className> <button className="cursor-pointer"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Play Store" /></button></div>
      </div>
    </div>
    {/* parent div end   */}
  </div>
</div>



</>

  )
}

export default App;