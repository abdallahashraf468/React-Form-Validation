// import React from 'react';
import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import Register from './Register';
// import Todotask from './Todotask';

// import {require} from 'password-regexp'

    import passwordRegexp from "password-regexp" 



const Formva = () => {

    //   console.log(passwordRegexp().test("abc123"));


    const [user,setUser]  = useState({
        password:"",
        email:""
       })

       const [errors , setErrors] = useState({

        nameError:"",
        emailError:"",
       })


       const handleForm=(evt)=>{

        if(evt.target.name=="password"){
          setUser({...user,password:evt.target.value})
          setErrors({...errors,nameError:(evt.target.value.length==0)?"Password is Required": passwordRegexp().test(evt.target.value) ? "" : "Password must be at least 3 characters"})

        }else if(evt.target.name=="email"){

            setUser({...user, email:evt.target.value})
            setErrors({...errors, emailError:(evt.target.value.length==0)?"Email is required":EmailValidator.validate(evt.target.value)?"":" Please Enter Again Email"})
        }
    }


    return (
            <>
            
            <form autoComplete='off' onSubmit={(e)=>{e.preventDefault()}}>


<div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">Password :</label>
    <input type="text" className={`form-control ${(errors.nameError)?'border-danger shadow-none':''}`}
     id="formGroupExampleInput"
     name="password"
     value={user.password}
     onChange={(e)=>{handleForm(e)}}
        />

        <p style={{color:'red'}}>{errors.nameError}</p>
</div>

<div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">Email :</label>
    <input type="text" className="form-control"
     id="formGroupExampleInput2"
     name="email"
     value={user.email}
     onChange={(e)=>{handleForm(e)}}
       />
       <p style={{color:'red'}}>{errors.emailError}</p>
</div>
<div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
</div>
</form> 




<Register />

{/* <Todotask/> */}


{/* ///////2 */}















            
            
            </>

               )};

    
export default Formva;




