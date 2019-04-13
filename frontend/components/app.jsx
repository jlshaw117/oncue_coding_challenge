import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';

const App = () => {

    return (
        <div className='outer-wrapper'>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route exact path='/trucks' component={TrucksIndexContainer} />
            {/* <Route exact path='/trucks/new' component={TruckFormContainer}/> */}
            {/* <Route exact path='/jobs/new' component={JobsFormContainer} /> */}
        </div>
    )
};

export default App;