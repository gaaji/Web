import {MY_TOWN} from "../../util/Url";
import {faAngleDown, faArrowsRotate, faBarcode, faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faBell, faCircleUser} from "@fortawesome/free-regular-svg-icons";
import gear from "../../assets/images/gear.svg";
import {HeaderAngleDown, HeaderProps, HeaderTitle, IconBlock, IconedSvg, MarginedIcon} from "../content/Header";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getCookie, setCookie} from "../../util/Cookie";
import styled from "styled-components";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {CLEAR, pageNumSlice} from "../../store/pageNum";
import {usedItemSlice} from "../../store/usedItem";
import {REFRESH} from "../../store/now";

interface MainHeaderProps extends HeaderProps{
    mode : string
}


export default function MainHeader({myTown, mode}:MainHeaderProps){
    const [town, setTown] = useState<string|undefined>(getCookie("selected_town"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!town && myTown)
            setTown(myTown[0].address2)

    },[])

    function moveToMyTownPage() {
        navigate(MY_TOWN, {
            replace: true
        });
    }

    const onTownBtnClicked = () => {
        if(!myTown)
            return;
        if (myTown.length === 1) {
            moveToMyTownPage();
        }
    }
    const townDropdownClicked = (event:React.MouseEvent<HTMLAnchorElement>) => {
        const target =  event.target as HTMLElement;
        setTown(target.innerHTML);
        setCookie("selected_town", target.innerHTML);
    }
    const myTownDropdownClicked = () => {
        moveToMyTownPage();
    }


    const refreshButtonClicked = () => {

        dispatch(pageNumSlice.actions.CLEAR());
        dispatch(usedItemSlice.actions.CLEAR());
        dispatch(REFRESH());
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
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
                    <Dropdown>
                        {myTown.length>1 ? <>
                            <Dropdown.Toggle as={"div"}>
                                <span>{town}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {myTown.map(m => <Dropdown.Item key={m.id} onClick={townDropdownClicked}>{m.address2}</Dropdown.Item>)}
                                <Dropdown.Item onClick={myTownDropdownClicked}>내 동네 설정하기</Dropdown.Item>
                            </Dropdown.Menu>
                        </>:   <Dropdown.Toggle as={"div"} onClick={onTownBtnClicked}>
                            <span>{town}</span>
                        </Dropdown.Toggle>}



                    </Dropdown>
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
                    <MarginedIcon onClick={refreshButtonClicked} icon={faArrowsRotate}/>
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