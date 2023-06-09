import './productCard.scss';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image_path: string;
    sale: number;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {

    return (
        <div className="product__card-item">
            {
                (props.sale > 0) ?
                    <div className="sale__flag">
                        SALE 50%
                    </div> :
                    ''
            }
            <figure>
                <div className="img_container">
                    <img className='img' src={props.image_path} alt="" />
                </div>
                <figcaption className='img__description'>
                    {props.name}
                </figcaption>
            </figure>
            <p className='product__price'>
                <span className={(props.sale > 0) ? 'item__price sale' : 'item__price'}>$ {props.price} </span>
                <span className="item__sale_price">{(props.sale > 0) ? '$' + props.price / 2 : ''}</span>
            </p>
        </div>
    );
}

export default ProductCard;