import React from 'react';
import ImgSlid from './Animation';
import AnimGirl from './AnimateGirl';
import ManMov from './Animate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        textAlign: 'justify',
        backgroundColor: '#9184DA',
    },

}));

function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section id="header">
                <div className="container-fluid nav_bg pb-auto">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1><strong className='title'>What we offer</strong></h1>
                                    <h5>
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
                                            <li>Mobile Apps (Android & iPhone)</li><br />
                                            <span className='brand'>CHOOSE US FOR YOUR BUSINESS NEEDS.</span>
                                        </ul>
                                    </h5>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2'>
                                <div><ImgSlid/></div>
                                <div className='divspc'><AnimGirl /></div>
                                <div><ManMov/></div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div >
    );
}

export default Services;