import DaumPostcode from "react-daum-postcode";
import {townApi} from "../../api/townApi";
import {TownAddress, UpdateAddress} from "../../model/town";
import {getCookie, setCookie} from "../../util/Cookie";
import {useNavigate} from "react-router-dom";

const postCodeStyle = {
    width: '100%',
    height: '100vh',
};
interface TownEnrollProps{
    nextPage?:string
    addressId?:string
}
function TownEnroll({nextPage, addressId}:TownEnrollProps){
    const navigate = useNavigate();
    const enrollMutation = townApi.useEnrollTownMutation();
    const setAddress = enrollMutation[0];

    const updateMutation = townApi.useUpdateTownMutation();
    const updateAddress = updateMutation[0];


    const addressClicked = (data:any) => {
        const selectedAddress : TownAddress = {
            address1 : `${data.sido} ${data.sigungu}`,
            address2 : `${data.hname !== "" ? data.hname : data.bname}`
        }
        if(!getCookie("selected_town"))
            setCookie("selected_town", selectedAddress.address2)

        if(addressId){
            updateAddress({
                originalTownId : addressId,
                address1 : selectedAddress.address1,
                address2 : selectedAddress.address2
            })
            setCookie("selected_town", selectedAddress.address2)
        }else
            setAddress(selectedAddress);

        if(nextPage)
            navigate(nextPage,{replace:true});
    }

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