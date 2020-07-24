import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ImgSlid from './Animation';
import AnimGirl from './AnimateGirl';
import ManMov from './Animate';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        backgroundColor: '#9184DA',

    },
}));

function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <h1><strong className='title'>What we offer</strong></h1>
                        <h3>
                            <ul>
                                <li>Logo Design</li>
                                <li>Web Design</li>
                                <li>E Commerce Websites</li>
                                <li>Online Stores</li>
                                <li>Multi-vendors Websites</li>
                                <li>SEO</li>
                                <li>CMS Web Design</li>
                                <li>WordPress Websites</li>
                                <li>Fully Mobile Responsive Websites.</li>
                                <li>Web Hosting</li>
                                <li>Domain Registration</li>
                                <li>Mobile Apps (Android & iPhone)</li><br/>
                                <span className='brand'>CHOOSE US FOR YOUR BUSINESS NEEDS.</span>
                            </ul>
                        </h3>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={0}>
                    <div><ImgSlid/></div>
                    <div className='divspc'><AnimGirl/></div>
                    <div><ManMov/></div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Services;