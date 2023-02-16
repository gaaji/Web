import TownEnroll from "../component/town/TownEnroll";
import Header from "../component/content/Header";
import styled from "styled-components";
import {MY_TOWN} from "../util/Url";
import {useLocation} from "react-router-dom";

const TownAddBodyWrapper = styled.div`
    padding-top: 50px;
`

export default function TownAddPage() {
        const location = useLocation();
    return (
        <>
            <Header myTown={undefined}/>
            <TownAddBodyWrapper>
                <TownEnroll nextPage={MY_TOWN} addressId={location.state?.addressId}/>
            </TownAddBodyWrapper>
        </>
    )
}