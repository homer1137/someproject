import styled from 'styled-components';


export const AddHotSpotSection = styled.section`
	margin: 10px;
	border-radius: 20px;
    box-shadow: ${props=>props.theme.shadow};
`;

export const AddHotSpotForm = styled.form`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;
    color: ${(props) => props.theme.fontColor};
	
`;

export const AddHotSpotFormFlex = styled.form`
	display: flex;
    @media(max-width: 768px) {
        flex-direction: row;
    } 
    
	
`;