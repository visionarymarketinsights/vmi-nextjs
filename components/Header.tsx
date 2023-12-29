'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@/constants";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  function redirectToCategory() {
    setCategoryOpen(!isCategoryOpen);
    setMenuOpen(false);
  }

  useEffect(() => {
    getCategoryList();
    document.addEventListener('mouseup', function (e: any) {
      const categoryDropDown = document.getElementById('openedCategoryDropDown');
      if (categoryDropDown && !categoryDropDown.contains(e.target)) {
        setCategoryOpen(false)
      }
    });
  }, [])

  const getCategoryList = () => {
    getCategories().then((data: any) => {
      setCategories(data)
    });
  }

  return (
    <div className="relative z-20">
      <header className='w-full bg-white border-b shadow-lg border-slate-200'>
        <div className="relative flex items-center justify-between md:mx-4">
          <div className="px-4">
            <div className="w-full m-4 text-2xl md:m-0">
              <Link href='/'>
                <img loading="lazy" src={'/assets/cmidarklogo.png'} alt="logo" className="flex justify-center w-44"></img>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end w-full px-4">
            <div>
              <button
                onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }}
                id="navbarToggler"
                className={` ${isMenuOpen && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-4 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-20 ${!isMenuOpen && "hidden"
                  } `}
              >
                <div className="block lg:flex">
                  {/* <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/">Home</Link>
                  </div> */}
                  <div className="relative cursor-pointer">
                    <div className='flex items-center gap-2 py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => setCategoryOpen(!isCategoryOpen)}>
                      <div>Category</div>
                      {
                        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-chevron-up transition-all duration-200 ${isCategoryOpen ? 'rotate-0' : 'rotate-180'}`} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15l6 -6l6 6" />
                        </svg>
                      }
                    </div>
                    {

                      <div id='openedCategoryDropDown' className={`absolute z-20 bg-white py-6 px-10  shadow-2xl rounded-md top-[100%] md:top-[170%] left-[-35%] md:left-[-120%] text-sm w-[300px] md:w-[550px] transition-all duration-200 ${isCategoryOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="grid grid-cols-1 gap-x-2 gap-y-0 md:grid-cols-2">
                          {categories.map((res: any, index) => {
                            return (
                              <Link key={index} onClick={() => redirectToCategory()} href={`/reports/${res.url}`}>
                                <div className="mb-3 cursor-pointer hover:font-bold">
                                  {res.name}
                                </div>
                              </Link>)
                          })}
                        </div>
                      </div >
                    }
                  </div >
                  <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/press-releases/all-industries">Press Release</Link>
                  </div>
                  <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/offering">Offerings</Link>
                  </div>
                  < div className="relative" >
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/contact">Contact</Link>
                  </ div>
                  <div className="relative">
                    <Link className='flex py-2 text-base font-medium lg:ml-12 lg:inline-flex' onClick={() => { setMenuOpen(!isMenuOpen); setCategoryOpen(false) }} href="/about">About</Link>
                  </div>
                  <div className="relative hidden">
                    <div className="flex items-center gap-4 lg:ml-12">
                      <button type="button" className="hover:border-gray-7 md:border-gray-6 flex h-5 w-5 items-center justify-start md:h-auto md:w-64 md:flex-none md:rounded-lg md:border md:bg-backgroundSecondary md:py-2 md:pl-4 md:pr-3.5 md:text-sm">
                        <input type="text" className="w-full pr-4 outline-none" placeholder="Search Market Report" />
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="flex-none w-5 h-5 -ml-2 fill-content3 ">
                          <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div >

              </nav >
            </div >
          </div >
        </div >
      </header >
      <div className="absolute hidden flex justify-center w-full  h-[75vh] top-20">
        <div className="w-[90%] bg-white rounded-md p-4 overflow-auto shadow-xl cursor-default">
          <div className="mb-2 font-bold">Reports</div>
          <div className="flex flex-col gap-2">
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
              <div className="p-2 text-sm border rounded-md border-slate-300 hover:bg-slate-100">
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam</div>
                <div className="text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti porro sapiente sit aliquam quo, ratione minima placeat, sequi eius enim et earum harum rerum dolor voluptatum aperiam asperiores tempora!</div>
              </div>
          </div>
        </div>
      </div>
    </div >
  );
};

