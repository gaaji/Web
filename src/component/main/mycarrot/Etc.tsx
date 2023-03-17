import {MyCarrotTitle} from "./MyCarrot";
import MyCarrotItem from "./MyCarrotItem";
import tat from "../../../assets/images/mycarrot/town-authentication.svg";
import alarm from "../../../assets/images/mycarrot/alarm-keyword.svg";
import invite from "../../../assets/images/mycarrot/invite-friend.svg";
import question from "../../../assets/images/mycarrot/frequent-question.svg";

import recent from "../../../assets/images/marker.svg";
import {useNavigate} from "react-router-dom";
import {MY_TOWN, TOWN_AUTH} from "../../../util/Url";

export default function Etc(){

    const navigate = useNavigate();

    const myTownSettingClicked = () => {
        navigate(MY_TOWN,{
            replace:true
        })
    }
    const townAuthenticationClicked = () => {
        navigate(TOWN_AUTH,{
            replace:true
        })
    }

    return (
        <>
            <MyCarrotTitle>기타</MyCarrotTitle>
            <MyCarrotItem onClick={myTownSettingClicked} src = {recent} desc={"내 동네 설정"}/>
            <MyCarrotItem onClick={townAuthenticationClicked} src = {tat} desc={"동네 인증하기"}/>
            <MyCarrotItem src = {alarm} desc={"알림 키워드 설정"}/>
            <MyCarrotItem src = {question} desc={"자주 묻는 질문"}/>
            <MyCarrotItem src = {invite} desc={"친구초대"}/>

        </>
    )

}