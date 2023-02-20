import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import theme from "../../theme";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {MyTown, TownAddress} from "../../model/town";
import {townApi} from "../../api/townApi";
import {useNavigate} from "react-router-dom";
import {MAIN} from "../../util/Url";
import {useState} from "react";
import {setCookie} from "../../util/Cookie";

interface TownAuthBlockProps {
    town?: MyTown,
    currentTown: TownAddress | undefined,
}


const TownAuthBlockContentWrapper = styled.div`
  padding: 25px 15px 25px 15px;
  font-family: ${theme.font.kor};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const TownAuthBlockWithArrowWrapper = styled(TownAuthBlockContentWrapper)`
  justify-content: space-between;
`
const TownAuthBlockAlertWrapper = styled(TownAuthBlockContentWrapper)`
  background-color: red;
  color: white;
`

const TownAuthButton = styled.div`
  background-color: ${theme.color.gaaji};
  width: 100%;
  padding: 15px 0px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`
const Divider = styled.hr`
  margin: 0px 15px 0px 15px;
`
const TownSpan = styled.span`
  font-weight: bold;
`
const ChangeTownButton = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.3);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  padding: 5px 0px;
  font-weight: bold;
  
`

export default function TownAuthBlock({town, currentTown}: TownAuthBlockProps) {

    const [same,setSame] = useState<boolean>(town?.address2 === currentTown?.address2)

    const authTownMutation = townApi.useAuthenticateTownMutation();
    const authenticateTown = authTownMutation[0];

    const updateTownMutation = townApi.useUpdateTownMutation();
    const updateTown = updateTownMutation[0];
    const navigate = useNavigate();
    const townAuthButtonClicked = () => {

        if (town) {
            authenticateTown(town?.id);
            alert(`${town?.address2} 인증 성공`)
            navigate(MAIN, {
                replace: true
            })
        }
    }

    const townChangeOnCurrentLocation = () => {

        if (town && currentTown) {
            setSame(true);
            setCookie("selected_town",currentTown.address2);
            updateTown({
                originalTownId: town.id,
                address1: currentTown.address1,
                address2 : currentTown.address2
            })

        }
    }


    const canAuthTown = () => {
        return <>
            <TownAuthBlockContentWrapper>
                현재 위치가 내 동네로 설정한 <TownSpan>'{town?.address2}'</TownSpan> 내에 있어요.
            </TownAuthBlockContentWrapper>
            <Divider/>
            <TownAuthBlockWithArrowWrapper>
                <span>왜 동네인증을 해야하나요?</span>
                <FontAwesomeIcon icon={faAngleRight}/>
            </TownAuthBlockWithArrowWrapper>
            <TownAuthBlockContentWrapper>
                <TownAuthButton onClick={townAuthButtonClicked}>
                    동네인증 완료하기
                </TownAuthButton>
            </TownAuthBlockContentWrapper>
        </>
    }

    const cannotAuthTown = () => {
        return <>
        <TownAuthBlockAlertWrapper>
                <span>
                    잠깐만요! 현재 위치가  <TownSpan>{town?.address2}</TownSpan>과 달라요!
                    </span>
        </TownAuthBlockAlertWrapper>
        <TownAuthBlockContentWrapper>
            <div>현재 내 동네로 설정되어 있는 <TownSpan>'{currentTown?.address2}'</TownSpan>에서만 동네 인증을 할 수 있어요.
                현재 위치를 확인해주세요</div>
            <ChangeTownButton onClick={townChangeOnCurrentLocation}>현재 위치로 동네 변경하기</ChangeTownButton>
        </TownAuthBlockContentWrapper>
        <Divider/>
        <TownAuthBlockWithArrowWrapper>
            <span>왜 동네인증에 실패하나요?</span>
            <FontAwesomeIcon icon={faAngleRight}/>
        </TownAuthBlockWithArrowWrapper>
        </>
    }

    return (
        <>

            {same ? canAuthTown() : cannotAuthTown()}


        </>
    )
}