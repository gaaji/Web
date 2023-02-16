import Header from "../component/main/Header";
import NavBar from "../component/main/NavBar";
import styled from "styled-components";
import MainContent from "../component/main/MainContent";
import {townApi} from "../api/townApi";


function Main(){

    // 동네 조회 시도.
    // 비어있으면 동네 추가 페이지로 이동.
    const query = townApi.useGetMyTownQuery();

    console.log(query.data)
    console.log(typeof query.data)




    return (<>
        <Header/>
        <MainContent/>
        <NavBar/>
    </>)

}

export default Main;