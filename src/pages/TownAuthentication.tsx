import Header from "../component/content/Header";
import {townApi} from "../api/townApi";
import TownAuthContent from "../component/townauth/TownAuthContent";
import {getCookie} from "../util/Cookie";
import {MyTown} from "../model/town";

export default function TownAuthentication(){

    const query = townApi.useGetMyTownQuery();

    const checkTownInfo = () => {
        if (query.isSuccess) {

            let town:string|undefined = getCookie("selected_town");



            return <>
                <Header myTown={query.data}/>
                <TownAuthContent myTown={findSameTown(query.data, town)}/>

            </>
        } else {
            return "Now Loading..."
        }
    }

    function findSameTown(datas:MyTown[] , town:string|undefined){
        if(!town)
            return;

        for (const data of datas) {
            if (data.address2 === town) {
                return data;
            }
        }

    }

    return (
        <>
            {checkTownInfo()}
        </>
    )
}