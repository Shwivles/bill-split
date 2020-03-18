import React from 'react';
//import List from '../components/List';
import Item from '../components/Items';
import Profiles from '../components/Profiles';

function Home() {
    return(
        <div>
            {/* <List /> */}
            <Item />
            <Profiles />
        </div>
    );
};

export default Home;