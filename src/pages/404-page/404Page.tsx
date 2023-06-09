import { Link } from 'react-router-dom';

import AppContainer from '../../components/container/Container';

import './404Page.scss';

const NotFoundPage: React.FC = () => {
    return (
        <main  >
            <AppContainer>
                <article className="not__found-page">
                    <h2 className="not__found-text title">404</h2>
                    <p className="not__found-text subtitle">Oops! This page was not found.</p>
                    <p className="not__found-text description">Not all who wander are lost. Unfortunately, in this case it look like you are. This page does not seem to exist. Don’t feel bad, let us help you get back on your way!</p>
                    <Link to={'/'} className="not__found-text link">head back to a home page</Link>
                </article>
            </AppContainer>
        </main>
    );
}

export default NotFoundPage;