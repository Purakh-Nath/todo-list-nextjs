import React, { Suspense } from "react";
import Form from "./addTodoForm";
import Todos from "./todos";
import 'tailwindcss/tailwind.css';
const Page = async () => {
  return (
    <div className="container">
      <Form />

      <Suspense fallback={<div className="text-center font-bold mt-10" >Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
