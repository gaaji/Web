import {ProfileImg} from "../../main/mycarrot/ProfileArea";
import {BetweenBox, FlexBox} from "../../../util/StyledBox";
import styled from "styled-components";
import theme from "../../../theme";
import {ProgressBar} from "react-bootstrap";
import {Article} from "../../../model/usedItemPost";
import defaultProfile from "../../../assets/images/default-profile.svg"

const SellerInfoWrapper = styled(FlexBox)`
  margin: 10px 0px;
  height: 60px;
`
const ProfileImageBlock = styled.div`
  width: 50px;
`
const SellerInfoBlock = styled.div`
  width: calc(100% - 50px);
  font-family: ${theme.font.kor};
`
const SubInfoBox = styled(BetweenBox)`
  font-size: 12px;
`
const NicknameSpan = styled.span`
  font-weight: bold;
`
const MannerTempInfo = styled.span`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline;
`
const MannerTempBar = styled(ProgressBar)`
  height: 5px;
`
const MannerTempIcon = styled(FlexBox)`
  height: 30px;
  font-size: 20px;
`
const MannerBarBlock = styled.div`
  width: 50px;
  margin-right: 10px;
`

interface SellerInfoProps{
    sellerData : Article
}
export default function SellerInfo({sellerData}:SellerInfoProps){

    const temperature = () => {
        if(sellerData.sellerMannerTemperature < 30)
            return "primary"
        if(sellerData.sellerMannerTemperature <= 36.5)
            return "info"
        if(sellerData.sellerMannerTemperature < 45)
            return "warning"
        return "danger"
    }
    const icon = () => {
        if(sellerData.sellerMannerTemperature < 30)
            return "😒";
        if(sellerData.sellerMannerTemperature <= 36.5)
            return "😐"
        if(sellerData.sellerMannerTemperature < 45)
            return "😊"
        return "😍"
    }

    return (
        <>
            <SellerInfoWrapper>
                <ProfileImageBlock>
                    {sellerData.sellerProfilePictureUrl === null ?
                        <ProfileImg
                        src={defaultProfile}/> :
                        <ProfileImg
                            src={sellerData.sellerProfilePictureUrl}/>
                    }
                </ProfileImageBlock>
                <SellerInfoBlock>
                    <BetweenBox>
                        <NicknameSpan>{sellerData.sellerNickname}</NicknameSpan>
                        <FlexBox>
                            <MannerBarBlock>
                                <span>{sellerData.sellerMannerTemperature}&#8451;</span>
                                <MannerTempBar variant={temperature()} now={sellerData.sellerMannerTemperature}/>
                            </MannerBarBlock>
                            <MannerTempIcon>
                                {icon()}
                            </MannerTempIcon>
                        </FlexBox>
                    </BetweenBox>
                    <SubInfoBox>
                        <span>{sellerData.townAddress}</span>
                        <MannerTempInfo>매너온도</MannerTempInfo>
                    </SubInfoBox>
                </SellerInfoBlock>
            </SellerInfoWrapper>
            <hr/>
        </>
    )
}