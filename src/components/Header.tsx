import * as React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core/';


export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static"style={{backgroundColor: "Grey"}}>
                <Toolbar>
                    <Typography variant="display3" color="inherit" >
                        <Link style={{color: "white"}} to="/">The Cat Space</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}