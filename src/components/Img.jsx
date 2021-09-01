import styled from 'styled-components';

const Img = styled.img`
    src: url('${props => props.src}');
    width: 20%;
`;

export default Img;