import styled from "styled-components";
import theme from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faBarcode, faBars, faGear, faMagnifyingGlass, faQrcode} from "@fortawesome/free-solid-svg-icons";
import {faBell, faCircleUser} from "@fortawesome/free-regular-svg-icons";
import {useModeSelector} from "../../store/mode";

const HeaderBlock = styled.div`
  height: 90px;
  padding: 25px 20px 25px 25px;
  display: flex;
  justify-content: space-between;
  font-family: ${theme.font.kor};
  align-items: center;
  font-size: 20px;
  background-color: white;


`
const HeaderTitle = styled.span`
  position: relative;
  font-weight: 600;
`

const HeaderAngleDown = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`
const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
const MarginedIcon = styled(FontAwesomeIcon)`
  margin-left: 25px;

  :hover {
    cursor: pointer;
  }
`
const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

`


function Header() {

    const mode = useModeSelector();

    function createTitle() {
        switch (mode) {
            case "chat":
                return <>
                    <span>채팅</span>
                </>;
            case "my" :
                return <></>
            default :
                return <>
                    <span>서초3동</span>
                    <HeaderAngleDown icon={faAngleDown}/>
                </>;
        }
    }

    function createIcon() {

        switch (mode) {
            case "chat":
                return <>
                    <MarginedIcon icon={faBarcode}/>
                    <MarginedIcon icon={faBell}/>
                </>;
            case "my" :
                return <><MarginedIcon icon={faGear}/></>
            case "townlife":
                return <>
                    <MarginedIcon icon={faMagnifyingGlass}/>
                    <MarginedIcon icon={faCircleUser}/>
                    <MarginedIcon icon={faBell}/>
                </>
            default :
                return <>
                    <MarginedIcon icon={faMagnifyingGlass}/>
                    <MarginedIcon icon={faBars}/>
                    <MarginedIcon icon={faBell}/>
                </>;
        }

    }


    return (<>

        <Top>
            <HeaderBlock>
                <HeaderTitle>
                    {createTitle()}
                </HeaderTitle>
                <IconBlock>
                    {createIcon()}
                </IconBlock>
            </HeaderBlock>
            {mode === "my" ? "" : <hr/>}
        </Top>

    </>)
}


export default Header;