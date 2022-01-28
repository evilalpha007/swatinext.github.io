import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "../public/logo.png";
import { HiMoon, HiOutlineShoppingCart, HiSun } from "react-icons/hi";
import Image from "next/image";
import SideNav from "./SideNav";
import Form from "./Form";
import Slider from "./Slider";
import Filter from "../public/filter.png";
import Link from "next/link";


const Header = () => {

// ***** alpha  start*** **


const [counter , setCounter] = useState(0);
 





// ***** alpha end*** **



  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <HiSun
          className="w-7 h-7 text-yellow-400"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiMoon
          className="w-7 h-7 text-gray-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      {/* bg-gray-200 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 */}

      <header className="card fixed top-0 left-0 right-0 z-20">
        <div className="mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Image
            width="50"
            height="50"
            src="/logo.png"
            alt="logo"
            className="select-none"
          />

          <div className="flex justify-around items-end">
            <button className="bg-indigo-600 select-none text-white text-sm leading-6 font-medium shadow-lg shadow-indigo-500/30 px-2 py-1 rounded-lg hover:bg-indigo-800">
              Connect Wallet
            </button>
            <div className="flex justify-evenly items-center cursor-pointer bg-indigo-600 p-1.5 px-2 rounded-lg mx-3 hover:bg-indigo-800">
              <HiOutlineShoppingCart className="w-5 h-5 text-white realtive" />
              <p className="mx-3 text-white select-none text-sm font-medium">
                Cart
              </p>
              <p className="select-none w-5 h-5 text-center flex justify-center items-center dark:text-indigo-600 bg-white text-sm px-2 rounded-md">
                {counter}
              </p>
            </div>

            {renderThemeChanger()}
          </div>
        </div>
      </header>
      <nav className="hide_sdienav">
        <SideNav />
      </nav>
      <main className="border-lime-300  ml-32 absolute right-0 left-0 top-20 ">
        <div className="overflow-hidden">
          <Slider />
        </div>
        {/* <section className=''>
          <h1 className='text-3xl mb-4'>Category</h1>
        
         <div className=' flex w-full'>
            <button className=' border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Filter  
            </button>
            <button className='  border-2 border-solid border-blue-500 p-12 '>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' alt="image" />
              </div>
              Button 1
            </button>
            <button className=' border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 2
            </button>
            <button className='border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 3
            </button>
            <button className='border-2 border-solid border-blue-500  p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 4
            </button>
            <button className='border-2 border-solid border-blue-500 p-12'>
              <div className='bg-white rounded w-8'>
                <img className='w-8' src='./filter.png' />
              </div>
              Button 5
            </button>
            
          </div>


        </section> */}

        {/* ********category start ******************************** */}
        <section className="card_category_section">
          <h1 className="font-bold text-3xl ml-20">category</h1>
          <div className="py-8 pl-16 w-full grid  grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {/* <!--Card 1--> */}
            <div className="overflow-hidden min-w-min w-full min-w-max px-4 card_category border-yellow-800">
              {/* <img className="w-full" src="/mountain.jpg" alt="Mountain"/> */}
              <div className=" py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer text-center"  >Electronics</div>
                <p className="text-white-700 text-base">
                 
                </p>
              </div>
            </div>
            {/* <!--Card 2--> */}
            <div className="overflow-hidden px-4 card_category   min-w-max mx-2.5 drop-shadow-xl">
              {/* <img className="w-full" src="/river.jpg" alt="River"/> */}
              <div className=" py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer text-center" >Mobile Accessories</div>
                <p className="text-white-700 text-base">
                 
                </p>
              </div>
            </div>

            {/* Card-3 */}
            <div className="overflow-hidden px-4 card_category   min-w-max mx-2.5 drop-shadow-xl">
              {/* <img className="w-full" src="/forest.jpg" alt="Forest"/> */}
              <div className=" py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer text-center" >Smartphones & Basic</div>
                
                <p className="text-white-700 text-base">
                 
                </p>
              </div>
            </div>
            {/* Card-4 */}
            <div className="overflow-hidden px-4 card_category   min-w-max mx-2.5 drop-shadow-xl">
              {/* <img className="w-full" src="/forest.jpg" alt="Forest"/> */}
              <div className=" py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer text-center" >MCU IronMan</div>
                <p className="text-white-700 text-base">
                 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ********category end ******************************** */}

        {/* *****card first ********** */}

        <div className="py-8 px-16  w-full grid justify-items-end grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  {/* <Link href=""> */}
                    <button
                      type="button"
                      className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => setCounter(counter + 1)}     >
                      Add to cart
                    </button>
                  {/* </Link> */}

                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                
              onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_card px-4 py-4 lower_card_background">
            <div className="rounded-lg shadow-lg max-w-sm card">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://sportshub.cbsistatic.com/i/2021/04/10/6d5f7384-8fc8-42ea-bfda-b6e9a0b6cdc2/tony-stark-mcu-1261352.jpg"
                  alt="ironman"
                />
              </a>
              <div className="p-6">
                <h5 className="text-white-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white-700 text-base text-xs mb-4">
                  So, fans have had their eyes peeled for Tony's return to the
                  MCU and they got their wish in Marvel Studio's
                </p>
                <div className="pt-4 pb-2 flex flex-row justify-evenly">
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setCounter(counter + 1)}     >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className=" inline-block card_category px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Discription
                  </button>

                
                </div>

            
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
