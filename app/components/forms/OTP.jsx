// import React from "react";

// function OTP() {
//   return (
//     <div class="flex flex-1 flex-col bg-white shadow-2xl py-9 px-4 justify-center space-y-5 max-w-md mx-auto ">
//       <div class="flex flex-col space-y-2 text-center">
//         <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
//         <p class="text-md md:text-xl">Enter the OTP we just sent you.</p>
//       </div>
//       <div class="flex flex-col max-w-md space-y-5">
//         <input
//           type="text"
//           placeholder="otp"
//           class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
//         />
//         <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium  bg-[#4F46E5] text-white">
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OTP;
"use client";
import { useEffect, useRef } from "react";

export default function OTP() {
  const inputsRef = useRef([]);

  useEffect(() => {
    const inputs = inputsRef.current;

    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Tab"
      ) {
        e.preventDefault();
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        const index = inputs.indexOf(e.target);
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const target = e.target;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    };

    const handleFocus = (e) => e.target.select();

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!/^[0-9]{4}$/.test(text)) return;
      text.split("").forEach((char, idx) => {
        if (inputs[idx]) inputs[idx].value = char;
      });
      inputs[3].focus();
    };

    inputs.forEach((input) => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeyDown);
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeyDown);
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("paste", handlePaste);
      });
    };
  }, []);

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your email.
        </p>
      </header>
      <form id="otp-form">
        <div className="flex items-center justify-center gap-3">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              maxLength="1"
            />
          ))}
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{" "}
        <a
          className="font-medium text-indigo-500 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>
  );
}
