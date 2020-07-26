import React from 'react';
import fb from './../Images/facebookico.png';
import gh from './../Images/githubico.png';

function Footer(){
    return(
        <div>
            <footer className='ftr'>
                <p><a href="https://web.facebook.com/Webbersofficial" target="_blank" rel="noopener noreferrer"> <img src={fb} alt="webbers" height="60px"/></a>
                <a href="https://github.com/Naeem009" target="_blank" rel="noopener noreferrer"> <img src={gh} alt="webbers" height="56px"/></a>
                <br/>
                    © Copyrights 2020 <span className='bar'>|</span> Alrights Reserved <span className='bar'>|</span> Webbers, Pakistan
                <br/>
                </p>
            </footer>
        </div>
    );
}

export default Footer;