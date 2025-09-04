import React from "react";
import music from '../images/musimages.png'
import image from '../images/mis.png'

import hotspot from '../images/Screenshot 2025-09-04 160356.png'
import ai from '../images/Screenshot 2025-09-04 160431.png'
import shipping from '../images/Screenshot 2025-09-04 160510.png'

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
function Figma() {
    return (
        <div className=" h-screen">


            <div className="flex items-center justify-center">
                <img
                    className="w-[1000px] h-[200px]"
                    src={image}

                />
            </div>


            <div className="bg-white flex items-center justify-between px-4 py-2">

                <div className="flex-1">
                    <p className="text-zinc-400">Search...</p>
                </div>


                <div className="flex-1 text-center">
                    <p className="font-semibold text-3xl">India <span className="text-red-500">Retailing</span></p>
                </div>


                <div className="flex-1 flex justify-end space-x-2">
                    <button className="bg-red-600 text-white px-4 py-2 rounded">SUBSCRIBE</button>
                    <button className="bg-white px-4 py-2 rounded border">Signin</button>
                </div>
            </div>

            <hr />

            <div className="flex items-center justify-between px-4 py-2">

                <div className="flex-1">
                    <p>icon</p>
                </div>

                <div className="flex-1 text-center ">
                    <ul className="flex p-2 gap-4 font-semibold">
                        <ol className="text-rose-600">Home</ol>
                        <ol>Categories</ol>
                        <ol>IR Prime</ol>
                        <ol>Events</ol>
                        <ol>Bookstore</ol>
                        <ol>Newsletter</ol>
                        <ol>Video</ol>

                    </ul>
                </div>

                <div className="flex-1 justify-end space-x-2">
                    <p>Friday,30june 2023</p>
                </div>
            </div>

            <div className="flex items-center justify-center text-sm text-zinc-400 mb-5 ">
                <ul className="flex gap-5">
                    <ol>Fashion & Lifestyle</ol>
                    <ol>Beauty & Wellness</ol>
                    <ol>Food & Beverage</ol>
                    <ol>Consumer Durable & IT</ol>
                    <ol>Entertainment</ol>
                    <ol>Home Decor and Furnishing</ol>
                    <ol>Speciality Retails</ol>

                </ul>

            </div>

            <div className="bg-slate-100 flex mx-auto  justify-between p-8 px-20">
                <div className="flex bg-white">
                    <div>
                        <img className="w-[100px] h-[100px] rounded" src={hotspot} />
                    </div>

                    <div className="place-items-start ml-2 pr-5 rounded ">
                        <p className="text-rose-600 font-semibold">HOTSPOTS</p>
                        <p className="">Luxury hotspots:5 most expensive</p>
                        <p>high street in the..</p>
                    </div>
                </div>

                <div className="flex bg-white">
                    <div>
                        <img className="w-[100px] h-[100px] rounded" src={ai} />
                    </div>

                    <div className="place-items-start  ml-2 pr-5 rounded">
                        <p className="text-rose-600 font-semibold">AI</p>
                        <p>Luxury hotspots:5 most expensive</p>
                        <p>high street in the..</p>

                    </div>
                </div>

                <div className="flex bg-white">
                    <div>
                        <img className="w-[100px] h-[100px] rounded" src={shipping} />
                    </div>

                    <div className="place-items-start ml-2 pr-5 rounded">
                        <p className="text-rose-600 font-semibold">SHIPPING</p>
                        <p>Luxury hotspots:5 most expensive</p>
                        <p>high street in the..</p>
                    </div>
                </div>

            </div>

            {/* Main Content */}
            <main className="container mx-auto mt-10 px-6 grid grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Left Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Featured News */}
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/06_07_2024_19_44_03_0626941.png?width=920&format=webp"
                            alt="Featured"
                            className="w-[800px] h-[400px] object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 ">
                            <h3 className="text-lg font-bold">Rahul Gandhi in Manipur: Chopper Ride After Protest</h3>
                            <p className="text-sm">Protesters surround car amid tensions...</p>
                        </div>
                    </div>

                    {/* More Stories */}
                    <div className=" gap-4">

                        <div className="flex bg-white mb-8">
                            <div>
                                <img className="w-[100px] h-[100px] rounded" src={hotspot} />
                            </div>

                             <div className="place-items-start ml-2 pr-5 rounded ">
                                <p className="text-rose-600 font-semibold text-sm">FOOD & BEVERAGE</p>
                                <p className="">Wow! Momo Foods enters Bhopal with Wow!</p>
                                <p className="mt-5">#CityWalk</p>
                            </div>
                        </div>
                        <hr/>

                        <div className="flex bg-white mb-8 mt-3">
                            <div>
                                <img className="w-[100px] h-[100px] rounded" src={hotspot} />
                            </div>

                            <div className="place-items-start ml-2 pr-5 rounded ">
                                <p className="text-rose-600 font-semibold text-sm">FOOD & BEVERAGE</p>
                                <p className="">KFC opens another outlet in Punjab...</p>
                                <p className="mt-5">#Beverage</p>
                            </div>
                        </div>
                        <hr/>

                          <div className="flex bg-white mt-4">
                            <div>
                                <img className="w-[100px] h-[100px] rounded" src={hotspot} />
                            </div>

                            <div className="place-items-start ml-2 pr-5 rounded ">
                                <p className="text-rose-600 font-semibold text-sm">SELECT CITYWALK</p>
                                <p className="">FNP (Ferns N Petals) appoints Ashish Goel</p>
                                <p className="mt-5">#CityWalk</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Latest News */}
                <aside className="space-y-6">
                    <h2 className="text-lg font-bold text-gray-800 border-dashed border-cyan-300 ">Latest News</h2>
                    <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg cursor-pointer">
                        <img
                            src={img1}
                            alt="News"
                            className="rounded-lg mb-2"
                        />
                        <h3 className="font-semibold text-gray-800">Unwrapping the Archies’ reinvention plan</h3>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg cursor-pointer">
                        <img
                            src={img2}
                            alt="News"
                            className="rounded-lg mb-2"
                        />
                        <h3 className="font-semibold text-gray-800">How AI is enhancing stores...</h3>
                    </div>


                    <div className=" p-4  rounded-lg hover:shadow-lg cursor-pointer">
                        <p className="text-sm text-gray-600">Croma opens 58 outlets...</p>
                        <h3 className="font-semibold text-gray-800 mb-3">Select Citywalk opens 4 new stores in June</h3>

                        <hr />

                        <div className=" p-4  rounded-lg  cursor-pointer mt-2">
                            <p className="text-sm text-gray-600">Croma opens 58 outlets...</p>
                            <h3 className="font-semibold text-gray-800">Select Citywalk opens 4 new stores in June</h3>
                        </div>
                    </div>


                </aside>
            </main>

            <hr />


        </div>
    )
}
export default Figma