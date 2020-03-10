import React, { Component } from 'react';

import { Container } from './styles';

export default class Navbar extends Component {
    render() {
        return (
            <Container>
                <ul>
                    <li>Página Inicial</li>
                    <li>Portfólio</li>
                    <li>Blog</li>
                    <li>Contato</li>
                </ul>
            </Container>
        );
    }
}
