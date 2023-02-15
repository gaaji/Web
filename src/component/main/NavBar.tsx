import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faComments, faMap, faUser} from "@fortawesome/free-regular-svg-icons";
import NavItemBlock from "./NavItemBlock";
import {useDispatch} from "react-redux";
import {MODE} from "../../util/Constants";
import house from "../../assets/images/house.svg"
import houseFill from "../../assets/images/house-fill.svg"
import map from "../../assets/images/map.svg"
import mapFill from "../../assets/images/map-fill.svg"
import marker from "../../assets/images/marker.svg"
import markerFill from "../../assets/images/marker-fill.svg"
import chat from "../../assets/images/chat.svg"
import chatFill from "../../assets/images/chat-fill.svg"
import user from "../../assets/images/user.svg"
import userFill from "../../assets/images/user-fill.svg"
import {useModeSelector} from "../../store/mode";

const NavBarBlock = styled.div`
  height: 90px;
  //padding : 15px 32px 35px 45px;
  padding: 15px 0px 15px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

function NavBar(): JSX.Element {

    const mode = useModeSelector();



    return (<>
        <Bottom>
            <hr/>
            <NavBarBlock>
                <NavItemBlock itemIcon={mode === MODE.HOME.eng ? houseFill : house} itemMode={MODE.HOME}/>
                <NavItemBlock itemIcon={mode === MODE.TOWNLIFE.eng ? mapFill : map} itemMode={MODE.TOWNLIFE}/>
                <NavItemBlock itemIcon={mode === MODE.NEIGHBOR.eng ? markerFill : marker} itemMode={MODE.NEIGHBOR}/>
                <NavItemBlock itemIcon={mode === MODE.CHAT.eng ? chatFill : chat} itemMode={MODE.CHAT}/>
                <NavItemBlock itemIcon={mode === MODE.MY.eng ? userFill : user} itemMode={MODE.MY}/>
            </NavBarBlock>
        </Bottom>
    </>)
}

export default NavBar;