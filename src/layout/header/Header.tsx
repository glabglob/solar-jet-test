
import AppContainer from '../../components/container/Container';

import { BsFillGridFill } from 'react-icons/bs';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdViewAgenda } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';

import './header.scss';

const Header: React.FC = () => {


    return (
        <header className='header'>
            <AppContainer>
                <nav className='header__navigation'>
                    <ul className='header__navigation-list'>
                        <li className='header__navigation-list_item '
                        >
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
        </header>
    );
}

export default Header;