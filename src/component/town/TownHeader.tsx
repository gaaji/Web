import {MAIN, MY_TOWN} from "../../util/Url";
import {faAngleDown, faAngleLeft, faBarcode, faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faBell, faCircleQuestion, faCircleUser} from "@fortawesome/free-regular-svg-icons";
import gear from "../../assets/images/gear.svg";
import {HeaderAngleDown, HeaderProps, HeaderTitle, IconBlock, IconedSvg, MarginedIcon} from "../content/Header";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MarginRightIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
  :hover{
    cursor: pointer;
  }
`


export default function TownHeader(){
    const navigate = useNavigate();


    const onBackButtonClicked = () => {
        navigate(MAIN,{
            replace : true
        })
    }
    return <>
        <HeaderTitle>
            <MarginRightIcon onClick={onBackButtonClicked} icon={faAngleLeft}/>
            <span>내 동네 설정</span>
        </HeaderTitle>
        <IconBlock>
            <MarginedIcon icon={faCircleQuestion}/>
        </IconBlock>
    </>;
}