import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(119, 119, 119, 0.3);
    padding: 2vh;

    :after{
        border: 1px solid #4AD395;
    }
    :active:after{
        opacity: 1;
        transition: 0s
    }

`;
