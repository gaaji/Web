import Header from "../component/content/Header";
import {townApi} from "../api/townApi";
import {ContentBlock} from "../component/main/MainContent";
import KakaoMap from "../component/town/KakaoMap";
import styled from "styled-components";
import theme from "../theme";
import TownSettingBlock from "../component/town/TownSettingBlock";
import {getCookie} from "../util/Cookie";
import {useState} from "react";




export default function MyTown() {

    const [town, setTown] = useState<string|undefined>(getCookie("selected_town"));

    const checkTownInfo = () => {
        const query = townApi.useGetMyTownQuery();

        if (!town && query.data) {
            setTown(query.data[0].address2);
        }



        if (query.isSuccess) {
            return <>
                <Header myTown={query.data}/>
                <ContentBlock>
                    <KakaoMap town={town}/>
                    <TownSettingBlock addresses={query.data} selectedTown={town} setTown={setTown}/>
                </ContentBlock>
            </>
        } else {
            return "Now Loading..."
        }
    }
    return (
        <>
            {checkTownInfo()}
        </>
    )
}