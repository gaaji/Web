import styled from "styled-components";
import {useEffect} from "react";


interface KakaoMapProps{
    town:string | undefined
}
const Map = styled.div`
      width: 100%;
      height: 80%;
    `
export default function KakaoMap({town}:KakaoMapProps) {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d85ac4ead8e434ecbe9127fd766b23de&libraries=services&autoload=false";
    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
        //@ts-ignore
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                //@ts-ignore
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
            };
            //@ts-ignore
            const map = new window.kakao.maps.Map(mapContainer, mapOption);
            //@ts-ignore
            let geocoder = new window.kakao.maps.services.Geocoder();
                //@ts-ignore
                geocoder.addressSearch(town, function(result, status) {
                    //@ts-ignore
                    if (status === kakao.maps.services.Status.OK) {
                        //@ts-ignore
                        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                        map.setCenter(coords);
                    }
        });
    })}
    mapScript.addEventListener("load", onLoadKakaoMap);

    return (

        <>
            <Map id={"map"}></Map>
        </>

    )
}