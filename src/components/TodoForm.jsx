import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeCompleted, selectAll } from "../redux/TodoSlice";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        addTodo({
          title: todo,
          id: nanoid(),
          completed: false,
        })
      );
    }
    setTodo("");
  };

  return (
    <form className="flex justify-center w-[100%] mt-8" onSubmit={add}>
      <input
        className="w-[50%] p-2"
        type="text"
        placeholder="Add a todo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      ></input>

      <button
        type="submit"
        className="border-2 border-green-500 p-2 text-base rounded-sm ml-2 "
      >
        Add
      </button>
      <button
        className="border-2 border-green-500 p-2 text-base ml-2 rounded-sm"
        onClick={() => dispatch(removeCompleted())}
      >
        Clear Completed
      </button>
      <button
        className="border-2 border-green-500 p-2 text-base ml-2 rounded-sm"
        onClick={() => dispatch(selectAll())}
      >
        Completed All
      </button>
    </form>
  );
};

export default AddToDo;
