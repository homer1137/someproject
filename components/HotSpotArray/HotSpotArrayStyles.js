import styled from "styled-components";
import { Button } from "../../styles/Button";


export const HotSpotArrayWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    
`

export const HotSpotArrayWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${props=>props.theme.shadow} ;
    margin: 1rem;
    border-radius: 0.3rem;
`

export const HotSpotArrayProductName = styled.div`
    width: auto;
    margin: 1rem;
`
export const HotSpotArrayXposition = styled.input.attrs({
    type: "number"
})`
    width: 100px;
`
export const HotSpotArrayYposition = styled.input.attrs({
    type: "number"
})`
    width: 100px;
`
export const HotSpotArrayDeleteButton = styled(Button)`
    
    color: red;
`