'use client'
import React from "react";
import VerifyEmail from "../../components/ui/VerifyEmail";
import EmailVerified from "../../components/ui/EmailVerified";
import Unauthorized from "../../components/ui/Unauthorized";
function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Unauthorized/>
    </div>
  );
}

export default page;