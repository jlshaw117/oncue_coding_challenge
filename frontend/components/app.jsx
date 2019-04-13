import React from 'react';
import {Route} from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/trucks' component={TrucksIndexContainer} />
            <Route exact path='/trucks/new' component={TruckFormContainer}/>
            <Route exact path='/jobs/new' component={JobsFormContainer} />
        </div>
    )
};

export default App;