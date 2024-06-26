import { cookies } from "next/headers";
import React from "react";
import { TodoItem } from "../components/ServerComponents";
import 'tailwindcss/tailwind.css';
const fetchTodo = async (token) => {
  try {
    const res = await fetch(`https://todo-list-nextjs-ashy.vercel.app/api/mytask`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();
    // ${process.env.URL}
    if (!data.success) return [];

    return data.tasks;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Todos = async () => {
  const token = cookies().get("token")?.value;
  const tasks = await fetchTodo(token);
  // todosContainer
  return (
    <section className="todosContainer">
      {tasks?.map((i) => (
        <TodoItem title={i.title} description={i.description} id={i._id} key={i._id} completed={i.isCompleted} />
      ))}
    </section>
  );
};

export default Todos;
