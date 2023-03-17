import React from "react";
import {MyTown} from "../../model/town";
import {townApi} from "../../api/townApi";
import {CenteredDiv, EndedDiv, MarginedButton, StyledModal} from "./SettingButton";
import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ENROLL_TOWN} from "../../util/Url";
import {ENROLL_TOWN_MODE} from "../../util/Constants";

interface ChangeModalProps{
    show:boolean,
    setShow:  React.Dispatch<React.SetStateAction<boolean>>,
    address:MyTown,
}

export default function ChangeModal({show,setShow,address}:ChangeModalProps):JSX.Element{
    const navigate = useNavigate();

    const changeTownButtonClicked = () => {
        navigate(ENROLL_TOWN,{
            replace:true,
            state:{
                mode : ENROLL_TOWN_MODE.MODIFY,
                addressId : address.id
            }
        })
    }

    const handleClose = () => setShow(false);
    return(
        <>
            <StyledModal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <CenteredDiv>가지마켓 서비스를 이용하기 위해서는 1개의 동네 설정이 필요해요. 동네를 변경하시겠습니까?</CenteredDiv>
                    <EndedDiv>
                        <Button size={"sm"} variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                        <MarginedButton size={"sm"} variant="danger" onClick={changeTownButtonClicked}>
                            변경하기
                        </MarginedButton>
                    </EndedDiv>
                </Modal.Body>
            </StyledModal>
        </>
    )
}