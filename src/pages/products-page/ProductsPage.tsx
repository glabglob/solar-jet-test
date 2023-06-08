import AppContainer from '../../components/container/Container';
import ProductCard from '../../components/product-card/ProductCard';



import './productsPage.scss';

interface ProductsPageProps {

}

const ProductsPage: React.FC<ProductsPageProps> = () => {
    return (
        <main>
            <AppContainer>
                <section className='catalog__section'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </AppContainer>
        </main>
    );
}

export default ProductsPage;