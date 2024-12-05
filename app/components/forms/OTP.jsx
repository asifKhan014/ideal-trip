"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OTP() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputsRef = useRef([]);
  const router = useRouter();

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
      inputs[3]?.focus();
    };

    inputs.forEach((input) => {
      if (input) {
        input.addEventListener("input", handleInput);
        input.addEventListener("keydown", handleKeyDown);
        input.addEventListener("focus", handleFocus);
        input.addEventListener("paste", handlePaste);
      }
    });

    return () => {
      inputs.forEach((input) => {
        if (input) {
          input.removeEventListener("input", handleInput);
          input.removeEventListener("keydown", handleKeyDown);
          input.removeEventListener("focus", handleFocus);
          input.removeEventListener("paste", handlePaste);
        }
      });
    };
  }, []);

  // Update OTP state when inputs change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpString = otp.join("");
    const email = localStorage.getItem("email");
    try {
      const result = await axios.post("https://localhost:7216/api/auth/verify-otp", {
        otp: otpString,
        email: email,
      });

      if (result.data.isSuccess) {
        router.push("/change-password"); // Redirect to success page on OTP verification success
      } else {
        console.error("Invalid OTP or verification failed", result.data);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your email.
        </p>
      </header>
      <form id="otp-form" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-3">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              type="text"
              value={otp[index]}
              onChange={(e) => handleOtpChange(e, index)}
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