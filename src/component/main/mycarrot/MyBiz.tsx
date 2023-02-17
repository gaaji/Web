import {MyCarrotTitle} from "./MyCarrot";
import MyCarrotItem from "./MyCarrotItem";
import ad from "../../../assets/images/mycarrot/ad.svg";
import bizp from "../../../assets/images/mycarrot/biz-profile.svg";
import tad from "../../../assets/images/mycarrot/town-ad.svg";

export default function MyBiz(){

    return (
        <>
            <MyCarrotTitle>나의 비즈니스</MyCarrotTitle>
            <MyCarrotItem src = {bizp} desc={"비즈프로필 관리"}/>
            <MyCarrotItem src = {ad} desc={"광고"}/>
            <MyCarrotItem src = {tad} desc={"동네홍보 글"}/>
            <hr/>
        </>
    )

}