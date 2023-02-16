import {useNavigate} from "react-router-dom";
import {MY_TOWN} from "../../util/Url";
import {HeaderTitle} from "../content/Header";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {MarginRightIcon} from "./TownHeader";
import {ENROLL_TOWN_MODE} from "../../util/Constants";

interface AddTownHeaderProps{
    mode : string
}

export default function AddTownHeader({mode}:AddTownHeaderProps){
    const navigate = useNavigate();

    const onBackButtonClicked = () => {
        navigate(MY_TOWN,{
            replace : true
        })
    }
    return <>
        <HeaderTitle>
            <MarginRightIcon onClick={onBackButtonClicked} icon={faAngleLeft}/>
            <span>내 동네 {mode === ENROLL_TOWN_MODE.ADD ? "추가" : "변경"}</span>
        </HeaderTitle>

    </>;
}