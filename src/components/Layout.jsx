import styled from 'styled-components';

export const Layout =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 450px) {
        width: 95%;
    }
   
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        width: 95%;
    }

    @media only screen and (min-width: 601px) and (max-width: 800px) {
        width: 95%;
    }

    @media only screen and (min-width: 801px) and (max-width: 1025px) {
        width: 95%;
    }

    @media only screen and (min-width: 1026px) and (max-width: 1280) {
        width: 90%;
    }
 

`;

export const Box = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
   
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        width: 80%;
    }

    @media only screen and (min-width: 601px) and (max-width: 800px) {
        width: 70%;
    }

    @media only screen and (min-width: 801px) and (max-width: 1025px) {
        width: 50%;
    }

    @media only screen and (min-width: 1026px) {
        width: 35%;
    }


`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const RowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
