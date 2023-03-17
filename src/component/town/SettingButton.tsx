import {MyTown} from "../../model/town";
import {MyTownSettingButton, MyTownSettingButtonDeleteButton} from "./TownSettingBlock";
import {setCookie} from "../../util/Cookie";
import {townApi} from "../../api/townApi";
import {SETTING_MODE} from "../../util/Constants";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import styled from "styled-components";
import theme from "../../theme";
import DeleteModal from "./DeleteModal";
import ChangeModal from "./ChangeModal";



export const StyledModal = styled(Modal)`
  font-family: ${theme.font.kor};
`

export const CenteredDiv = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
`
export const EndedDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`
export const MarginedButton = styled(Button)`
  margin-left: 10px;
`

export interface SettingButtonProps{
    address : MyTown ,
    selected : boolean,
    setTown : (a ?: string) => void
    settingMode: string
}
export interface MyTownSettingButtonProps{
    selected : boolean
}
export default function SettingButton({address, selected, setTown, settingMode}: SettingButtonProps):JSX.Element{

    const [show,setShow] = useState<boolean>(false)

    const deleteButtonClicked = () => {
            setShow(true)
    }

    const settingButtonClicked = () => {
            setTown(address.address2);
            setCookie("selected_town", address.address2);
    }


    return (
        <>
            <MyTownSettingButton selected={selected}>
                <span onClick={settingButtonClicked}>{address.address2}</span>
                <MyTownSettingButtonDeleteButton onClick={deleteButtonClicked}>X</MyTownSettingButtonDeleteButton>
            </MyTownSettingButton>
            {settingMode === SETTING_MODE.DELETE ?
                <DeleteModal setTown={setTown} show={show} setShow={setShow} address={address}/>
            :<ChangeModal show={show} setShow={setShow} address={address}/>}
        </>
    )
}