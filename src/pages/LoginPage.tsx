import styled from "styled-components";
import gaaji from "../assets/images/gaaji.png"
import theme from "../theme";
import {useNavigate} from "react-router-dom";
import {KAKAO_LOGIN, NAVER_LOGIN} from "../util/Api";

const StartPage = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `

const LogoBlock = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      font-family: ${theme.font.kor};
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
    `
const Logo = styled.img`
      width: 200px;
    `
const LogoTitle = styled.h1`
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 25px;
    `
const LogoDesc = styled.span`
      margin-bottom: 10px;
    `
const LoginArea = styled.div`
      display: flex;
      flex-direction: column;
      margin: 0px 20px;
      width: calc(100% - 20px);
    `

const SocialLoginButton = styled.div`
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-bottom: 20px;
      font-family: ${theme.font.kor};
      font-weight: bold;
      :hover{
        cursor: pointer;
      }
    `
const KakaoButton = styled(SocialLoginButton)`
      background-color: ${theme.color.kakao};
    `
const NaverButton = styled(SocialLoginButton)`
      background-color: ${theme.color.naver};
    `

function LoginPage(): JSX.Element {
    const NaverButtonClicked = () => {
        window.location.replace(NAVER_LOGIN) ;
    }
    const KakaoButtonClicked = () => {
        window.location.replace(KAKAO_LOGIN) ;
    }
    return (
        <>
            <StartPage>
                <LogoBlock>
                    <Logo src={gaaji} alt={"haha"}/>
                    <LogoTitle>당신 근처의 당근마켓</LogoTitle>
                    <LogoDesc>내 동네를 설정하고</LogoDesc>
                    <LogoDesc>당근마켓을 시작해보세요.</LogoDesc>
                </LogoBlock>
                <LoginArea>
                    <NaverButton onClick = {NaverButtonClicked}>네이버 로그인</NaverButton>
                    <KakaoButton onClick = {KakaoButtonClicked}>카카오 로그인</KakaoButton>
                </LoginArea>
            </StartPage>
        </>
    )
}
export default LoginPage;