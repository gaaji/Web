import {townApi} from "../../../api/townApi";
import {CenteredDiv, EndedDiv, MarginedButton, StyledModal} from "../../town/SettingButton";
import {Button, Form, Modal} from "react-bootstrap";
import React, {ChangeEventHandler} from "react";
import {WishPlace} from "../../../model/usedItemPost";
import styled from "styled-components";
import {FlexBox} from "../../../util/StyledBox";
import theme from "../../../theme";

interface WishPlaceTextModalProps{
    show : boolean;
    setShow :React.Dispatch<React.SetStateAction<boolean>>
    setWishPlace : React.Dispatch<React.SetStateAction<WishPlace | undefined>>
    setMapMode : React.Dispatch<React.SetStateAction<boolean>>
}
const WishPlaceEnrollButton = styled(Button)`
    width: 100%;
  background-color: ${theme.color.gaaji};
  border: none;
  :hover, :focus, :active, :checked, :disabled {
    background-color: ${theme.color.gaaji};
    border: none;
  }

`
const WishPlaceEnrollText = styled(FlexBox)`
    font-weight: bold;
    font-size: 20px;
  margin-bottom: 10px;
`

export default function WishPlaceTextModal({show,setShow,setWishPlace,setMapMode}:WishPlaceTextModalProps):JSX.Element{

    const enrollWishPlaceTextButtonClicked = () => {
        setShow(false)
        setMapMode(false);
    }
    const onChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setWishPlace((prev) => {
            // @ts-ignore
            return {...prev, text :event.target.value}
        })

    }

    const handleClose = () => setShow(false);
    return(
        <>
            <StyledModal size={"sm"} show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <WishPlaceEnrollText>선택한 곳의 장소명을 입력해주세요</WishPlaceEnrollText>
                    <Form.Control
                        onChange={(event) =>onChanged(event)}
                        type="text"
                        placeholder={"예) 강남역 1번 출구, 당근 빌딩 앞"}
                    />
                    <EndedDiv>

                        <WishPlaceEnrollButton variant="danger" onClick={enrollWishPlaceTextButtonClicked}>
                            거래 장소 등록
                        </WishPlaceEnrollButton>
                    </EndedDiv>
                </Modal.Body>
            </StyledModal>
        </>
    )
}