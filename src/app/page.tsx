'use client'

import Loading from "@/components/loading";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.pathname = '/users';
    //redirect('/users');
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <Loading />
    </div>
  );
}
