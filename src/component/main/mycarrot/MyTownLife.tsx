import {MyCarrotTitle} from "./MyCarrot";
import MyCarrotItem from "./MyCarrotItem";
import tl from "../../../assets/images/mycarrot/townlife-post-comment.svg";


export default function MyTownLife(){

    return (
        <>
            <MyCarrotTitle>나의 동네생활</MyCarrotTitle>
            <MyCarrotItem src = {tl} desc={"동네생활 글/댓글"}/>
            <hr/>
        </>
    )

}