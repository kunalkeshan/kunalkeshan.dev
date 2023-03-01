/**
 * Admin Page
 */

// Dependencies
import React, { useState } from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import { motion } from "framer-motion";
import { AiFillLock } from "react-icons/ai";

const AdminPage = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleError = (message: string) => {
    setError({
      error: true,
      message,
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError({
      error: false,
      message: "",
    });
  };

  const handleAdminLogin = () => {
    if (input.length === 0) {
      handleError("Password is a required to login!");
    } else if (input !== process.env.ADMIN_PASSWORD) {
      handleError("Incorrect password, try again!");
    }
  };

  return (
    <>
      <Head>
        <title>Admin | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 flex max-w-7xl items-center justify-center px-5"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-xl border-3 border-black px-5 py-10">
            <div className="rounded-full border-2 border-black p-4 text-7xl shadow-3d-small">
              <AiFillLock />
            </div>
            <h1 className="text-3xl font-bold md:text-5xl">Admin Login</h1>
            <p className="font-montserrat text-base md:text-lg">
              Enter your password to access the admin dashboard.
            </p>
            <div className="w-full">
              <input
                type="text"
                className={`${
                  error.error
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-black hover:shadow-3d focus:shadow-3d"
                } mt-2 w-full rounded-xl border-2 p-4 outline-none transition-all duration-300`}
                placeholder="Password"
                name="password"
                value={input}
                onChange={handleInput}
                autoComplete="off"
              />
              {error.error && (
                <p className="ml-2 mt-1 text-sm text-red-500">
                  {error.message}
                </p>
              )}
            </div>
            <button
              onClick={handleAdminLogin}
              className="w-full rounded-xl bg-black px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-accent"
            >
              Login
            </button>
          </div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default AdminPage;
