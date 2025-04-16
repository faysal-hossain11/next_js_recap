import Link from "next/link";
import React from "react";
import getJoke from "@/libs/apiCall";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

import Header from "./components/header/Header";
import Banner from "./components/Banner";
import CreateUser from "./components/users/CreateUser";

const HomePage = async () => {
  return (
    <>
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* this is the header component */}
      <Header />
      {/* this is the header component */}

      <Banner />

      <div className="mx-auto">
        <CreateUser />
      </div>
    </div>

      
    </>
  );
};

export default HomePage;
