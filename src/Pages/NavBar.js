import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {Headers} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginLeft: theme.spacing(3),
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div>
            
            
            <AppBar position="static">
                <Toolbar className='NavLink'>
                    <Typography variant="h6" color="inherit">
                        <Link to="/" className='NavLink'>Home</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        <Link to="/about" className='NavLink' >About</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        <Link to="/services" className='NavLink'>Services</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        <Link to="/contacts" className='NavLink'>Contacts</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            
            
        </div>
    );
}
