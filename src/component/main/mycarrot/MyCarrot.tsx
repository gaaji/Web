import logo from '../../../assets/images/gaaji.png'
import styled from "styled-components";
import theme from "../../../theme";
import ProfileArea from "./ProfileArea";
import interest from "../../../assets/images/mycarrot/interest.svg"
import sell from "../../../assets/images/mycarrot/selling-list.svg"
import buy from "../../../assets/images/mycarrot/buying-list.svg"
import moa from "../../../assets/images/mycarrot/moabogi.svg"
import houseHold from "../../../assets/images/mycarrot/houseHold.svg"
import MyCarrotItem from "./MyCarrotItem";
import MyTrade from "./MyTrade";
import MyTownLife from "./MyTownLife";
import MyBiz from "./MyBiz";
import Etc from "./Etc";

const MyCarrotWrapper = styled.div`
  margin: 20px;
`

const MyCarrotList = styled.div`
  font-family: ${theme.font.kor};
`
export const MyCarrotTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`


export default function MyCarrot() {
    return (
        <>
            <MyCarrotWrapper>
                <ProfileArea/>
                <MyCarrotList>
                    <MyTrade/>
                    <MyTownLife/>
                    <MyBiz/>
                    <Etc/>
                </MyCarrotList>
            </MyCarrotWrapper>
        </>
    )
}