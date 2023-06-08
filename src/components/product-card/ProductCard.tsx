import shoeImg from './shoeImg.png'

import './productCard.scss';

interface ProductCardProps {

}

const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <div className="product__card-item">
            <figure>
                <div className="img_container">
                    <img className='img' src={shoeImg} alt="" />
                </div>
                <figcaption className='img__description'>
                    name of product
                </figcaption>
            </figure>
            <span className='item__price'>$ 2000</span>
        </div>
    );
}

export default ProductCard;