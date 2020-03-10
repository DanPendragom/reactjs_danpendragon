import React, { Component } from 'react';

import Navbar from '../../components/Navbar'
import NeonYellow from '../../assets/images/neon-yellow.svg'
import NeonBlue from '../../assets/images/neon-blue.svg'

import {
  Container,
  Header,
  Title,
  Gradient,
  Post,
  Info,
  Text,
  NeonImage,
  Content,
  Projects,
} from './styles'

export default class Home extends Component {
  render() {
    const subTitle = '<Web/Mobile Developer and UI/UX Designer/ >'
    return (
      <Container>
        <Header>
          <Navbar />
          <Title>
            <div>
              <span>Daniel Pendragon</span>
            </div>
            <p>{subTitle}</p>
          </Title>
          <Gradient />
        </Header>
        <Post>
          <Info>
            <NeonImage>
              <img class="Yellow" src={NeonYellow} />
              {/* Imagem */}
              <div>
                <img class="Blue" src={NeonBlue} />
              </div>
            </NeonImage>
            <Text>
              <h1>Quem sou?</h1>
              <p>Olá Mundo, é um prazer recebê-los aqui, meu nome é <a> Daniel Pendragon</a>, sou um desenvolvedor independente apaixonado por tecnologia e por dar a melhor experiência em usabilidade, perfomance e principalmente design para os usuários de meus produtos.</p>
            </Text>
          </Info>
        </Post>
        <Post>
          <Content>
            <Text>
              <aside >
                <h1 class="SecondPost">Principais projetos</h1>
              </aside >
            </Text>
            <Projects>
              <div>
                {/* Grillo */}
              </div>

              <div>
                {/* Mecode */}
              </div>

              <div>
                {/* Dhaivo */}
              </div>
            </Projects>
            <p>
              Para conhecer melhor os projetos acesse a aba <a>portfólio</a> e divirta-se!
            </p>
            </Content>
        </Post>
      </Container>
          )
        }
      }
