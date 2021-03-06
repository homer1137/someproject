import styled from 'styled-components';



export const ProductsSection = styled.section`
	margin: 10px;
	border-radius: 20px;
    box-shadow: ${props=>props.theme.shadow};
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    @media (max-width: 767px) {
		justify-content: space-around;
    }

`;

export const ProductCard = styled.form`
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 2rem;
	box-shadow: ${props=>props.theme.shadow};
    border-radius: 20px;
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition-duration: 0.3s;
    @media (min-width: 1060px) {
		max-width: 22%;
    };
    @media (min-width: 768px) and (max-width: 1059px) {
		max-width: 29%;
    };
    &:hover{
        transform: scale(1.1);
    }

  
`;

export const ImgSt = styled.img`
background: #ccc;
overflow: hidden;
width: 200px;
height: 200px;
object-fit: contain;
@media (max-width: 768px) {
		width: 450px;
    height: 450px;
    };
    @media (max-width: 1024px) {
		width: 300px;
    height: 300px;
    };
`