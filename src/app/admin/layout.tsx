"use client";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import { store } from "../redux/store";
import { useSession } from "next-auth/react";
import Login from "../components/admin-apnel/Login";

const layout = () => {
  const isLoading = useAppSelector((store) => store.LoadingReduce);
  const { data: session } = useSession();
  if (!session?.user) {
    return <Login />;
  }

  return <div>layout</div>;
};

export default layout;
