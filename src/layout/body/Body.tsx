import { Route, Routes } from 'react-router-dom';

import ProductsPage from '../../pages/products-page/ProductsPage';
import ProductPage from '../../pages/product-page/ProductPage';

import './body.scss';

const Body: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/product' element={<ProductPage />} />
        </Routes>
    );
}

export default Body;