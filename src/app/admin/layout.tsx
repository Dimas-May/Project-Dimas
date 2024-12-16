"use client";
import React, { Children } from "react";
import { useAppSelector } from "../redux/hooks";
import { store } from "../redux/store";
import { useSession } from "next-auth/react";
import Login from "../components/admin-apnel/Login";
import Loader from "../components/admin-apnel/Loader";
import Sidebar from "../components/admin-apnel/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store) => store.LoadingReduce);
  const { data: session } = useSession();
  if (!session?.user) {
    return <Login />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        {/* <Navbar /> */}
        <div className="bg-gray-900 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default layout;
