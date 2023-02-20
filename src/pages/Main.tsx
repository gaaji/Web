import Header from "../component/content/Header";
import NavBar from "../component/main/NavBar";
import MainContent from "../component/main/MainContent";
import {townApi} from "../api/townApi";
import TownEnroll from "../component/town/TownEnroll";
import {MyTown} from "../model/town";
import {getCookie, setCookie} from "../util/Cookie";
import {useEffect} from "react";
import {tokenAxios} from "../util/Axios";
import {CREATE_TOWN_TOKEN} from "../util/Api";
import {SET, useTownTokenSelector} from "../store/towntoken";


function Main() {


    const townToken = useTownTokenSelector();

    useEffect(() => {
        console.log("token-useEffect Activated!!!")
        if(townToken!=="")
            return;
        if (getCookie("X-TOWN-TOKEN") && getCookie("X-TOWN-TOKEN") !== "") {
            console.log("getTownTokenCookie Activated!!!")
            SET(getCookie("X-TOWN-TOKEN"));
            return;
        }
        tokenAxios.post(CREATE_TOWN_TOKEN)
            .then(res => {
                console.log("axios Activated!!!")
                setCookie("X-TOWN-TOKEN", res.headers["x-town-token"])
                SET(res.headers["x-town-token"]);
            })
    },[townToken])

    function showComponent(data:MyTown[]) {
        if (typeof data === 'object' && data.length === 0) {
            return <>
                <TownEnroll/>
            </>
        } else {

            if(!getCookie("selected_town"))
                setCookie("selected_town",data[0].address2)
            return <>
                <Header myTown={data}/>
                <MainContent/>
                <NavBar/>
            </>
        }
    }






    const checkTownInfo = () => {
        const query = townApi.useGetMyTownQuery();
        if (query.isSuccess) {
            return showComponent(query.data);
        } else {
            return "Now Loading..."
        }
    }

    return (<>
        {checkTownInfo()}
    </>)

}

export default Main;