import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MobAnim from './MobAnim';




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

function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Paper className={classes.paper} elevation={0}>


                        <h1><strong className='title'>Contacts</strong></h1>
                        <h3 className='homtxt-mr'>
                            WEBBERS<br />
                            Near Nagina Sweets, Samanabad,<br />
                            Faisalabad, <br />
                            Pakistan.<br />
                            Mobile: +92 321 866 1857
                        </h3> <br /><br />
                        <a href="info@webbers.com.pk" className='strtbtn' target="_blank">Email us</a>

                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.paper} elevation={0}>
                    <MobAnim/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contacts;