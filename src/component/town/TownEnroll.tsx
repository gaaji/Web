import DaumPostcode from "react-daum-postcode";
import {townApi} from "../../api/townApi";
import {TownAddress} from "../../model/town";
import {getCookie, setCookie} from "../../util/Cookie";
import {useNavigate} from "react-router-dom";

interface TownEnrollProps{
    nextPage?:string
}

function TownEnroll({nextPage}:TownEnrollProps){
    const navigate = useNavigate();
    const mutation = townApi.useEnrollTownMutation();
    const setAddress = mutation[0];
    const addressClicked = (data:any) => {
        const selectedAddress : TownAddress = {
            address1 : `${data.sido} ${data.sigungu}`,
            address2 : `${data.hname !== "" ? data.hname : data.bname}`
        }
        if(!getCookie("selected_town"))
            setCookie("selected_town", selectedAddress.address2)
        setAddress(selectedAddress);

        if(nextPage)
            navigate(nextPage,{replace:true});

    }
    const postCodeStyle = {
        width: '100%',
        height: '100vh',
    };
    return (
        <>
            <div>
            <DaumPostcode
                style={postCodeStyle}
                autoClose={true}
                onComplete={addressClicked}
            />
            </div>
        </>
    )
}

export default TownEnroll;