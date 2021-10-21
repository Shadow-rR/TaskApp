import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styles from "../css_modules/edit.module.css";

export const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [todo, setTodo] = useState("");
  useEffect(() => {
    fetch(`/api/${id}`)
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => {
        console.log(data);
        setTodo(data[0]["content"]);
      });
  }, [id]);
  const editHandler = (event) => {
    setTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`/api/edit/${id}`, {
      method: "POST",
      body: JSON.stringify({ id: id, content: todo }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((resp) => resp.json())
      .then((msg) => console.log(msg));
    history.push(`/${id}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <form onSubmit={submitHandler}>
          <input id={styles.custmInput} type="text" value={todo} onChange={editHandler} required />
          <button id={styles.editBtn} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
