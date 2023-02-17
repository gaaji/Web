import MyCarrotItem from "./MyCarrotItem";
import interest from "../../../assets/images/mycarrot/interest.svg";
import sell from "../../../assets/images/mycarrot/selling-list.svg";
import buy from "../../../assets/images/mycarrot/buying-list.svg";
import moa from "../../../assets/images/mycarrot/moabogi.svg";
import houseHold from "../../../assets/images/mycarrot/household.svg";
import {MyCarrotTitle} from "./MyCarrot";

export default function MyTrade(){
    return (<>

        <MyCarrotTitle>나의 거래</MyCarrotTitle>
        <MyCarrotItem src = {interest} desc={"관심목록"}/>
        <MyCarrotItem src = {sell} desc={"판매내역"}/>
        <MyCarrotItem src = {buy} desc={"구매내역"}/>
        <MyCarrotItem src = {moa} desc={"모아보기"}/>
        <MyCarrotItem src = {houseHold} desc={"중고거래 가게부"}/>
        <hr/>

    </>)
}