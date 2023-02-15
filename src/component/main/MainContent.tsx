import styled from "styled-components";
import UsedItemList from "./UsedItemList";

const MainBlock = styled.div`
    padding-top: 100px;
    height: 2000px;
`

function MainContent(){

    return (
        <>
            <MainBlock>
             <UsedItemList/>
            </MainBlock>
        </>
    )
}

export default MainContent;