import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from './../Images/Asset.png';
import AnimHom from './AnimHome';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'center',
        backgroundColor: '#9184DA',
        paddingTop: '45px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#9184DA',

    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={4}><a href='http://www.webbers.com.pk' className='pad-tb' target="_blank" rel="noopener noreferrer">
                    <img src={logo} height='150px' width='220px' alt='webbers.com.pk' /></a>
                    <h1><strong className='title'>The Web<br />Development Company</strong></h1>
                    <h4 className='homtx-mr'>Professionalism, Quality of work and Dedication is our Uniqueness</h4>
                    <NavLink to="/services" className='strtbtn'>Get Started</NavLink>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <AnimHom />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;