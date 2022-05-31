import { FC } from 'react';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';

export const Navigation: FC<{}> = (): JSX.Element => {
    return (
        <nav className="navbar bg-dark">
            <Container>
            <div className="btn-group">
                <NavLink className="btn btn-secondary" to="/" >Home</NavLink>
                <NavLink className="btn btn-secondary" to="/about">About</NavLink>
                <NavLink className="btn btn-secondary" to="/galleries">Galleries</NavLink>
            </div>
            </Container>
          
        </nav>
    );
};

export default Navigation;