import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import logo from './../Images/Asset.png';



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

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={0}>
                        <h1><strong className='title'>About us</strong></h1>
                        <h4 className='homtxt-mr'>We are team of professionals, developing web based applications, websites, shopping carts, online stores, multivendor stores, survey forms, Blogging sites, Vlogging, music websites. With the changing pace of technology, and upcoming new trends in IT, we are upto date with modern era requirements. Our dedicated team always think of innovation, pacing with new technology, developing new themes, designs, tools for the changing market requirements.
                        Although market is mushroomed very much with multiple developers across Pakistan and other countries as well. But our edge upon them is the latest and up to date adaptation of technology.
                        <br /><br />
                        Currently our team is also providing web based & cloud based solution for Accounting, Retail Sales Management for small business enabling them to handle their business smoothly. Because of our professionalism, the bond to your business of website always an excellent work.
                        <br /><br />
                        In Pakistan this will lead us to be very unique in doing our business for emerging market and to handle most facing challenges, by combining new era technology of IT. Professional web development would convert your professional profit to real time Return on Investment (ROI), so act like a professional customer to be known as professional businessman/enterprise.
                        <br /><br />
                        Our services includes:
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
                                <li>Mobile Apps (Android & iPhone)</li>
                                <li>CHOOSE US FOR YOUR BUSINESS NEEDS.</li>
                            </ul>
                            <br />Team<br /><span className='brand'>WEBBERS</span></h4>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={0}>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;