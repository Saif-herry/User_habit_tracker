import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import {nanoid} from 'nanoid';
import styles from '../Styles/Profile.module.css'


export const Profile = () => {
     const [data,setData]= useState([]);
    let userId= JSON.parse(localStorage.getItem('userId'))
    console.log(userId);  
   
    useEffect(()=>{
      axios
      .get(`https://wild-rugby-shirt-fish.cyclic.app/user/profile/${userId}`)
      .then((res) => {
       console.log('res',res.data)
       setData([res.data])
      })
      .catch((err) => console.log(err));
    },[userId])
    console.log('data',data)
  return (
    <div className={styles.main}>
       
              {
               data?.map(item=>{
                 return (
                 <div key={item.id}>
                    <p>Email : {item.email}</p>
                    <p>Age : {item.age}</p>
                    <p>Name : {item.name}</p>
                   
                  </div>
                 )
                })
              }
      
    </div>
  )
}
