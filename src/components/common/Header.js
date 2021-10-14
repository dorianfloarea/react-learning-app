import React, {Component} from 'react';
import RMDBLogo from '../../../public/images/react-movie-logo.svg';
import TMDBLogo from '../../../public/images/tmdb_logo.svg';
import {Content, LogoImg, TMDBLogoImg, Wrapper} from './Header.styles';
import Link from 'next/link';
import Image from 'next/image';

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Link href="/">
                        <a>
                            <LogoImg>
                                <Image src={RMDBLogo} alt="rmdb-logo"/>
                            </LogoImg>
                        </a>
                    </Link>
                    <TMDBLogoImg>
                        <Image src={TMDBLogo} alt="tmdb-logo"/>
                    </TMDBLogoImg>
                </Content>
            </Wrapper>
        );
    }
}

export default Header;