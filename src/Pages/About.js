import React from 'react';
import Text from './TextAbout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'justify',
        backgroundColor: '#9184DA',
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section id="header">
                <div className="container-fluid nav_bg pb-3">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-12 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <Text />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;