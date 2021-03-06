import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(119, 119, 119, 0.3);
    padding: 2vh;
    outline: none;
    background: rgba(255, 255, 255, 0.65);
    padding-left: 7vh;
    color: #AEAEAE;
    ::placeholder{
        color: #CFCFCF;
    }

    :active{
        border: 1px solid #4AD395;
    }
    :focus{
        border: 1px solid #4AD395;
    }

`;
