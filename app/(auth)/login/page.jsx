import React from "react";
import Login from "../../components/forms/login/Login";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-between">
     
      <img
        src="/login.jpg"
        alt="Login Background"
        className="hidden md:flex flex-1 h-screen bg-cover bg-center"
        width={500}
        height={500}
      />
       <Login />
    </div>
  );
}

export default page;
