import styled from "styled-components";
import KakaoMap from "../town/KakaoMap";
import {getCookie} from "../../util/Cookie";
import {ContentBlock} from "../main/MainContent";
import {KAKAO_MAP_MODE} from "../../util/Constants";
import {useState} from "react";
import TownAuthBlock from "./TownAuthBlock";
import {MyTown, TownAddress} from "../../model/town";

const TownAuthWrapper = styled(ContentBlock)`
  padding-bottom: 0px;
  height: 100vh;
`
interface TownAuthContentProps{
    selectedTown?:MyTown | null
    towns?:MyTown[],
    setSelectedTown:  (town:MyTown | undefined | null) => void
}

export default function TownAuthContent({selectedTown, towns, setSelectedTown}:TownAuthContentProps){

    const [currentTown, setCurrentTown]= useState<TownAddress>();
    const [flag,setFlag] = useState<boolean>(false);

    const town:string|undefined = getCookie("selected_town");

    return (
        <>
            <TownAuthWrapper>
                <KakaoMap town={town} flag={flag} setFlag={setFlag} setCurrentTown = {setCurrentTown} mode={KAKAO_MAP_MODE.TOWN_AUTH}/>
                <TownAuthBlock setSelectedTown={setSelectedTown} setCurrentTown={setCurrentTown} towns={towns} selectedTown={selectedTown} currentTown={currentTown}/>
            </TownAuthWrapper>
        </>
    )
}