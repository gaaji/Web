import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faComments, faMap, faUser} from "@fortawesome/free-regular-svg-icons";
import NavItemBlock from "./NavItemBlock";
import {useDispatch} from "react-redux";
import {MODE} from "../../util/Constants";

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


    return (<>
        <Bottom>
            <hr/>
            <NavBarBlock>
                <NavItemBlock itemIcon={faHouse} itemMode={MODE.HOME}/>
                <NavItemBlock itemIcon={faMap} itemMode={MODE.TOWNLIFE}/>
                <NavItemBlock itemIcon={faLocationDot} itemMode={MODE.NEIGHBOR}/>
                <NavItemBlock itemIcon={faComments} itemMode={MODE.CHAT}/>
                <NavItemBlock itemIcon={faUser} itemMode={MODE.MY}/>
            </NavBarBlock>
        </Bottom>
    </>)
}

export default NavBar;