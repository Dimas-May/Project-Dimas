"use client";
import { setloading } from "@/app/redux/features/loadingSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import axios from "axios";
import { loadComponents } from "next/dist/server/load-components";
import { log } from "node:console";
import React, { useEffect, useState } from "react";

export interface Iproduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setloading(true));

    axios
      .get("/api/get_products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setloading(false)));
  }, [updateTable]);

  return <div>Dashboard</div>;
};

export default Dashboard;
