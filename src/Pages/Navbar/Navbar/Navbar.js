import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../../../pic4.jpg';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='header-nav'>

            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <div className='header-search'>
                <input
                    className='search-input'
                    type="text"
                    placeholder='search'
                />
                <SearchIcon
                    className='header-searchIcon'
                />
            </div>
            <div className='header-navbar'>

                <Link to='/'>
                    <div className='header-option'>
                        <span className='header-optionLineTwo'>Home</span>
                    </div>
                </Link>

                <Link to="/countries">
                    <div className='header-option'>
                        <span className='header-optionLineTwo'>Countries</span>

                    </div>
                </Link>
                <Link to="/products">
                    <div className='header-option'>

                        <span className='header-optionLineTwo'>Bangladesh</span>
                    </div>
                </Link>
                <Link to="/produces">
                    <div className='header-option'>

                        <span className='header-optionLineTwo'>Produces Item</span>
                    </div>
                </Link>
                <Link to="/count">
                    <div className='header-option'>

                        <span className='header-optionLineTwo'>usereducer</span>
                    </div>
                </Link>


            </div>

        </div>
    );
};

export default Navbar;