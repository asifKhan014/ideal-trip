'use client'
import React from "react";
import VerifyEmail from "../../components/ui/VerifyEmail";
import AccountPendingApproval from "../../components/ui/AccountPendingApproval";
function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AccountPendingApproval/>
    </div>
  );
}

export default page;
