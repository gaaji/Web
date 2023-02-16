import DaumPostcode from "react-daum-postcode";
import {townApi} from "../../api/townApi";
import {TownAddress} from "../../model/town";

function TownEnroll(){
    const mutation = townApi.useEnrollTownMutation();
    const setAddress = mutation[0];
    const addressClicked = (data:any) => {
        const selectedAddress : TownAddress = {
            address1 : `${data.sido} ${data.sigungu}`,
            address2 : `${data.hname !== "" ? data.hname : data.bname}`
        }
        setAddress(selectedAddress);
    }
    const postCodeStyle = {
        width: '400px',
        height: '100vh',
    };
    return (
        <>
            <div>
            <DaumPostcode
                style={postCodeStyle}
                autoClose={true}
                onComplete={addressClicked}
                defaultQuery={"남가좌 2동"}
            />
            </div>
        </>
    )
}

export default TownEnroll;