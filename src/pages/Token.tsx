import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {setCookie} from "../util/Cookie";

function Token(){

    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const access = searchParams.get('access');
        if(access)
            setCookie("access_token", access);

        const refresh = searchParams.get('refresh');
        if(refresh)
            setCookie("refresh_token", refresh);

        navigate("/",{
        })
    },[])

    return(
        <>


        </>
    )
}

export default Token;