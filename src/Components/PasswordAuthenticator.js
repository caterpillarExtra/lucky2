import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import "./PasswordAuthenticator.css";


class PasswordAuthenticator extends Component {
    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button variant="contained" color="primary">
                        Log In
                    </Button>
                </form>
            </div>
        );
    }
}

export default PasswordAuthenticator;