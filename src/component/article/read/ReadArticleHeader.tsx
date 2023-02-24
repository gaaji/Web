import {MarginRightIcon} from "../../town/TownHeader";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import house from "../../../assets/images/house.svg"
import share from "../../../assets/images/share.svg"
import more from "../../../assets/images/more.svg"
import {useNavigate} from "react-router-dom";
import {MAIN} from "../../../util/Url";
import styled from "styled-components";
import {BetweenBox, FlexBox} from "../../../util/StyledBox";

const HeaderIcon = styled.img`
  height: 20px;
`
const MarginedIcon = styled(HeaderIcon)`
  margin-right: 20px;
`
const MarginedFontAwesomeIcon = styled(MarginRightIcon)`
  margin-right: 20px;
`
const HeaderBox = styled(BetweenBox)`
    width: 100%;
`

export default function ReadArticleHeader() {
    const navigate = useNavigate();
    const backButtonClicked = () => {
        navigate(MAIN, {
            replace: true
        })
    }

    return (
        <>
                {/* TODO 버튼 별 클릭 추가하기*/}
                <HeaderBox>
                    <FlexBox>
                        <MarginedFontAwesomeIcon onClick={backButtonClicked} icon={faAngleLeft}/>
                        <HeaderIcon onClick={backButtonClicked} src={house}/>
                    </FlexBox>
                    <FlexBox>
                        <MarginedIcon src={share}/>
                        <HeaderIcon src={more}/>
                    </FlexBox>
                </HeaderBox>
        </>
    )
}