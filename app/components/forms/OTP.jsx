import React from "react";

function OTP() {
  return (
    <div class="flex flex-1 flex-col bg-white shadow-2xl py-9 px-4 justify-center space-y-5 max-w-md mx-auto ">
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p class="text-md md:text-xl">Enter the OTP we just sent you.</p>
      </div>
      <div class="flex flex-col max-w-md space-y-5">
        <input
          type="text"
          placeholder="otp"
          class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium  bg-[#4F46E5] text-white">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default OTP;
