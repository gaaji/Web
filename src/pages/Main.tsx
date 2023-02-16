import Header from "../component/content/Header";
import NavBar from "../component/main/NavBar";
import MainContent from "../component/main/MainContent";
import {townApi} from "../api/townApi";
import TownEnroll from "../component/town/TownEnroll";
import {MyTown} from "../model/town";


function Main() {
    function showComponent(data:MyTown[]) {
        if (typeof data === 'object' && data.length === 0) {
            return <>
                <TownEnroll/>
            </>
        } else {
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