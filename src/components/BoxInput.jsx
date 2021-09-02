import styled from 'styled-components';

export const BoxInput = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin: 5vh 0 0 0;
`;

export const Icon = styled.i`
    position: absolute;
    z-index: 10;
    top: 25%; 
    left:3%;
    display: flex;
    color: rgba(119, 119, 119, 0.6);
    font-size: 1.4em;
    
`;

export const IconEye = styled.i`
    position: absolute;
    z-index: 10;
    top: 25%; 
    right:3%;
    display: flex;
    color: ${props => props.color};
    font-size: 1.4em;
    cursor: pointer;
`;

export const SmallDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Small = styled.a`
    margin: 3vh 0 0 0;
    font-weight: 500;
    color: #4AD395;
    font-size: 0.9em;
    text-decoration: none;
`;