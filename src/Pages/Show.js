import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Delete } from "../Components/Delete";
import { Edit } from "../Components/edit";
import styles from "../css_modules/show.module.css";

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
      <div className={styles.container}>
        <div className={styles.item}>
          <h1>{todo.length > 0 && todo.map((data) => data.content)}</h1>

          <div className={styles.btn_div}>
            <Delete id={id} />
            <Edit id={id} />
          </div>
          <Link to="/"><button className={styles.custmBtn_2}>Back To Home</button></Link>
        </div>
      </div>
    </>
  );
};
