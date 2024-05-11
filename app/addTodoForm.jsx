"use client";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { Context } from "../components/Clients";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(Context);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/newtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success(data.message);
      router.refresh();
      setTitle("");
      setDescription("");
    } catch (error) {
      return toast.error(error);
    }
  };

  if (!user._id) return redirect("/login");

  return (
    <form onSubmit={submitHandler}>
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Todo Title" className=" bg-slate-300 w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-bold" />
  <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text"  rows="5" placeholder="Todo Description" className="bg-slate-400 w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 font-bold"></textarea>
  <button type="submit" className="text-white  end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>
</div>
</form>


    // <div className="login">
    //   <section>
    //     <form onSubmit={submitHandler}>
    //       <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Todo Title" className="placeholder-red-700 text-lg font-bold"/>
    //       <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Todo Description"  className="placeholder-red-700 text-lg font-bold"/>
    //       <button type="submit">Add Task</button>
    //     </form>
    //   </section>
    // </div>
  );
};

export default AddTodoForm;
