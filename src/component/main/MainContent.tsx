import styled from "styled-components";
import UsedItemList from "./UsedItemList";

export const ContentBlock = styled.div`
    padding-top: 60px;
    height: 100vh;
`

function MainContent(){

    return (
        <>
            <ContentBlock>
             <UsedItemList/>
            </ContentBlock>
        </>
    )
}

export default MainContent;