"use client";

import SolidButton from "@/components/UI/Button/SolidButton";
import InputField from "@/components/UI/Form/InputField";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Registration: React.FC = () => {
  const [userSignUp] = useUserSignUpMutation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer",
    name: {
      firstName: "",
      lastName: "",
    },
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      name: {
        ...prevData.name,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response: any = await userSignUp({ ...formData });

    if (response?.data?.data) {
      toast.success("SignUp in successfully");
      router.push("/login");
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
            Register an Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.name.firstName}
            onChange={handleNameChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.name.lastName}
            onChange={handleNameChange}
          />
          <InputField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <InputField
            label="Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 border rounded-md border-primary bg-primary px-5 text-sm font-medium text-white hover:bg-transparent hover:text-primary "
            >
              Register
            </button>
          </div>
          <div className="text-center text-sm mt-6 ">
            <p className="mb-3">{"Already have an account?"}</p>
            <SolidButton url="/login" name="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
