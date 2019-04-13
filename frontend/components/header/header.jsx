import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header-wrapper'>
            <nav>
                <Link to='/' ><img src='https://www.oncue.co/wp-content/uploads/2016/10/oncue-logo_wl.png' alt='Oncue'/></Link>
            </nav>
            <nav>
                <Link to='/trucks'>All Trucks</Link>
                <Link to='/trucks/new' >New Truck</Link>
                <Link to='/jobs/new' >New Job</Link>
            </nav>
        </div>
    )
}

export default Header;