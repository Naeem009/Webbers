import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobAnim from './MobAnim';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'center',
        backgroundColor: '#9184DA',
    },

}));

function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section id="header">
                <div className="container-fluid nav_bg pb-auto">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1><strong className='title'>Contacts</strong></h1>
                                    <h3 className='homtxt-mr'>
                                        WEBBERS<br />
                                    Near Nagina Sweets, Samanabad,<br />
                                    Faisalabad, <br />
                                    Pakistan.<br />
                                    Mobile: +92 321 866 1857
                                    </h3> <br /><br />
                                    <a href="m.n.shahzad@gmail.com" className='strtbtn' target="_blank">Email us</a>
                                </div>
                            
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <MobAnim />
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div >
    );
}

export default Contacts;