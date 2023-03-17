import Header from "../component/content/Header";
import NavBar from "../component/main/NavBar";
import MainContent from "../component/main/MainContent";
import {townApi} from "../api/townApi";
import TownEnroll from "../component/town/TownEnroll";
import {MyTown} from "../model/town";
import {getCookie, setCookie} from "../util/Cookie";
import {useEffect} from "react";
import {accessTokenAxios} from "../util/Axios";
import {CREATE_TOWN_TOKEN} from "../util/Api";
import {SET, useTownTokenSelector} from "../store/towntoken";


function getTownToken(townToken: string) {
    if (townToken !== "")
        return;
    if (getCookie("X-TOWN-TOKEN") && getCookie("X-TOWN-TOKEN") !== "") {
        SET(getCookie("X-TOWN-TOKEN"));
        return;
    }
    accessTokenAxios.post(CREATE_TOWN_TOKEN)
        .then(res => {
            setCookie("X-TOWN-TOKEN", res.headers["x-town-token"])
            SET(res.headers["x-town-token"]);
        })
}

function Main() {


    const townToken = useTownTokenSelector();
    const query = townApi.useGetMyTownQuery();
    useEffect(() => {
        getTownToken(townToken);
    },[townToken])

    function showComponent(data:MyTown[]) {
        if (typeof data === 'object' && data.length === 0) {
            return <>
                <TownEnroll/>
            </>
        } else {
            if(!getCookie("selected_town"))
                setCookie("selected_town",data[0].address2)
            getTownToken(townToken);
            return <>
                <Header myTown={data}/>
                <MainContent/>
                <NavBar/>
            </>
        }
    }

    const checkTownInfo = () => {

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