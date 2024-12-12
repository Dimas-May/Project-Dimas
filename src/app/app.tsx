"use client";
import {store} from "@/redux/store";
import React from 'react';
import { Provider } from 'react-redux';
const App = ({Children}:{Children: React.ReactNode} ) => {
  return (
    <Provider store={store}>{Children}</Provider>
  )
}

export default App