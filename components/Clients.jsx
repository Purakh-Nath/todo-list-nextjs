"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import 'tailwindcss/tailwind.css';

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      });
  }, []);

  return (
    <Context.Provider value={{ user, setUser, }}>
      {children}
      <Toaster />
    </Context.Provider>
  );
};

export const LogoutBtn = () => {

  const { user, setUser } = useContext(Context);

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");

      // const data = await res.json();
      console.log(data);
      if (!data.success) toast.error(data.message);

      setUser({});

      toast.success(data.message);
    } catch (error) {
      return toast.error(error);
    }
  };

  return user._id ? (
    <button className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"} className="text-gray-300 hover:text-blue-600 text-xl">Login</Link>
  );
};

export const TodoButton = ({ id, completed }) => {
  const router = useRouter();
  const deleteHandler = async (id) => {
    try {
      const res = await fetch(`/api/task/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.refresh();
    } catch (error) {
      return toast.error(error);
    }
  };

  const updateHandler = async (id) => {
    try {
      const res = await fetch(`/api/task/${id}`, {
        method: "PUT",
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.refresh();
    } catch (error) {
      return toast.error(error);
    }
  };

  return (
    <>
      <input type="checkbox" checked={completed} onChange={() => updateHandler(id)} />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  );
};
