import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnimHom from './AnimHome';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'center',
        backgroundColor: '#9184DA',
        },
    
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section id="header">
                <div className="container-fluid nav_bg pb-auto">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1> WEBBERS </h1>
                                    <h1><strong className='title'>The Web<br />Development Company</strong></h1>
                                    <h3 className='homtx-mr'>Let us be your business partner</h3><br />
                                    <h4 className='homtx-mr'>Professionalism, Quality of work and Dedication is our Uniqueness</h4><br /><br />
                                    <div className='mt-1'>
                                    <NavLink to="/services" className='strtbtn'>More Info</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <AnimHom className='img-fluid'/>
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