import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import "./PasswordAuthenticator.css";
import firebase from "firebase";


class PasswordAuthenticator extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            passwordField: "nassing"
        }
        
    }
    
    accessPassword = () =>{
        const db = firebase.firestore()
        const passwords = db.collection("Passwords").doc("VsUSw5pdyhAe1uJKrN4M").get().then((doc)=>{
            var item = doc.data().All_passwords;
            if(doc.data().All_passwords
                .includes(this.state.passwordField)){
                //CORRECT PASSWORD CODE HERE
                console.log("perfect")
                
            }else{
                //WRONG PASSWORD CODE HERE
                console.log("there's nothing here")
                
            }
        })
    }


    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange = {(event)=>{
                            this.setState({passwordField: event.target.value})
                        }}
                    />
                    
                    <Button variant="contained" color="primary"  onClick={()=>{
                       
                        
                        this.accessPassword()
                        
                    }}>
                        Log In
                    </Button>
                </form>
            </div>
        );
    }
}

export default PasswordAuthenticator;