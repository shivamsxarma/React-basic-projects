function App(){
  return(
    <>

<div>
  {/* Navigation Bar */}
  <div className="flex">
    <div>
      <img src="https://rewardone.in/wp-content/uploads/2024/05/b4a0607481.png" className="h-auto w-40" alt />
    </div>
    <div className="h-auto w-60 text">
      <p className="font-bold mt-5">Delivery in 10 minutes </p>
      <p>12,Luvkush Nagar,Near Tonk...<i className="fa-solid fa-caret-down" /></p>
    </div>
    <div className=" flex  h-10 bg-slate-100 mt-5 rounded-2xl ">
      <i className="fa-solid fa-magnifying-glass mt-3 ml-2" />
      <input type="text" name="Search" placeholder="Search 'paneer'" className="ml-4 w-200" />
    </div>
    <div className="flex gap-3">
      <button className="ml-5 mt-5 w-20 h-10 bg-gray-400 text-white rounded-lg shadow-md" style={{cursor: 'pointer'}}>Login</button>
      <button className="ml-5 mt-5 w-30 h-10 bg-gray-500 text-white rounded-lg shadow-md" style={{cursor: 'pointer'}}><i className="fa-solid fa-cart-shopping" />My Cart</button>
    </div>
  </div>
  {/* Paan Corner */}
  <div className="w-50vh mx-30">
    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt />
  </div>
  {/* Pharmacy,PetCare, Diaper run */}
  <div className="flex justify-center-safe gap-5">
    <span>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,/layout-engine/2023-07/pharmacy-WEB.jpg" alt className=" h-45 w-80 " />
    </span>
    <span className>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2023-07/Pet-Care_WEB.jpg" alt className="h-45 w-80" />
    </span>
    <span className>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2023-03/babycare-WEB.jpg" alt className="h-45 w-80" />
    </span>
  </div>
  {/* Menu Line 1*/}
  <div className="flex justify-center">
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2022-12/paan-corner_web.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2022-11/Slice-2_10.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png" alt className="h-45 w-30" />
    </div>
  </div>
  {/* Menu Line 2*/}
  <div className="flex justify-center">
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2022-11/Slice-11.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none/layout-engine/2022-11/Slice-12.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png" alt className="h-45 w-30" />
    </div>
    <div>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png" alt className="h-45 w-30" />
    </div>
  </div>
  <br />
  {/* Dairy, Bread and Eggs */}
  <div>
    <p className="font-bold text-2xl ml-35 py-5">Dairy,Bread and Eggs</p>
    {/* Cards line for Dairy, Bread and Eggs */}
    <div className="flex justify-center gap-2">
      {/* Card 1  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/adebcc0a-e373-4bc5-aa6f-e504d9d2014b.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Saras Toned Milk</p>
          <p className="text-gray-300 text-sm">500 ml</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹29</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/016db06e-1840-4069-b9b4-dec66e8ba4c9.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Saras Gold Full Cream Milk</p>
          <p className="text-gray-300 text-sm">500 ml</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹34</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 3  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Amul Taaza Toned Milk</p>
          <p className="text-gray-300 text-sm">500 ml</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹27</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 4  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/95a47dbf-adcd-4631-8b95-acae31bc5242.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Saras Cup Card</p>
          <p className="text-gray-300 text-sm">200 g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹16</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 5  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Amul Salted Butter</p>
          <p className="text-gray-300 text-sm">100 g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹62</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 6  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/74b0d3be-111c-4342-ac27-43fd7bb54793.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Amul Gold Full Cream Milk</p>
          <p className="text-gray-300 text-sm">1 ltr</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹67</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Rolling paper & tobacco */}
  <div>
    <p className="font-bold text-2xl ml-35 py-5">Rolling paper &amp; tobacco</p>
    {/* Cards line for Rolling paper & tobacco */}
    <div className="justify-center flex gap-2">
      {/* Card 1  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Ultimate Rolling Paper</p>
          <p className="text-gray-300 text-sm">1 pack(32 pieces)</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹90</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/90c1209b-2ee3-4699-b4d3-44021588e077.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Rolling Paper by Stash...</p>
          <p className="text-gray-300 text-sm">1 pack(32 pieces)</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹55</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 3  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Perfect Rolled Cones</p>
          <p>(Natural) - Bongchie</p>
          <p className="text-gray-300 text-sm">3 pack</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹45</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 4  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/500d636d-e59e-4835-a0e5-3d8e7ad26d3b.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Brown Ripper Rolling Paper 32 Leaves + 32...</p>
          <p className="text-gray-300 text-sm">1 pack(64 pieces)</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹120</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 5  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/aea43219-ee8f-4ffc-993d-7cbc19bc348d.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Brown Rolling Paper Cones-Stash Pro</p>
          <p className="text-gray-300 text-sm">6 Pieces</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹90</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 6  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/203e20bb-56ee-436c-9d52-c433cc4a2a89.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Colour Roach-Stash Pro</p>
          <p className="text-gray-300 text-sm">100 ml</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹29</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Snacks & Munchies*/}
  <div>
    <p className="font-bold text-2xl ml-35 py-5">Snacks &amp; Munchies</p>
    {/* Cards line for Snacks & Munchies*/}
    <div className="flex justify-center gap-2">
      {/* Card 1  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3eae3870-eb2a-43eb-ad30-967d17f7d691.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Protein Chef Baked Coated Peanuts(Masa...</p>
          <p className="text-gray-300 text-sm">50g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹69</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Beanly Choco Hazelnut Spread with Breadsticks</p>
          <p className="text-gray-300 text-sm">52 g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹99</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 3  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a2d5e14-4425-4d2d-8958-6d51c6fd73d9.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Lo! Foods Gluten Free Millet Ragi Chips</p>
          <p className="text-gray-300 text-sm">100 ml</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹29</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 4  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0152278c-3d9b-4338-ae6b-b861503c981b.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Pringles Original Potato Chips</p>
          <p className="text-gray-300 text-sm">107 g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹102</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 5  */}
      <div className="border border-gray-400 rounded-sm  h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5e52952d-3a98-48cb-b4e6-704b7dab94d7.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <p>Kettle Studio Himalayan Pink Salt Potato Chips</p>
          <p className="text-gray-300 text-sm">56 g</p>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹47</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
      {/* Card 6  */}
      <div className="border border-gray-400 rounded-sm flex flex-col h-auto w-50">
        {/* Product Image */}
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fc9d86ff-b9c1-4c55-b099-ef6f88d843d7.png" alt />
        <div className="ml-3">
          {/* Product Delivery Time */}
          <div className="flex items-center bg-slate-300 w-20 rounded-3xl">
            <i className="fa-solid fa-clock h-5 w-5" />
            <div className="text-s">8 MINS</div>
          </div>
          {/* Name of Product */}
          <div>
            <p>Kettle Studio Sharp Jalapenos &amp; Cream...</p>
            <p className="text-gray-300 text-sm">100 ml</p>
          </div>
          {/* Price and Add button */}
          <div className="flex justify-between">
            <p>₹29</p>
            <p className="border border-green-400  bg-green-100 rounded-2xl px-1.5 mr-1.5">Add</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div className>
    <div className="ml-60 mt-20 absolute">
      <div className="text-2xl font-bold flex">Useful Links</div>
      <div className="flex gap-5">
        <ul className="text-slate-500">
          <li>Blog</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>FAQs</li>
          <li>Security</li>
          <li>Contacts</li>
        </ul>
        <ul className="text-slate-500">
          <li>Partner</li>
          <li>Franchise</li>
          <li>Seller</li>
          <li>Warehouse</li>
          <li>Deliver</li>
          <li>Resources</li>
        </ul>
        <ul className="text-slate-500">
          <li>Recipes</li>
          <li>Bistro</li>
          <li>District</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="ml-150 mt-20">
    <div className="text-2xl font-bold  ">Categories</div>
    <div className="flex gap-10">
      <ul className="text-slate-500">
        <li>Vegetables &amp; Fruits</li>
        <li>Cold Drinks &amp; Juices</li>
        <li>Bakery &amp; Biscuits</li>
        <li>Dry Fruits, Masala &amp; Oil</li>
        <li>Paan Corner</li>
        <li>Pharma &amp; Wellness</li>
        <li>Personal Care</li>
        <li>Beauty &amp; Cosmetics</li>
        <li>Electronics &amp; Electricals</li>
        <li>Toys and Games</li>
        <li>Rakhi gifts</li>
      </ul>
      <ul className="text-slate-500">
        <li>Dairy &amp; Breakfast</li>
        <li>Instant &amp; Frozen Foods</li>
        <li>Sweet Tooth</li>
        <li>Sauces &amp; Spreads</li>
        <li>Organic &amp; Premium</li>
        <li>Cleaning Essentials</li>
        <li>Ice Creams &amp; Frozen Desserts</li>
        <li>Fasion &amp; Accessories</li>
        <li>Stationary Needs</li>
        <li>Print Store</li>
      </ul>
      <ul className="text-slate-500">
        <li>Munchies</li>
        <li>Tea, Coffee and Health Drinks</li>
        <li>Atta,Rice &amp; Dal</li>
        <li>Chicken, Meat &amp; Fish</li>
        <li>Baby Care</li>
        <li>Home &amp; Office</li>
        <li>Pet Care</li>
        <li>Kitchen &amp; Dining</li>
        <li>Books</li>
        <li>E-Gift Cards</li>
      </ul>
    </div>
  </div>
</div>



</>

  )
}

export default App;