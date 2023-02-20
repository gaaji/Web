import styled from "styled-components";
import theme from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faBarcode, faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faBell, faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {useModeSelector} from "../../store/mode";
import gear from "../../assets/images/gear.svg"
import {MyTown} from "../../model/town";
import {useLocation, useNavigate} from "react-router-dom";
import {ENROLL_TOWN, MAIN, MY_TOWN, TOWN_AUTH} from "../../util/Url";
import MainHeader from "../main/MainHeader";
import TownHeader from "../town/TownHeader";
import AddTownHeader from "../town/AddTownHeader";
import TownAuthHeader from "../townauth/TownAuthHeader";

const HeaderBlock = styled.div`
  //height: 60px;
  padding: 25px 20px 25px 25px !important;
  display: flex !important;;
  justify-content: space-between;
  font-family: ${theme.font.kor};
  align-items: center;
  font-size: 20px;

`
export const HeaderTitle = styled.span`
  position: relative;
  font-weight: 600;
`

export const HeaderAngleDown = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`
export const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MarginedIcon = styled(FontAwesomeIcon)`
  margin-left: 25px;

  :hover {
    cursor: pointer;
  }
`
export const IconedSvg = styled.img`
  height: 20px;
`
const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`
export const FixedDivider = styled.hr`
    margin: 0;
`

export interface HeaderProps{
    myTown : MyTown[] | undefined;
}

function Header({myTown}:HeaderProps ) {
    const location = useLocation();
    const mode = useModeSelector();

    const createHeaderBlock = () => {
        switch (location.pathname){
            case MAIN :
                return <MainHeader  myTown={myTown} mode={mode}/>
            case MY_TOWN:
                return <TownHeader/>;
            case ENROLL_TOWN:
                return <AddTownHeader mode={location.state?.mode}/>
            case TOWN_AUTH:
                return <TownAuthHeader/>
        }

    }
    return (<>

        <Top>
            <HeaderBlock>
                {createHeaderBlock()}
            </HeaderBlock>
            {mode === "my" ? "" : <FixedDivider/>}
        </Top>

    </>)
}
export default Header;