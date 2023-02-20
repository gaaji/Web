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
}

interface MapProps {
    mode: string
}

const Map = styled.div`
  width: 100%;
  height: ${(props: MapProps) => props.mode === KAKAO_MAP_MODE.MY_TOWN ? "80%" : "40%"};
`


export default function KakaoMap({town, mode, setCurrentTown}: KakaoMapProps) {

    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=d85ac4ead8e434ecbe9127fd766b23de&libraries=services&autoload=false";
    document.head.appendChild(mapScript);


    function onGeoOk(position: GeolocationPosition) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }



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

            function searchAddrFromCoords(coords: any, callback: any) {
                // 좌표로 행정동 주소 정보를 요청합니다
                geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
            }

            if (mode === KAKAO_MAP_MODE.MY_TOWN) {

                //@ts-ignore
                geocoder.addressSearch(town, function (result, status) {
                    //@ts-ignore
                    if (status === kakao.maps.services.Status.OK) {
                        //@ts-ignore
                        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        map.setCenter(coords);
                    }
                });
            } else if (mode === KAKAO_MAP_MODE.TOWN_AUTH) {
                navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

                const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
                    //@ts-ignore
                    imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
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
                marker.setMap(map);


                //@ts-ignore
                let coords = new kakao.maps.LatLng(latitude, longitude);
                map.setCenter(coords);


                searchAddrFromCoords(map.getCenter(), (result: any) => {
                    for (let i = 0; i < result.length; i++) {
                        // 행정동의 region_type 값은 'H' 이므로
                        if (result[i].region_type === 'H') {
                            if (setCurrentTown) {
                                setCurrentTown({
                                    address1: `${result[i].region_1depth_name} ${result[i].region_2depth_name}`,
                                    address2 : result[i].region_3depth_name
                                });
                                // console.log(result[i])
                            }
                            break;
                        }
                    }
                });
            }


        })

    }


    mapScript.addEventListener("load", onLoadKakaoMap);

    return (
        <>
            <Map mode={mode} id={"map"}></Map>
        </>
    )
}
