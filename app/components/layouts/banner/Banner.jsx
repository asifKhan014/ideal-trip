import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat "> */}
      <section className="relative border-b-2 ">
        {/* <section className="relative bg-[url(/banner.jpg)] bg-blend-darken bg-cover bg-center bg-no-repeat "> */}
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto  max-w-screen-xl px-4 py-16 sm:py-32  lg:flex lg:justify-between lg:h-screen lg:items-center ">
          <div className="max-w-xl text-center  ltr:sm:text-left flex flex-col justify-end rtl:sm:text-right">
            <h1 className="text-3xl text-black font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-[#4F46E5]">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#home-tours"
                className="block w-full rounded bg-[#4F46E5] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#150adb] focus:outline-none focus:ring active:bg-[#150adb] sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded shadow-md bg-white px-12 py-3 text-sm font-medium text-[#150adb]  hover:text-[#4F46E5] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Image
              className=""
              src="/banner.jpg"
              alt="Banner Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
