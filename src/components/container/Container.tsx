import { ReactNode } from "react";

interface AppContainerProps {
    children?: ReactNode
}

import './container.scss';

const AppContainer: React.FC<AppContainerProps> = (props: AppContainerProps) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default AppContainer;