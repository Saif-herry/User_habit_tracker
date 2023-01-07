import React,{useState} from "react";
import styled from "styled-components";
import styles from "../Styles/Signup.module.css";
import {useNavigate} from 'react-router-dom';


export const Signup = () => {
  const navigate = useNavigate();
  const [inpval,setInpVal]= useState({
      fullname:"",
      age:"",
      email:"",
      password:""
  })

const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:7000/user/register',{
    method:'post',
    body:JSON.stringify(inpval),
    headers:{
      'content-type':'application/json'
    },
  })
  navigate('/login');
  
};

const handleChange=(e)=>{
  setInpVal({
      ...inpval,
      [e.target.name]:e.target.value,
  })
}
 

  return (
    <div>
      <div className={styles.signupWrapper}>
        <div className={styles.signupDiv}>
          <div className={styles.signupImage}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.02LdA2YkojxyL5Y9a8Ik7gHaEi&pid=Api&P=0"
              alt="COMPANY"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form >
            <div className={styles.formWrapper}>

            <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="name">Name</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="text" name="name" onChange={handleChange} />
                </InsideDiv>
              
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="age">Age</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="number" name="age" onChange={handleChange} />
                </InsideDiv>
              
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="phone">Phone</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="number" name="phone" onChange={handleChange} />
                </InsideDiv>
              
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="email" name="email" onChange={handleChange} />
                </InsideDiv>
               
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper} type="password" name="password" onChange={handleChange} />
                </InsideDiv>
               
              </div>
               
              
              <FormButtonDiv>
                <button className={styles.btn} onClick={handleSubmit} >CREATE</button>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



const InsideDiv = styled.div`
  font-size: 15px;
`;

const FormButtonDiv = styled.div`
  width: 70%;
`;