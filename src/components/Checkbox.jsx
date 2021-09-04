import styled from 'styled-components';

export const CheckBox = styled.input`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    left: 0;
    cursor: pointer;
    background-color: #eee;
    border-radius: 2px;

    :after{
        content: "";
        position: absolute;
        display: none;
    }
`;


export const BoxCheckBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;