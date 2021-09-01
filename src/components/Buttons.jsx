import styled from 'styled-components';

export const Button = styled.a`
    background: ${props => props.active ? '#4AD395' : '#E5E5E5A6'};
    color: ${props => props.active ? '#fff' : '#777777'};
    font-weight: ${props => props.active ? '550' : '400'};
    border-radius: 5px;
    padding: 2.4vh 2vh;
    width: 42%;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
   


    @media only screen and (max-width: 450px) {
        font-size: 0.6em;
        padding: 10px;
        width: 40%;
    }
   
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        font-size: 0.9em;
        padding: 10px;
        width: 40%;
    }

    @media only screen and (min-width: 601px) and (max-width: 800px) {

    }

    @media only screen and (min-width: 801px) and (max-width: 1025px) {

    }

    @media only screen and (min-width: 1026px){
        padding: 2.4vh 2vh;
        font-size: 1em;
        width: 42%;
    }

`;