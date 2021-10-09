import React, {Component} from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Content, LogoImg, TMDBLogoImg, Wrapper} from './Header.styles';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Link to="/">
                        <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
                    </Link>
                    <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
                </Content>
            </Wrapper>
        )
    }
}

export default Header;