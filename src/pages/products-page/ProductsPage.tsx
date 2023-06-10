import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import AppContainer from '../../components/container/Container';
import ProductCard from '../../components/product-card/ProductCard';

import './productsPage.scss';

interface ProductsPageProps {
    id: number;
    name: string;
    price: number;
    image_path: string;
    sale: number;
}

const ProductsPage: React.FC = () => {

    const [data, setData] = useState<ProductsPageProps[]>([])

    useEffect(() => {
        fetch('http://165.232.114.205/conectionDB.php')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <main>
            <AppContainer>
                <section className='catalog__section'>
                    {
                        data.map((item: ProductsPageProps, i: number) => (
                            <Link to={`/product/${item.id}`} key={i}>
                                <ProductCard
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image_path={item.image_path}
                                    sale={item.sale}
                                />
                            </Link>
                        ))
                    }
                </section>
            </AppContainer>
        </main>
    );
}

export default ProductsPage;