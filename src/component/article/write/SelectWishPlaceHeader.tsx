import {HeaderTitle} from "../../content/Header";
import {MarginRightIcon} from "../../town/TownHeader";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {WishPlace} from "../../../model/usedItemPost";

interface SelectWishPlaceHeaderProps{
    action  :React.Dispatch<React.SetStateAction<boolean>>,
}
const BackButton = styled(FontAwesomeIcon)`
    :hover{
      cursor: pointer;
    }
`

export default function SelectWishPlaceHeader({action}:SelectWishPlaceHeaderProps){

    const backButtonClicked = () => {
        action(mode => !mode)
    }

    return (
        <>
            <HeaderTitle>
                <BackButton onClick={backButtonClicked} icon={faAngleLeft}/>
            </HeaderTitle>
        </>
    )
}