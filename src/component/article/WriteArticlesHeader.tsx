import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {MarginRightIcon} from "../town/TownHeader";
import {HeaderTitle} from "../content/Header";
import styled from "styled-components";
import theme from "../../theme";

const CompleteButton = styled.span`
  font-weight: bold;
  color: ${theme.color.gaaji};
`

export default function WriteArticlesHeader() {

    return (
        <>
            <HeaderTitle>
                <MarginRightIcon icon={faAngleLeft}/>
                <span>중고거래 글쓰기</span>
            </HeaderTitle>
            <CompleteButton>완료</CompleteButton>

        </>
    )
}