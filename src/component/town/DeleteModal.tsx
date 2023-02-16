import {Button, Modal} from "react-bootstrap";
import {CenteredDiv, EndedDiv, MarginedButton, StyledModal} from "./SettingButton";
import {MyTown} from "../../model/town";
import React from "react";
import {townApi} from "../../api/townApi";
import {deleteCookie} from "../../util/Cookie";

interface DeleteModalProps{
    show:boolean,
    setShow:  React.Dispatch<React.SetStateAction<boolean>>,
    address:MyTown,
    setTown?: (a ?: string) => void
}

export default function DeleteModal({show,setShow,address, setTown}:DeleteModalProps):JSX.Element{

    const mutation = townApi.useDeleteTownMutation();
    const deleteTown = mutation[0];
    const deleteTownButtonClicked = () => {
        if(setTown)
            setTown(undefined)
        deleteTown(address.id);

    }

    const handleClose = () => setShow(false);
    return(
        <>
            <StyledModal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <CenteredDiv>{address.address2}을 삭제하시겠어요?</CenteredDiv>
                    <EndedDiv>
                        <Button size={"sm"} variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                        <MarginedButton size={"sm"} variant="danger" onClick={deleteTownButtonClicked}>
                            삭제하기
                        </MarginedButton>
                    </EndedDiv>
                </Modal.Body>
            </StyledModal>
        </>
        )


}