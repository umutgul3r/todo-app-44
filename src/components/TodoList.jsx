import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, changeStatus } from "../redux/TodoSlice";

export default function TodoList() {
  const todo = useSelector((state) => state.todos);
  const todos = todo.items;

  const dispatch = useDispatch();

  const RemoveTodo = (id, completed) => {
    if (completed) dispatch(deleteTodo(id));
  };

  const ChangeStatus = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <>
      <div className=" w-[60%] flex flex-col  mx-auto mt-12">
        {todos.map((item) => (
          <div className="max-w-full px-2 border-2 rounded-xl">
            <span
              className={` cursor-pointer w-8 items-start  ${
                item.completed ? "line-through" : ""
              }`}
              onClick={() => {
                ChangeStatus({ id: item.id });
              }}
            >
              {item.title}
            </span>
            <button
              onClick={() => RemoveTodo(item.id, item.completed)}
              className="absolute right-24 text-base  w-8 "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
