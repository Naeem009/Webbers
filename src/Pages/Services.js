import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImgSlid from './Animation';
import AnimGirl from './AnimateGirl';
import ManMov from './Animate';

function Services() {
   
    return (
        <div>
            <Grid container spacing={0} className='homtxt-mr'>
                <Grid item xs={4}>
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
                    
                </Grid>
                <Grid item xs={8}>
                    <div><ImgSlid/></div>
                    <div className='divspc'><AnimGirl/></div>
                    <div><ManMov/></div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Services;