import React from 'react';
import styles from "../Styles/main.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Habits = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
   

  const postdata = () => {
    var username = localStorage.getItem("name");
    axios
      .post("https://shy-coat-foal.cyclic.app/notice/post", {
        name: username,
        notice: text,
      })
      .then((res) => {
        getdata();
      })
      .catch((err) => console.log(err));
  };
  const getdata = () => {
    axios
      .get("https://shy-coat-foal.cyclic.app/notice/get")
      .then((res) => {
        let a = res.data;
        a.reverse();
        console.log(a);
        setData(a);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
        <div className={styles.Noticeboard}>
        <h1> Notice Board</h1>
        <textarea
          name=""
          id=""
          cols="35"
          rows="5"
          placeholder="Write the notice... ✏️"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button className={styles.btnn} onClick={postdata}>
          Post
        </button>
      </div>
      <div className={styles.Notice}>
        {data?.map((e) => {
          return (
            <div className={styles.box} key={e._id}>
              <div>{e.notice}</div>
              <div className={styles.datetime}>
                <p>{e.name}</p>
                <p>
                  {e.date}: {e.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}