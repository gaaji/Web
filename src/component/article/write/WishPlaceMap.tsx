import React, {useEffect, useState} from "react";
import {TownAddress} from "../../../model/town";
import marker2 from "../../../assets/images/gaaji-nav2.png";
import {KAKAO_MAP_MODE} from "../../../util/Constants";
import styled from "styled-components";
import {WishPlace} from "../../../model/usedItemPost";

const Map = styled.div`
  width: 100%;
  height: 80%;
`
interface WishPlaceMapProps{
    setXY : React.Dispatch<React.SetStateAction<WishPlace | undefined>>
}
export default function WishPlaceMap({setXY}:WishPlaceMapProps){

    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
//@ts-ignore
    const markers = [];

    //@ts-ignore
    let map;
    //@ts-ignore
    let mapContainer;
    //@ts-ignore
    let mapOption;
    //@ts-ignore
    let marker;

    function onGeoOk(position: GeolocationPosition) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }

    function setMarker(lat:number|undefined,lng:number|undefined) {
        //@ts-ignore
        let imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
            //@ts-ignore
            imageOption = {offset: new window.kakao.maps.Point(0, 0)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        //@ts-ignore
        const markerImage = new window.kakao.maps.MarkerImage(marker2, imageSize, imageOption),
            //@ts-ignore
            markerPosition = new window.kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        //@ts-ignore
        marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        //@ts-ignore
        for (const marker1 of markers) {
            marker1.setMap(null);
        }
        //@ts-ignore
        marker.setMap(map);
        //@ts-ignore
        markers.push(marker);
        setXY(prev =>{
            return {...prev, x : lat+"", y : lng+""}
        })
    }

    useEffect(() => {
        //@ts-ignore
        window.kakao.maps.load(() => {
            mapContainer = document.getElementById("map");
            navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
            mapOption = {
                //@ts-ignore
                center: new window.kakao.maps.LatLng(latitude,longitude), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
            };
            //@ts-ignore
            map = new window.kakao.maps.Map(mapContainer, mapOption);
            setMarker(latitude,longitude);

            //@ts-ignore
            window.kakao.maps.event.addListener(map, 'center_changed', function() {
                //@ts-ignore
                let latlng = map.getCenter();
                //@ts-ignore
                setMarker(latlng.getLat(), latlng.getLng() );
                //@ts-ignore



            });
        })
    }, [latitude])

    return (
        <>
            <Map id={"map"}></Map>
        </>
    )


}