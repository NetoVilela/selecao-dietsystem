import styled from 'styled-components';

export const Img = styled.img`
    src: url('${props => props.src}');
    width: ${props => props.width};
`;
export const ImgLoad = styled.img`
    src: url('${props => props.src}');
    width: ${props => props.width};
    
    @keyframes loading{
        0% {
		transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: ${props => props.animation ? 'loading 2s linear infinite' : ''};
    
    
`;

