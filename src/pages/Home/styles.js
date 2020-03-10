import styled from 'styled-components'

import Wall from '../../assets/images/homepage-wall-background.png'
import DanielPendragon from '../../assets/images/daniel-pendragon.svg'
import Grillo from '../../assets/images/project-grilo.svg'
import Mecode from '../../assets/images/project-mecode.svg'
import Dhaivo from '../../assets/images/project-dhaivoo.svg'

const Container = styled.div`
    background: #1B1429;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: auto;
`;

const Header = styled.header`
    width: 100%;
    min-height: 90vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${Wall});
    background-position: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    div{
        border: 5px solid  #FFCA00;
        padding: 20px 70px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 50px rgba(255, 202, 0, 0.4), 
            inset 0px 0px 50px rgba(255, 202, 0, 0.4);
        border-radius: 5px;
        span{
            font-size: 7vw;
            color: #FFCA00;
        }
    }
    p{
        font-size: 2.7vw;
        color: #FFDF65;
        font-weight: bold;
    }
`;

const Gradient = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient(transparent 50%, #1B1429 );
`;

const Post = styled.section`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 75%;
    height: auto;
    min-height: 55vh;   
    padding: 6vw 4vw;
    background: #171023;
    border-radius: 10px;
    margin-bottom: 20vh;
    @media screen and (max-width: 1000px) {
        section{
            display: flex;
            flex-direction: column;
            p{
                margin:0;
                text-indent: 2em;
                width: 100%;
            }
            div{
                width: 35vh;
                height: 35vh;
                justify-content: space-evenly;
                align-items: center;
            }
        }
    } 
`;

const Info = styled.section`
    display: flex;
    flex-direction: row-reverse;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1{
        color: #FFFF;
        font-size: 5vw;
        text-shadow: 4vw -2.7vw 0vw #231836;
        margin-bottom: 20px;
    }
    aside{
        display: flex;
        justify-content: flex-end;        
        h1.SecondPost{
            text-shadow: -3vw 3vw 0vw #231836;
        }
    }
    p{
        margin-left: 70px; 
        color: #E5E5E5;
        width: 70%;
        text-indent: 4em;
        text-align: justify;
        font-size: 18px;
        a{
            color: #51C0FF;
            font-weight:bold;
        }
    }
`;
const NeonImage = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 35vh;
    img.Yellow{
        right: -10vw;
        top: -10vw;
        position: absolute;
        width: 350px;
        filter: drop-shadow(0px 4px 20px #FF5C00);
        pointer-events: none;
    }
    div{
        background: url(${DanielPendragon});
        height: 30vh;
        width: 30vh;
        border-radius: 100%;
        background-position: center;
        z-index: 999;
        img.Blue{
            width: 130px;
            filter: drop-shadow(0px 4px 20px #51C0FF);
        }
    }
    @media screen and (max-width: 1000px){
        div{
            margin-bottom: 5vw;
        }
        img.Yellow{
            width: 350px;
            right: -15vw;
        }
        div>img.Blue{
            width: 150px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    section>div{
        margin-bottom: 5vh;
    }
    p{
        align-self: center;
        color: white;
        font-size: 20px;
        text-align: center;
        a{
            color: #51C0FF;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

const Projects = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6vh;
    div{
        width: 18vw;
        height: 25vh;
        border-radius: 7px;
        background-position: center;
        background-size: cover;
    } 
    div:nth-child(1){
        background-image: url(${Grillo});
    }
    div:nth-child(2){
        background-image: url(${Mecode});
    }
    div:nth-child(3){
        background-image: url(${Dhaivo});
    }
`;

export {
    Container,
    Header,
    Title,
    Gradient,
    Post,
    Info,
    Text,
    NeonImage,
    Content,
    Projects
}