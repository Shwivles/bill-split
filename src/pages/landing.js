import React from 'react';
import Navi from '../components/Navi';
import Jumbo from '../components/Jumbo';
import Info from '../components/Info';

//bootstrap


function Landing() {
    return (
        <div>
            <Navi />

            <main>
                <Jumbo />
                <Info />
            </main>
            
        </div>
    );
}

export default Landing;