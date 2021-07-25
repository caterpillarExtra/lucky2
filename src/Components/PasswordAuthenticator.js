import React, {Component} from 'react';
import {TextField} from ''

class PasswordAuthenticator extends Component {
    render() {
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id = "standard-basic" label={"Standard"}/>
                </form>
            </div>
        );
    }
}

export default PasswordAuthenticator;