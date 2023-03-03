/**
 * Admin Page
 */

// Dependencies
import React, { useState } from "react";
import Head from "next/head";
import PublicLayout from "../../layouts/PublicLayout";
import { motion } from "framer-motion";
import { AiFillLock } from "react-icons/ai";
import axios, { AxiosError } from "axios";
import { withSessionSsr } from "../../utils/withSession";
import { useRouter } from "next/router";

const AdminPage = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [request, setRequest] = useState({
    loading: false,
    success: false,
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

  const handleAdminLogin = async () => {
    if (input.length === 0) {
      handleError("Password is a required to login!");
    } else if (input !== process.env.ADMIN_PASSWORD) {
      try {
        setRequest((prev) => {
          return { ...prev, loading: true };
        });
        const response = await axios.post("/api/admin/login", {
          password: input,
        });
        if (response.data.ok) {
          setRequest((prev) => {
            return { ...prev, success: true };
          });
          router.push({ pathname: "/admin/home" });
        }
      } catch (error) {
        setRequest((prev) => {
          return { ...prev, success: false };
        });
        if (error instanceof AxiosError) {
          switch (error.response?.data.message) {
            case "admin/wrong-password": {
              handleError("Wrong password. Try again!");
              break;
            }
            default: {
              handleError("Something went wrong. Try again!");
              break;
            }
          }
        }
      } finally {
        setRequest((prev) => {
          return { ...prev, loading: false };
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | Kunal Keshan</title>
      </Head>
      <PublicLayout>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mt-10 mb-20 flex max-w-7xl items-center justify-center px-5"
        >
          <div className="flex flex-col items-center justify-center gap-6 rounded-xl border-3 border-black px-5 py-10 lg:min-w-[32rem]">
            <div className="group rounded-full border-2 border-black p-4 text-7xl shadow-3d-small transition-all duration-300 hover:-translate-y-1 hover:shadow-3d">
              <AiFillLock className="transition-all duration-300 group-hover:scale-105" />
            </div>
            <h1 className="text-3xl font-bold md:text-5xl">Admin Login</h1>
            <p className="text-center font-montserrat text-base md:text-lg">
              {request.success
                ? "Login in Successful! Redirecting to home page now..."
                : "Enter your password to access the admin dashboard."}
            </p>
            <div className="w-full">
              <input
                type="password"
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
              disabled={request.success}
              onClick={handleAdminLogin}
              className={`${
                request.success
                  ? "bg-green-500 bg-opacity-80"
                  : "bg-black hover:-translate-y-1 hover:bg-portfolio-accent"
              } w-full rounded-xl px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300`}
            >
              {request.loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </motion.section>
      </PublicLayout>
    </>
  );
};

export default AdminPage;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (user?.admin) {
      return {
        redirect: {
          destination: "/admin/home",
          permanent: true,
        },
      };
    }

    return {
      props: {},
    };
  }
);
