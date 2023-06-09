import { Link, useLocation } from 'react-router-dom';

import AppContainer from '../../components/container/Container';

import { BsFillGridFill } from 'react-icons/bs';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdViewAgenda } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';
import { BsArrowLeft } from 'react-icons/bs';

import './header.scss';

const Header: React.FC = () => {

    const location = useLocation();

    return (
        <header className='header'>
            <AppContainer>
                <nav className='header__navigation'>
                    <ul className='header__navigation-list'>
                        {
                            (location.pathname === '/') ?
                                <li className='header__navigation-list_item none'>
                                    <Link to='/'>
                                        <BsArrowLeft style={{ paddingTop: '5px' }} /> BACK TO SHOP
                                    </Link>
                                </li> :
                                <li className='header__navigation-list_item'>
                                    <Link to='/'>
                                        <BsArrowLeft style={{ paddingTop: '5px' }} /> BACK TO SHOP
                                    </Link>
                                </li>
                        }

                        <li className='header__navigation-list_item'>
                            <MdViewAgenda />
                        </li>
                        <li className='header__navigation-list_item'>
                            <BsFillGridFill />
                        </li>
                        <li className='header__navigation-list_item active'>
                            <BsGrid3X3GapFill />
                        </li>
                        <li className='header__navigation-list_item'>
                            FILTER
                        </li>
                        <li className='header__navigation-list_item'>
                            <CgShoppingBag />
                        </li>
                    </ul>
                </nav>
            </AppContainer>
        </header >
    );
}

export default Header;