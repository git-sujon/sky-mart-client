"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
};

export default Providers;
