import {useNavigate} from "react-router-dom";
import {MY_TOWN} from "../../util/Url";
import {HeaderTitle} from "../content/Header";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {MarginRightIcon} from "./TownHeader";

export default function AddTownHeader(){
    const navigate = useNavigate();


    const onBackButtonClicked = () => {
        navigate(MY_TOWN,{
            replace : true
        })
    }
    return <>
        <HeaderTitle>
            <MarginRightIcon onClick={onBackButtonClicked} icon={faAngleLeft}/>
            <span>내 동네 추가</span>
        </HeaderTitle>

    </>;
}