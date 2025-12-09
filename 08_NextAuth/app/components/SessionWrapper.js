'use client'
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
// Notes: Jaha par vi aap sessionprovide use kr rhe hoo aap ko client components banana padta hai.