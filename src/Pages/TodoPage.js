import React, { useState, useEffect } from "react";
import { Card } from "../Components/card";
import { Form } from "../Components/form";
export const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setaddTodo] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => setTodo(data));
  }, []);
  const handleFormChange = (value) => {
    setaddTodo(value);
  };
  const handleSubmit = () => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setaddTodo("");
        getlatesttodos();
      });
  };
  const getlatesttodos = () => {
    fetch("/api")
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => setTodo(data));
  };
  return (
    <>
      <Form
        addtodo={addTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleSubmit}
      />
      <Card todolist={todo} />
    </>
  );
};
