import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppContainer from '../../components/container/Container';
import Counter from '../../components/counter/Counter';

import './productPage.scss';

interface ProductPageProps {
    id: string;
    name: string;
    price: number;
    image_path: string;
    sale: number;
    description: string;
}

const ProductPage: React.FC = () => {

    const { id } = useParams<any>();

    const [selectedProduct, setSelectedProduct] = useState<ProductPageProps[]>([]);

    useEffect(() => {
        fetch('http://db.test/')
            .then(response => response.json())
            .then((data: ProductPageProps[]) => {
                const filteredProduct = data.filter(item => item.id === id);
                setSelectedProduct(filteredProduct);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <main>
            <AppContainer>
                {
                    selectedProduct.map((item: ProductPageProps, i: number) => (
                        <section className='product__section' key={i}>
                            <div className="img_container">
                                <img className='img' src={item.image_path} alt="" />
                            </div>
                            <article className='product__description'>
                                <h2 className='product__name'>{item.name}</h2>
                                <p className='product__info'>
                                    {item.description}
                                </p>
                                <p className='product__price'>
                                    <span className="item__sale_price">  {(item.sale > 0) ? '$' + item.price / 2 : ''}</span>
                                    <span className={(item.sale > 0) ? 'item__price sale' : 'item__price'}>$ {item.price} </span>
                                </p>
                                <div className="product__buy">
                                    <Counter />
                                    <button className='product__add_button'>ADD TO CART</button>
                                </div>
                            </article>
                        </section>
                    ))
                }
            </AppContainer>
        </main>
    );
}

export default ProductPage;