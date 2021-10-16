import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Delete } from "../Components/Delete";
import { Edit } from "../Components/edit";
export const Show = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`/api/${id}`)
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => setTodo(data));
  }, [id, todo]);
  return (
    <>
      <div>{todo.length > 0 && todo.map((data) => data.content)}</div>
      <Delete id={id} />
      <Edit id={id} />
      <hr />
      <Link to="/">Back To Home</Link>
    </>
  );
};
