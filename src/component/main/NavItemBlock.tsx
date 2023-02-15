import {faHouse} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {ModeProps} from "../../util/Constants";
import {useDispatch} from "react-redux";
import {SELECT} from "../../store/mode";

const NavItemWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
      :hover{
        cursor: pointer;
      }
    `
const NavItemIcon = styled(FontAwesomeIcon)`
        font-size: 26px;
        margin-bottom: 5px;
    `
const NavItemSpan = styled.span`
      font-size: 14px;
      font-weight: bold;
    `

interface NavItemBlockProps{
    itemIcon : IconDefinition
    itemMode : ModeProps;

}



function NavItemBlock({itemIcon, itemMode}:NavItemBlockProps){

    const dispatch = useDispatch();

    const navItemClicked = () => {
        dispatch(SELECT(itemMode.eng))
    }

    return (
        <>
            <NavItemWrapper onClick={navItemClicked}>
                <NavItemIcon icon={itemIcon}/>
                <NavItemSpan>{itemMode.kor}</NavItemSpan>
            </NavItemWrapper>

        </>
    )

}

export default NavItemBlock;