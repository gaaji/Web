import styled from "styled-components";
import UsedItemList from "./UsedItemList";

export const ContentBlock = styled.div`
  padding-top: 81px;
  padding-bottom: 80px;
`

function MainContent() {

    return (
        <>
            <ContentBlock>
                <UsedItemList/>
            </ContentBlock>
        </>
    )
}

export default MainContent;