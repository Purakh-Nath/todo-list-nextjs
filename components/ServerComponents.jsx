import React from "react";
import { TodoButton } from "./Clients";

export const TodoItem = ({ title, description, id, completed }) => {
  return (
    <div className="todo">
      <div>
        <h4 className="font-bold text-[#A91D3A]">{title}</h4>
        <p className="font-extrabold text-[#32012F]">{description}</p>
      </div>

      <div>
        <TodoButton id={id} completed={completed} />
      </div>
    </div>
  );
};
