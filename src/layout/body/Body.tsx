import { Route, Routes } from 'react-router-dom';

import ProductsPage from '../../pages/products-page/ProductsPage';
import ProductPage from '../../pages/product-page/ProductPage';
import NotFoundPage from '../../pages/404-page/404Page';

import './body.scss';

const Body: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default Body;