import logo from "../../../assets/images/gaaji.png";
import styled from "styled-components";
import theme from "../../../theme";

const ProfileBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.kor};
  font-weight: bold;
  margin-bottom: 50px;
`
const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
  `
const ProfileNickname = styled.span`
    font-size: 20px;
`
const ProfileImg = styled.img`
  width: 40px;
  border-radius: 50%;
  //background-color: black;
  margin-right: 10px;
`
const ProfileViewButton = styled.div`
    background-color: ${theme.color.gray};
  border-radius: 3px;
  padding: 3px 10px;
`

export default function ProfileArea(){
    return (
        <>
            <ProfileBlockWrapper>
                <ProfileWrapper>
                    <ProfileImg src={logo}/>
                    <ProfileNickname>해안짬타</ProfileNickname>
                </ProfileWrapper>
                <div>
                    <ProfileViewButton>프로필 보기</ProfileViewButton>
                </div>
            </ProfileBlockWrapper>
        </>
    )
}