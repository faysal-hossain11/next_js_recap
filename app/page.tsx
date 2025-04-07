import Link from "next/link";
import React from "react";
import getJoke from "@/libs/apiCall";
import NewUserForm from "./components/users/NewUserForm";

const HomePage = async () => {
  const joke = await getJoke();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl mt-6">Home page</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/about"}>About</Link>

      <h1 className="text-5xl">{joke?.value}</h1>

      <div className="flex justify-center w-1/4 ">
        <NewUserForm />
      </div>
    </div>
  );
};

export default HomePage;
