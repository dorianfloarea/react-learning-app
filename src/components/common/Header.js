import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Content, LogoImg, TMDBLogoImg, Wrapper} from './Header.styles';
import {Link} from 'react-router-dom';
import LoginLink from './LoginLink';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
            </Link>
            <LoginLink/>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
        </Content>
    </Wrapper>
);

export default Header;