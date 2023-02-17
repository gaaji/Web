import styled from "styled-components";
import UsedItemList from "./home/UsedItemList";
import {useModeSelector} from "../../store/mode";
import {MODE} from "../../util/Constants";
import React from "react";
import MyCarrot from "./mycarrot/MyCarrot";

export const ContentBlock = styled.div`
  padding-top: 81px;
  padding-bottom: 80px;
`

function MainContent() {

    const mode = useModeSelector();

    const showContentByMode = () => {
        switch (mode){
            case MODE.HOME.eng:
                return   <><UsedItemList/></>;
            case MODE.TOWNLIFE.eng:
                return <></>;
            case MODE.NEIGHBOR.eng:
                return <></>;
            case MODE.CHAT.eng:
                return <></>;
            case MODE.MY.eng:
                return <><MyCarrot/></>;
            default: return <></>;
        }
    }


    return (
        <>
            <ContentBlock>
                {showContentByMode()}
            </ContentBlock>
        </>
    )
}

export default MainContent;