import styled from "styled-components";
import {ContentBlock} from "../../main/MainContent";
import theme from "../../../theme";
import {CenterBox} from "../../../util/StyledBox";
import KakaoMap from "../../town/KakaoMap";
import {KAKAO_MAP_MODE} from "../../../util/Constants";
import WishPlaceMap from "./WishPlaceMap";
import React, {useState} from "react";
import {WishPlace} from "../../../model/usedItemPost";
import WishPlaceTextModal from "./WishPlaceTextModal";

const WishPlaceBodyWrapper = styled(ContentBlock)`
  padding-bottom: 0px;
  //position: relative;
  height: 100vh;
`
const WishPlaceBody = styled.div`
  padding: 0px 20px;
  font-family: ${theme.font.kor};
`
const BigFontBlock = styled.div`
  font-weight: bold;
  font-size: 20px;

`
const SmallFontBlock = styled.div`
  margin: 10px 0px;
`
const CompleteSelectButton = styled(CenterBox)`
  font-weight: bold;
  font-size: 20px;
  font-family: ${theme.font.kor};
   color: white;
  background-color: ${theme.color.gaaji};
  margin: 0px 20px;
  border-radius: 5px;
  padding: 5px 0px;
  position : absolute;
  width : calc(100% - 40px);
  bottom : 5px;
  :hover{
    cursor: pointer;
  }
`
interface SelectWishPlaceBodyProps{
    setWishPlace :  React.Dispatch<React.SetStateAction<WishPlace | undefined>>
    setMapMode :   React.Dispatch<React.SetStateAction<boolean>>
}
export default function SelectWishPlaceBody({setWishPlace, setMapMode}:SelectWishPlaceBodyProps) {
    const [show,setShow] = useState<boolean>(false);

    const completeButtonClicked = () => {
        setShow(true);
    }

    return (
        <>
            <WishPlaceBodyWrapper>
                <WishPlaceBody>
                    <BigFontBlock>
                        이웃과 만나서<br/>
                        거래하고 싶은 장소를 선택해주세요.
                    </BigFontBlock>
                    <SmallFontBlock>
                        만나서 거래할 때는 누구나 찾기 쉬운 공공장소가 좋아요.
                    </SmallFontBlock>
                </WishPlaceBody>

                <WishPlaceMap setXY={setWishPlace}/>

                <CompleteSelectButton onClick={completeButtonClicked}>
                    선택 완료
                </CompleteSelectButton>
            </WishPlaceBodyWrapper>
            <WishPlaceTextModal show={show}
                                setShow={setShow}
                                setWishPlace={setWishPlace}
                                setMapMode={setMapMode}
            />
        </>
    )

}