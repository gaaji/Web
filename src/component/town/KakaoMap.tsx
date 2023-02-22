import styled from "styled-components";
import {useEffect, useState} from "react";
import {KAKAO_MAP_MODE} from "../../util/Constants";
import logo from "../../assets/images/gaaji.png"
import marker1 from "../../assets/images/gaaji-nav1.png"
import marker2 from "../../assets/images/gaaji-nav2.png"
import {TownAddress} from "../../model/town";

interface KakaoMapProps {
    town: string | undefined,
    mode: string,
    setCurrentTown?: (currentTown: TownAddress) => void;
    flag? :boolean;
    setFlag? : (flag:boolean) => void;
}

interface MapProps {
    mode: string
}

const Map = styled.div`
  width: 100%;
  height: ${(props: MapProps) => props.mode === KAKAO_MAP_MODE.MY_TOWN ? "80%" : "40%"};
`



export default function KakaoMap({town, mode, flag,setFlag, setCurrentTown}: KakaoMapProps) {

    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();



    //@ts-ignore
    let map;
    //@ts-ignore
    let geocoder;
    //@ts-ignore
    let mapContainer;
    //@ts-ignore
    let mapOption;
//@ts-ignore
    function searchCurrentLocation(geocoder, town: string | undefined, map) {
        //@ts-ignore
        geocoder.addressSearch(town, function (result, status) {
            //@ts-ignore
            if (status === kakao.maps.services.Status.OK) {
                //@ts-ignore
                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                //@ts-ignore
                map.setCenter(coords);
            }
        });
    }
//@ts-ignore
    function setcurrentTown(onGeoOk: (position: GeolocationPosition) => void, onGeoError: () => void, latitude: number | undefined, longitude: number | undefined, map, searchAddrFromCoords: (coords: any, callback: any) => void, setCurrentTown: ((currentTown: TownAddress) => void) | undefined) {
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


        //@ts-ignore
        let imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
            //@ts-ignore
            imageOption = {offset: new window.kakao.maps.Point(0, 0)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        //@ts-ignore
        const markerImage = new window.kakao.maps.MarkerImage(marker2, imageSize, imageOption),
            //@ts-ignore
            markerPosition = new window.kakao.maps.LatLng(latitude, longitude); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        //@ts-ignore
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        //@ts-ignore
        marker.setMap(map);
        //@ts-ignore
        let coords = new window.kakao.maps.LatLng(latitude, longitude);
        //@ts-ignore
        map.setCenter(coords);
//@ts-ignore
        searchAddrFromCoords(map.getCenter(), (result: any) => {
            for (let i = 0; i < result.length; i++) {
                if (result[i].region_type === 'H') {
                    if (setCurrentTown) {
                        setCurrentTown({
                            address1: `${result[i].region_1depth_name} ${result[i].region_2depth_name}`,
                            address2: result[i].region_3depth_name
                        });
                        if(setFlag)
                        setFlag(true);
                    }
                    break;
                }
            }
        });
    }

    function onGeoOk(position: GeolocationPosition) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }

    useEffect(() => {
        //@ts-ignore
        window.kakao.maps.load(() => {
             mapContainer = document.getElementById("map");
             mapOption = {
                //@ts-ignore
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
            };
            //@ts-ignore
            map = new window.kakao.maps.Map(mapContainer, mapOption);
            //@ts-ignore
            geocoder = new window.kakao.maps.services.Geocoder();
        })

        onLoadKakaoMap();
        console.log(town)
    }, [town,flag])


    function searchAddrFromCoords(coords: any, callback: any) {
        // 좌표로 행정동 주소 정보를 요청합니다
        //@ts-ignore
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }
    const onLoadKakaoMap = () => {

        //@ts-ignore
        window.kakao.maps.load(() => {
            if (mode === KAKAO_MAP_MODE.MY_TOWN) {
                //@ts-ignore
                searchCurrentLocation(geocoder, town, map);
            } else if (mode === KAKAO_MAP_MODE.TOWN_AUTH) {
                //@ts-ignore
                setcurrentTown(onGeoOk, onGeoError, latitude, longitude, map, searchAddrFromCoords, setCurrentTown);
            }
        })

    }


    return (
        <>
            <Map mode={mode} id={"map"}></Map>
        </>
    )
}
