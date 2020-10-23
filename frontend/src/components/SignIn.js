import React, {useState, useEffect} from 'react'
import '../styles/forms.css'


const SignIn = () => {
    const [err,setErr]=useState(false)
    
    return (
        <>
            <div className="forms">   
               <form>
                <h3>todos.</h3>
                <input placeholder="username" id={!err ? "welcome" : "error"} type="text"/>
                <input placeholder="password" id={!err ? "welcome" : "error"} type="password" name="password"/>
                <div><button>submit</button> <p style={{}}>I'm new here <a>sign up!</a></p></div>
               </form>
            </div>
        </>
    );
};

export default SignIn;