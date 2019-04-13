import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <Link to='/' ><img className='logo' src='https://www.oncue.co/wp-content/uploads/2016/10/oncue-logo_wl.png' alt='Oncue'/></Link>
            </nav>
            <nav className='nav-links'>
                <Link to='/trucks'>All Trucks</Link>
                <Link to='/trucks/new' >New Truck</Link>
                <Link to='/jobs/new' >New Job</Link>
            </nav>
        </header>
    )
}

export default Header;