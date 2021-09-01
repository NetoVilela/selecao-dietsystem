import styled from 'styled-components';

const Img = styled.div`
    background-image: url(${props => props.src});
`;

export default Img;