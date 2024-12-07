'use client'
import React from "react";
import VerifyEmail from "../../components/ui/VerifyEmail";
import EmailVerified from "../../components/ui/EmailVerified";
function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <EmailVerified/>
    </div>
  );
}

export default page;
