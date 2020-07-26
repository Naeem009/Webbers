import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Text from './TextAbout';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'justify',
    },
    paper: {
        padding: theme.spacing(2),
        
        color: theme.palette.text.secondary,
        backgroundColor: '#9184DA',

    },
}));

function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Text />
                </Grid>
            </Grid>
        </div>
    );
}

export default About;