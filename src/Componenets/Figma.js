
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// import { ChevronRight } from "lucide-react";

import dash from '../Vector/dash.png';
import rain from '../Vector/rain.png'
import search from '../Vector/search.png'

import image from '../images/header_img.png'

import logo from '../images/indiaretail-logo-23 1.png'

import hotspot from '../images/Screenshot 2025-09-04 160356.png'
import ai from '../images/Screenshot 2025-09-04 160431.png'
import shipping from '../images/Screenshot 2025-09-04 160510.png'

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'

import flower from '../images/flower.png'
import food from '../images/food&Beverage.png'
import momo from '../images/momo.png'

import rahul from '../images/rahul.png'

import bike from '../images/bike.png'


import shilpa from '../images/shilpa.png'
import store from '../images/store.png'
import dlf from '../images/dlf.png'
import fashion from '../images/fashion.png'
import pe from '../images/pe.png'


import denim from '../images/denim.png'
import human from '../images/human.png'
import mantra from '../images/mantra.png'
import retail from '../images/retail.png'
import apple from '../images/apple.png'

import roy from '../images/roy.png'
import vikram from '../images/vikram.png'
import lahiri from '../images/lahiri.png'

function Figma() {
    return (
        <div className=" h-screen">


            <div className="flex items-center justify-center">
                <img
                    className="w-[970] h-[250]"
                    alt='jjj' src={image} 

                />
            </div>


            <div className=" flex items-center justify-between   ">

                <div className=" flex gap-2 ml-8 items-center ">
                    <img src={search} alt="search"/>
                    <p className="text-gray-400 font-roboto text-sm">Search here...</p>
                </div>


                <div className="flex items-center justify-center">
                    <img src={logo} alt="logo"/>
                </div>


                <div className="flex text-center justify-end py-2 mr-8 space-x-2">
                    <button className="bg-red-600 w-[87px] h-[34px] text-white  py-2 text-sm  font-semibold">SUBSCRIBE</button>
                    <button className="bg-white w-[64px] h-[34px]  text-sm  rounded border font-semibold">SIGIN</button>
                </div>
            </div>

            <hr />

            <div className="flex items-center justify-between px-4 py-2">

                <div className=" ml-4 flex-1 text-3xl">
                    <img src={dash} alt="dash"/>
                    
                </div>

                <div className="flex text-center font-roboto">
                    <ul className="flex p-2 gap-6 text-sm font-semibold">
                        <ol className="text-rose-600">Home</ol>
                        <ol>Categories</ol>
                        <ol>IR Prime</ol>
                        <ol>Events</ol>
                        <ol>Bookstore</ol>
                        <ol>Newsletter</ol>
                        <ol>Video</ol>

                    </ul>
                </div>

                <div className="flex-1 flex justify-end space-x-2">
                   <img src={rain} alt="rain"/>
                    <p className="text-gray-500 font-lato text-sm">Friday,30june 2023</p>
                </div>
            </div>

            <div className="flex items-center justify-center text-xs text-zinc-400 mb-5 mt-3 ">
                <ul className="flex gap-5 font-inter">
                    <ol className="flex items-center ">Fashion & Lifestyle<span ><GoDotFill className=" text-rose-500 h-[8px] ml-4 "/></span></ol>
                    <ol className="flex items-center ">Beauty & Wellness <span ><GoDotFill className=" text-rose-500 h-[8px] ml-4"/></span></ol>
                    <ol className="flex items-center ">Food & Beverage <span ><GoDotFill className=" text-rose-500 h-[8px] ml-4"/></span></ol>
                    <ol className="flex items-center ">Consumer Durable & IT <span ><GoDotFill className=" text-rose-500 h-[8px] ml-4"/></span></ol>
                    <ol className="flex items-center ">Entertainment <span ><GoDotFill className=" text-rose-500 h-[8px] ml-4 "/></span></ol>  
                    <ol className="flex items-center ">Home Decor and Furnishing <span ><GoDotFill className=" text-rose-500 h-[8px] ml-4 "/></span></ol>
                    <ol className="flex items-center ">Speciality Retails</ol>
                </ul> 

            </div>

            <div className="bg-[rgba(248,249,250,1)] flex mx-auto  justify-between p-8 px-20">
                <div className=" h-[127px] flex bg-white w-[413px]  items-center">
                    <div>
                        <img className="w-[117px] h-[96px] rounded" alt='jjj'  src={hotspot} />
                    </div>

                    <div className=" text-start  ml-2 pr-5 rounded ">
                        <p className="text-rose-600 font-semibold font-roboto">HOTSPOTS</p>
                        <p className="">Luxury hotspots:5 most expensive</p>
                        <p>high street in the..</p>
                    </div>
                </div>

                <div className=" h-[127px] flex bg-white w-[413px]  items-center">
                    <div>
                        <img className="w-[117px] h-[96px]  rounded" alt='jjj' src={ai} />
                    </div>

                    <div className="place-items-start  ml-2 pr-5 rounded">
                        <p className="text-rose-600 font-semibold font-roboto">AI</p>
                        <p>5 ways to leverage the power of </p>
                        <p>ChatGPT in retail</p>

                    </div>
                </div>

                <div className="h-[127px] flex bg-white w-[413px]  items-center">
                    <div>
                        <img className="w-[117px] h-[96px] rounded" alt='jjj' src={shipping} />
                    </div>

                    <div className="place-items-start ml-2 pr-5 rounded">
                        <p className="text-rose-600 font-semibold font-roboto">SHIPPING</p>
                        <p>Reliance to open 250 Azorte stores </p>
                        <p>in 2-3 years</p>
                    </div>
                </div>

            </div>

            {/* Main Content */}
            <main className="container mx-20 mt-10  grid grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Featured News */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={rahul} alt="Featured"
                            className="w-[800px] h-[400px] object-cover"
                        />
                        <div className="absolute bottom-0   text-white p-4 ">
                            <p className='font-roboto  w-[73px] p-1 text-center items-center  text-sm bg-gradient-to-r from-[rgba(249,42,40,1)] to-[rgba(218,23,82,1)]'>IN FOCUS</p>
                            <h3 className="text-lg font-bold text-start">Rahul Gandhi in Manipur: Chopper Ride After Protest</h3>
                            <p className=" text-start font-bold">Protesters surround car</p>
                            <p className="text-gray-300 text-start">Rahul Gandhi</p>
                        </div>
                    </div>

                    {/* More Stories */}
                    <div className=" gap-4">

                        {/* --------------------------1 */}

                        <div className="flex w-[587px] h-[89px]  mb-6 ">
                            <div>
                                <img className="w-[143] h-[89] rounded" alt='jjj' src={momo} />
                            </div>

                             <div className="place-items-start  ml-6 rounded flex flex-col justify-between">
                                <p className="text-rose-600 font-semibold  text-sm font-roboto">SELECT CITYWALK</p>
                                <p className="flex items-center text-center font-semibold">Wow! Momo Foods enters Bhopal with Wow! <span className="ml-10"><IoIosArrowForward/></span></p>
                                <p className=" font-roboto">#CityWalk<span className="text-sm font-roboto ml-4 text-[rgba(80,78,78,1)]">#reel stories podcast</span></p>
                            </div>
                        </div>
                        <hr/>

                        {/* --------------------------2 */}


                        <div className="flex w-[587px] h-[89px] bg-white mb-8 mt-6">
                            <div>
                                <img className="w-[143] h-[89] rounded" alt='jjj' src={food} />
                            </div>

                            <div className="place-items-start  ml-6 rounded flex flex-col justify-between ">
                                <p className="text-rose-600 font-semibold text-sm font-roboto">FOOD & BEVERAGE</p>
                                <p className="text-start flex  font-semibold">KFC opens another outlet in Punjab KFC <br/>opens another outlet in Punjab
                                <span className="ml-20 justify-end items-end text-end"><IoIosArrowForward/></span>
                                </p>
                                <p className="mt-5 font-roboto">#Beverage
                                    <span className="text-sm font-roboto ml-4 text-[rgba(80,78,78,1)]">#reel stories podcast</span></p>
                            </div>
                        </div>
                        <hr/>

                        {/* --------------------------3 */}


                          <div className="flex w-[587px] h-[89px]  mt-4">
                            <div>
                                <img className="w-[143] h-[89] rounded" alt='jjj' src={flower} />
                            </div>

                            <div className="place-items-start  ml-6 rounded flex flex-col justify-between\ ">
                                <p className="text-rose-600 font-semibold text-sm font-roboto">SELECT CITYWALK</p>
                                <p className="flex items-center text-center font-semibold py-2 ">FNP (Ferns N Petals) appoints Ashish Goel <span className="ml-16"><IoIosArrowForward/></span></p>
                                <p className=" font-roboto">#CityWalk<span className="text-sm font-roboto ml-4 text-[rgba(80,78,78,1)]">#reel stories podcast</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Latest News */}
                <aside className="space-y-6">
                    <h2 className="text-lg font-bold text-gray-800 text-start  ">Latest News 
                    
                    </h2>
                    <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg cursor-pointer w-[344px] h-[216px]">
                        <img
                             src={img1}
                            alt="News"
                            className="rounded-lg mb-2"
                        />
                        <h3 className="font-semibold text-gray-800 font-inter">Unwrapping the Archies’ reinvention plan</h3>
                    </div>
                    <div className=" w-[344px] h-[238px] bg-white p-4 shadow rounded-lg hover:shadow-lg cursor-pointer">
                        <img
                             src={img2}
                            alt="News"
                            className="rounded-lg mb-2"
                        />
                        <h3 className="font-semibold text-gray-800 text-start font-inter">How AI is enhancing stores, How AI is enhancing stores</h3>
                    </div>

                    
                        <hr className="w-[335px] pl-4 ml-4"/>
                    


                    <div className=" pl-4  rounded-lg space-y-2 w-[335px]">
                        <p className=" text-gray-800 text-start font-semibold">Croma opens 58 outlets in 6, Croma retails more than 16,000</p>
                        <h3 className=" text-start text-sm text-gray-600">These companies created a lot of hype when they listed on the...</h3>

                        <hr className="w-[335px]" />

                        <div className="rounded-lg  space-y-2 cursor-pointer mt-2">
                            <p className="text-sm text-start text-gray-800 font-semibold">Select Citywalk opens 4 new stores in<br/>June</p>
                            <h3 className=" text-start text-gray-600">These companies created a lot of hype when they listed on the...</h3>
                        </div>
                    </div>


                </aside>
            </main>

            <hr className="mt-10"/>

            <div className=" mx-20 p-4">

      
      <h2 className="text-lg font-roboto font-semibold text-start pb-2 mb-4">
        Web Specials 
        <p className="border-b-4 w-5 rounded border-red-500"></p>
      </h2>

      

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
        <div className="relative">
          <img
            src={rahul}
            alt="Main News"
            className="w-[907px] h-64 object-cover rounded"
          />
          <div className="absolute bottom-4 left-0 right-0  p-3 text-white">
            <h3 className="text-base font-semibold text-start">
              Rahul Gandhi In Manipur: Chopper Ride After Women <br/> Protesters Surround Car
            </h3>
            <p className="text-sm text-start">Rahul Gandhi</p>
          </div>
        </div>

       
        <div className="space-y-3 flex flex-col w-[408px] pl-10 h-[247px] ">
         <div className=" flex flex-col justify-between pl-4 pr-3  space-y-5 border-l-2 border-r-2   ">
          <p className=" text-start text-sm flex items-center  ]"><span className=" text-rose-600"><GoDot/></span> Cinema industry welcomes lowering GST rates</p> <hr/>
          
          <p className=" text-start text-sm flex  items-center"> <span className="text-rose-600"><GoDot/></span> Patanjali Ayurved to sell 7% stake in Patanjali </p> <hr/>
          <p className="text-sm flex items-center ">  <span className="text-rose-600"><GoDot/></span>Select Citywalk opens 4 new stores in June</p> <hr/>
          <p className="text-sm flex items-center "> <span className="text-rose-600"><GoDot/></span> Govt imposes import restrictions on certain gold</p> <hr/>
          <p className="text-sm flex items-center ">  <span className="text-rose-600"><GoDot/></span>Joom Marketplace offers a global window for sellers</p> <hr/>
          
         </div>
        </div>

        
        <div className=" ">
          <p className="text-center text-xs text-gray-500 ml-14">- Advertisement -</p>
          <img
            src={bike}
            alt="Ad"
            className="w-[336px] h-[270px] object-cover rounded ml-20"
          />
        </div>
      </div>

      <hr/>

      <div className="flex flex-row space-x-16 m-4">
          <p className="text-sm flex text-start ">  <span className="items-start text-rose-600"><GoDot/></span>B2B managed marketplace <br/>The Yarn</p>
          <p className="text-sm flex text-start ">  <span className="items-start text-rose-600"><GoDot/></span>Sequoia Capital exits Go<br/>Fashion</p>
          <p className="text-sm flex text-start ">  <span className="items-start text-rose-600"><GoDot/></span>B2B managed marketplace<br/>The Yarn</p>
          <p className="text-sm flex text-start ">  <span className="items-start text-rose-600"><GoDot/></span>Sequoia Capital exits Go <br/>Fashion</p>



      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <div>
          <img
            src={fashion}
            alt="News"
            className="w-[244px] h-[131px] object-cover rounded"
          />
          <p className="text-sm mt-2 text-start">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
        </div>

        <div>
          <img
            src={dlf}
            alt="News"
            className="w-[244px] h-[131px] object-cover rounded"
          />
          <p className="text-sm mt-2 text-start">DLF creating new retail space in Delhi for France’s Galeries Lafayette</p>
        </div>

        <div>
          <img
            src={pe}
            alt="News"
            className="w-[244px] h-[131px] object-cover rounded"
          />
          <p className="text-sm mt-2 text-start">PE firm Carlyle offloads entire, Carlyle <br/>through its special-purpose </p>
        </div>

        <div>
          <img
            src={store}
            alt="News"
            className="w-[244px] h-[131px] object-cover rounded"
          />
          <p className="text-sm mt-2 text-start">How AI is enhancing stores, How AI is enhancing stores</p>
        </div>

        <div>
          <img
            src={shilpa}
            alt="News"
            className="w-[244px] h-[131px] object-cover rounded"
          />
          <p className="text-sm mt-2 text-start">Shilpa Shetty Kundra invests, Kisanconnect is at Rs 120 crore</p>
        </div>
      </div>


    <div>
        <h2 className="text-lg font-roboto font-semibold text-start pb-2 mb-2 mt-4">
        Trending
        <p className="border-b-4 w-5 rounded border-red-500"></p>

      </h2>

      <div className="flex flex-row text-xs space-x-3 text-center place-items-center text-[rgba(102,102,102,1)] ">
        <p className="text-start border p-1 rounded">Rahul Gandhi In Manipur</p>
        <p className="text-start border  p-1 rounded">meta</p>
        <p className="text-start border  p-1 rounded">E-commerce</p>
        <p className="text-start border  p-1 rounded">Fashion</p>
        <p className="text-start border  p-1 rounded">Live Cricket Scorer</p>
        <p className="text-start border  p-1 rounded">Adipurushr</p>
        <p className="text-start border  p-1 rounded">Sushant Singh Rajputdeath case</p>
        <p className="text-start border  p-1 rounded">Myntra launches </p>
        <p className="text-start border  p-1 rounded">E-commerce</p>
        <p className="text-start border  p-1 rounded">Live Cricket Score</p>
        <p className="text-start border  p-1 rounded">Rahul Gandhi In Manipur</p>
        <div className="flex items-center  space-x-2  pl-8">
            <p className="text-base border "><MdKeyboardArrowLeft className="h-6 w-6"/></p>
        <p className="text-base  border"><MdKeyboardArrowRight className="h-6 w-6"/></p>
        </div>


      </div>
    </div>
{/* <div className="mt-4 flex bg-slate-200 ">
    <h2 className="text-xl font-semibold font-roboto text-start pb-2 mb-4">
       Leaders Ink
      </h2>

      <div className="flex items-center justify-center place-content-end">
        <p className="font-roboto">See more</p>
        <MdKeyboardArrowRight/>
      </div>

        <h2 className="text-xl font-semibold font-roboto text-center items-center place-items-center pb-2 mb-4">
       Research
      </h2>
      <div className="flex items-end place-item-end justify-end text-end bg-slate-200">
        <p className="font-roboto">See more</p>
        <MdKeyboardArrowRight/>
      </div>
      
</div> */}

 <div className="   mt-6 space-y-12">
      {/* Leaders Ink Section */}
      <div>
        {/* Header */}

        <div className="grid grid-cols-2">
            <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold relative font-roboto">
            Leaders Ink
                    <p className="border-b-4 w-5 rounded border-red-500"></p>
          </h2>

          <button className="flex items-center text-sm text-gray-500 hover:text-black px-6">
            See more <MdKeyboardArrowRight size={16} />
          </button>

        </div>

        <div className="flex justify-between">
            <h2 className="text-lg font-bold relative pl-36">
            Research
                    <p className="border-b-4 w-5 rounded border-red-500"></p>

          </h2>

          <button className="flex items-center text-sm text-gray-500 hover:text-black">
            See more <MdKeyboardArrowRight size={16} />
          </button>
        </div>
        </div>

        <div className="flex items-center justify-between mb-6">
         
          
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img src={apple} alt="Apple Store" className="w-full h-44 object-cover" />
            <div className="p-2">

              <div className="flex space-x-2 py-2 ">
                <img className="w-[43px] h-[43px] rounded-full" src={roy}/>
                <h3 className="text-sm text-start font-semibold">
                Top 5 iconic Apple stores across the world by design
              </h3>
              </div>
              <p className="text-xs text-start text-gray-500 mt-1">
                From a total of around 522 Apple stores across the world..
              </p>
              <p className="text-xs text-start font-medium text-gray-700 mt-2">
                Arundhati Roy
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img src={retail} alt="Retail IPO" className="w-full h-44 object-cover" />
            <div className="p-2">

              <div className="flex space-x-2 py-2">
                <img className="w-[43px] h-[43px] rounded-full" src={vikram}/>
                <h3 className=" text-start text-sm font-semibold">
                Rollercoaster ride of four retail industry IPOs
              </h3>
              </div>
              <p className=" text-start text-xs text-gray-500 mt-1">
                These companies created a lot of hype when they listed..
              </p>
              <p className=" text-start text-xs font-medium text-gray-700 mt-2">
                Vikram Seth
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img src={mantra} alt="Uniqlo" className="w-full h-44 object-cover" />
            <div className="p-2">
                <div className="flex space-x-2 py-2">
                    <img className="w-[43px] h-[43px] rounded-full" src={lahiri}/>
                    <h3 className="text-start text-sm font-semibold">
                Uniqlo India’s Success Mantra: Making headway
              </h3>
                </div>
              
              <p className="text-start text-xs text-gray-500 mt-1">
                Uniqlo, Asia’s largest fashion retailer has managed to hit..
              </p>
              <p className=" text-start text-xs font-medium text-gray-700 mt-2">
                Jhumpa Lahiri
              </p>
            </div>
          </div>
            {/* Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img src={human} alt="Human Touch" className="w-full  object-cover h-[212px]" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-start">
                Human touchpoint is extremely important for us
              </h3>
              <p className="text-xs font-bold text-start text-pink-600 mt-2">FASHION</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img src={denim} alt="Denim" className="w-full h-[212px] object-cover" />
            <div className="p-4">
              <h3 className="text-sm text-start font-semibold">
                US denim brand Lee opens outlets in Sikar, Patna..
              </h3>
              <p className="text-xs text-start font-bold text-pink-600 mt-2">BEAUTY</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>

   <div className="flex justify-between ">
     <div className="mt-4 flex text-gray-400 pl-[330px]">
        <GoDotFill/>
        <GoDotFill className="text-rose-500"/>
        <GoDotFill/>
        <GoDotFill/>
        <GoDotFill/>
        <GoDotFill/>

    </div>
     <div className="mt-4 flex text-gray-400 pr-[220px]">
        <GoDotFill/>
        <GoDotFill className="text-rose-500"/>
        <GoDotFill/>
        <GoDotFill/>
        <GoDotFill/>
        <GoDotFill/>

    </div>
   </div>


    </div>
            
        </div>
    )
}
export default Figma