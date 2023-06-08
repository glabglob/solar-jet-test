import AppContainer from '../../components/container/Container';
import Counter from '../../components/counter/Counter';

import shoeImg from './shoeImg.png'

import './productPage.scss';

interface ProductsPageProps {

}

const ProductPage: React.FC<ProductsPageProps> = () => {
    return (
        <main>
            <AppContainer>
                <section className='product__section'>
                    <div className="img_container">
                        <img className='img' src={shoeImg} alt="" />
                    </div>
                    <article className='product__description'>
                        <h2 className='product__name'> PROD NAME</h2>
                        <p className='product__info'>
                            Process of visual communication and problem-solving
                            through the use of typography, photography and illustration.
                            The field is considered a subset of visual communication
                            and communication design.
                        </p>
                        <span className='product__price'>$ 2000</span>
                        <div className="product__buy">
                            <Counter />
                            <button className='product__add_button'>ADD TO CART</button>
                        </div>
                    </article>
                </section>
            </AppContainer>
        </main>
    );
}

export default ProductPage;