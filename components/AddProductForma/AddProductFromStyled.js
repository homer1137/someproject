import styled from 'styled-components';


export const AddProductSection = styled.section`
	margin: 10px;
	border-radius: 20px;
    box-shadow: ${props=>props.theme.shadow};
`;

export const AddProductForm = styled.form`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;
	
`;

export const ErrorMessage = styled.div`
    background: pink;
    color: red;
    border: 1px solid red;
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    transition-duration: 1s;
    animation: slide 1.2s;
    
    @keyframes slide {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
   

`

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`