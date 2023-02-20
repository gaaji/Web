import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {MAIN} from "../../util/Url";
import {HeaderTitle, IconBlock, MarginedIcon} from "../content/Header";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faCircleQuestion} from "@fortawesome/free-regular-svg-icons";
import {MarginRightIcon} from "../town/TownHeader";




export default function TownAuthHeader(){
    const navigate = useNavigate();


    const onBackButtonClicked = () => {
        navigate(MAIN,{
            replace : true
        })
    }
    return <>
        <HeaderTitle>
            <MarginRightIcon onClick={onBackButtonClicked} icon={faAngleLeft}/>
            <span>동네 인증하기</span>
        </HeaderTitle>

    </>;
}