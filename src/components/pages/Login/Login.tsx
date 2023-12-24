"use client";

import SolidButton from "@/components/UI/Button/SolidButton";
import InputField from "@/components/UI/Form/InputField";
import { authKey } from "@/constants/storageKeys";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/utils/localStorage";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const Login: React.FC = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response: any = await userLogin({ ...loginData });
    if (response?.data?.data?.accessToken) {
      setToLocalStorage(authKey, response?.data?.data?.accessToken);
      toast.success("Logged in successfully");
      router.push("/");
    }

    if (response?.error?.data?.message) {
      toast.error(response.error.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
          />

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 border rounded-md border-primary bg-primary px-5 text-sm font-medium text-white hover:bg-transparent hover:text-primary "
            >
              log In
            </button>
            <div className="text-center text-sm mt-6 ">
              <p className="mb-3">{"Don't have an account?"}</p>
              <SolidButton url="/registration" name="Sign up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
