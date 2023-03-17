import Header from "../component/content/Header";
import {townApi} from "../api/townApi";
import {ContentBlock} from "../component/main/MainContent";
import KakaoMap from "../component/town/KakaoMap";
import styled from "styled-components";
import theme from "../theme";
import TownSettingBlock from "../component/town/TownSettingBlock";
import {getCookie, setCookie} from "../util/Cookie";
import {useEffect, useState} from "react";
import {KAKAO_MAP_MODE} from "../util/Constants";


const MyTownBlock = styled(ContentBlock)`
    padding-bottom: 0px;
    height: 100vh;
`

export default function MyTown() {

    const [town, setTown] = useState<string|undefined>(getCookie("selected_town"));
    const query = townApi.useGetMyTownQuery();

    useEffect(() => {
        if (!town && query.isSuccess) {
            setTown(query.data[0].address2);
            setCookie("selected_town",query.data[0].address2);
        }
    },[ query.data])


    const checkTownInfo = () => {
        if (query.isSuccess && town) {
            return <>
                <Header myTown={query.data}/>
                <MyTownBlock>
                    <KakaoMap mode={KAKAO_MAP_MODE.MY_TOWN} town={town}/>
                    <TownSettingBlock addresses={query.data} selectedTown={town} setTown={setTown}/>
                </MyTownBlock>
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