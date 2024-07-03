"use client"

import { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function SlideOver() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("White");

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1>hi</h1>
      <button onClick={toggleSlideOver} className="relative z-10">
        Open Slide Over
      </button>
      {isOpen && (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-end">
                        {/* <h2 className="text-lg font-medium text-gray-900 " id="slide-over-title"></h2> */}
                        <div className="ml-3 flex h-7 items-center">
                          <button type="button" onClick={toggleSlideOver} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="absolute -inset-0.5"></span>
                            <p className="text-xs text-gray-500 " >DELIVERING TO</p>
                            <p className="text-sm text-black " >Pincode </p>

                          </button>
                        </div>
                      </div>


                      <fieldset aria-label="Choose a color">
      <legend className="text-sm font-medium text-gray-500 flex">COLOR .&nbsp; <span className="text-sm text-black">{selectedColor}</span>
       </legend>
   

      <div className="mt-4 flex items-center space-x-3">
        <label
          aria-label="White"
          className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "White" ? "ring ring-offset-1" : "ring-2"} ring-gray-400`}
        >
          <input
            type="radio"
            name="color-choice"
            value="White"
            className="sr-only"
            checked={selectedColor === "White"}
            onChange={handleColorChange}
          />
          <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
        </label>

        <label
          aria-label="Gray"
          className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "Gray" ? "ring ring-offset-1" : "ring-2"} ring-gray-400`}
        >
          <input
            type="radio"
            name="color-choice"
            value="Gray"
            className="sr-only"
            checked={selectedColor === "Gray"}
            onChange={handleColorChange}
          />
          <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
        </label>

        <label
          aria-label="Black"
          className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "Black" ? "ring ring-offset-1" : "ring-2"} ring-gray-900`}
        >
          <input
            type="radio"
            name="color-choice"
            value="Black"
            className="sr-only"
            checked={selectedColor === "Black"}
            onChange={handleColorChange}
          />
          <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
        </label>
      </div>
    </fieldset>



    <h3 className="text-xs font-medium text-gray-900 mt-10">CHOOSE MODEL AND VARIANT</h3>

    <section className="flex gap-0 justify-start w-full rounded mt-5 mx-auto">
        
       <div className={`flex justify-center items-center px-3   bg-gray-100 `}>
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0233698207702652e301588a56560cc8529960e374f17dccd954a015ec0bea9?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt={"alt"} className="w-[70px] " />    
       </div>

       <div className={`flex justify-center items-center px-6 py-5 bg-gray-100 `}>
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0233698207702652e301588a56560cc8529960e374f17dccd954a015ec0bea9?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt={"alt"} className=" w-[74px]" />
       </div>

       <div className={`flex justify-center items-center px-6 py-5 bg-gray-100 `}>
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0233698207702652e301588a56560cc8529960e374f17dccd954a015ec0bea9?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt={"alt"} className=" w-[74px]" />
       </div>
        </section>

        <section className="flex gap-5 justify-between p-2 text-sm leading-5 text-center text-green-600 rounded-none  max-w-[352px] "  style={{
    backgroundImage: 'linear-gradient(180deg, rgba(232, 247, 238, 0.00) 0%, #E8F7EE 100%)',
  }}>
      <div className="flex gap-1.5 pr-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/194580468bdb9ab4f33f9367f0cfb2b47b1ba567a3b1f40cf033738eca621e92?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start mt-1 w-4 aspect-square" />
        <p>8 Year Battery Warranty included!</p>
      </div>
      <button aria-label="Close warranty banner">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c43faac20fd97f62d1d78edfa2e70a811cc6f43e523f12ee6a727d59641e09?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start aspect-square w-[18px]" />
      </button>
    </section>

    <article className="flex flex-col bg-white rounded border border-green-600 border-solid max-w-[352px]">
    <header className="flex flex-col px-4 pt-2.5 w-full text-base leading-6 text-neutral-800">
    <h1>S1 Pro 2nd Generation</h1>
    <div className="shrink-0 mt-2.5 h-px border-t border-solid border-slate-200" />
    </header>
    <section className="flex z-10 gap-5 justify-between px-4 pt-5 pb-4 -mt-2.5 text-black">

    <div className="flex flex-col">
    <div className="text-xs leading-4">CERTIFIED RANGE</div>
    <div className="flex gap-1 py-1.5">
      <div className="grow text-base">195 km </div>
    </div>
  </div>

  <div className="flex flex-col">
    <div className="text-xs leading-4">TOP SPEED</div>
    <div className="flex gap-1 py-1.5">
      <div className="grow text-base">120 km/h</div>
    </div>
  </div>

  <div className="flex flex-col">
    <div className="text-xs leading-4">0-40 km/h</div>
    <div className="flex gap-1 py-1.5">
      <div className="grow text-base">2.6 sec</div>
    </div>
  </div>

    </section>

    <footer className="flex flex-col justify-center items-start px-4 py-px w-full text-sm leading-5 text-center text-green-600 bg-emerald-50 rounded-none">
        <div className="flex gap-2.5 py-2.5 pr-3 pl-px">
          <div className="grow my-auto">
          Estimated delivery by 10th Jul 2024!
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5c56ec41e28f52d5a50761db2be882c2d46487d2f18eccdb6c41fd86f9aac4?apiKey=971b6410d97242e7b97afd5891e4e40f&" className="shrink-0 aspect-square w-[18px]" alt="" />
        </div>
      </footer>
  </article>

  <div className="flex gap-5 justify-between items-start pb-5 w-full mt-10 ">
  <div className="flex gap-2.5">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ba78ab65236c761891f8b4859ee0821f29724f2e062dc067e74e5d52de85ef?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start w-8 aspect-square" />
    <div className="flex flex-col justify-center px-5">
      <div className="text-xs leading-4 uppercase text-black">DELIVERING TO</div>
      <div className="text-sm font-medium leading-5  text-black">Select location</div>
    </div>
  </div>
  <button aria-label="Open menu" className="shrink-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e4c7bbdb22106bb27bf8c00de96b3d27ce3333577f3ff5edb018cd8896bba?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="w-6 aspect-[0.67]" />
      </button>
  </div>
  <div className="flex gap-5 justify-between items-start pb-5 w-full mt-3 ">
  <div className="flex gap-2.5">
    <img loading="lazy" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/purchase/compare-models-icon.svg" alt="" className="shrink-0 self-start w-8 aspect-square" />
    <div className="flex flex-col justify-center px-5">
      <div className="text-xs leading-4 uppercase text-black">DELIVERING TO</div>
      <div className="text-sm font-medium leading-5  text-black">Select location</div>
    </div>
  </div>
  <button aria-label="Open menu" className="shrink-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e4c7bbdb22106bb27bf8c00de96b3d27ce3333577f3ff5edb018cd8896bba?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="w-6 aspect-[0.67]" />
      </button>
  </div>


                      
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            <li className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." width={96} height={96} className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                    <p className="ml-4">$90.00</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." width={96} height={96} className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Medium Stuff Satchel</a>
                                    </h3>
                                    <p className="ml-4">$32.00</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Blue</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* More products... */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
