import React from 'react';
import Navi from '../components/Navi';
import Jumbo from '../components/Jumbo';
import Info from '../components/Info';

//bootstrap


function Landing() {
    return (
        <div>
            <Navi />

            <Jumbo />
            <Info />
        </div>
    );
}

export default Landing;