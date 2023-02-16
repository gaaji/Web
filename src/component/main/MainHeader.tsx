import {MY_TOWN} from "../../util/Url";
import {faAngleDown, faBarcode, faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faBell, faCircleUser} from "@fortawesome/free-regular-svg-icons";
import gear from "../../assets/images/gear.svg";
import {HeaderAngleDown, HeaderProps, HeaderTitle, IconBlock, IconedSvg, MarginedIcon} from "../content/Header";
import {useNavigate} from "react-router-dom";

interface MainHeaderProps extends HeaderProps{
    mode : string
}

export default function MainHeader({myTown, mode}:MainHeaderProps){
    const navigate = useNavigate();
    const onTownBtnClicked = () => {
        if(!myTown)
            return;

        if(myTown.length === 1) {
            navigate(MY_TOWN,{
                replace : true
            })
        }else
            console.log("hahaha 부럽다")

    }

    function createTitle() {
        if(!myTown)
            return;
        switch (mode) {
            case "chat":
                return <>
                    <span>채팅</span>
                </>;
            case "my" :
                return <></>
            default :
                return <>
                    <div onClick={onTownBtnClicked}>
                        <span>{myTown[0].address2}</span>
                        <HeaderAngleDown icon={faAngleDown}/>
                    </div>
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
                return <><IconedSvg src={gear}/></>
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
    return <>
        <HeaderTitle>
            {createTitle()}
        </HeaderTitle>
        <IconBlock>
            {createIcon()}
        </IconBlock>
    </>;
}