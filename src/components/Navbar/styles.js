import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 3vw 3vw;
    ul{
        list-style: none;
    }
    ul li{
        color: #FFF;
        display: inline;
        padding: 2vw;
        font-size: 2vw;
        font-weight: bold;
    }
`; 

export {
    Container,
}