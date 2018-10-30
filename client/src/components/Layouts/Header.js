import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {withRouter} from "react-router-dom";


class Header extends Component {

    goHome = () => {
        this.props.history.push("/")
    }

    render() {
        return(
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{ flex : 1 }}>
                    Companies & Properties App
                    </Typography>
                    {/* <Link to={'/'}><Button color="inherit">Home</Button></Link> */}
                    <Button onClick={this.goHome} color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
            </div>
        )
    }

}
export default withRouter(Header);