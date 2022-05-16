import styled from "styled-components";

export const ProductsDetailSection = styled.section`
	margin: 10px;
	border-radius: 20px;
    box-shadow: ${props=>props.theme.shadow};
    display: flex;
    justify-content: center;
    align-items: center;
    

`;

export const ProductDetailCardSt = styled.form`
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 2rem;
	box-shadow: ${props=>props.theme.shadow};
    border-radius: 20px;
    margin: 1rem;
    padding: 1rem;
    @media (min-width: 1060px) {
		max-width: 22%;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
		max-width: 29%;
    }
    
   
`;