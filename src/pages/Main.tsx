import Header from "../component/Header";
import NavBar from "../component/NavBar";
import styled from "styled-components";

const Test = styled.div`
      height: 2000px;
    `

function Main(){

    return (<>
        <Header/>
        <Test/>
        <NavBar/>
    </>)

}

export default Main;