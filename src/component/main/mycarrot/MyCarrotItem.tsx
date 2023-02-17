import interest from "../../../assets/images/mycarrot/interest.svg";
import styled from "styled-components";
const MyCarrotItemWrapper = styled.div`
    margin-top: 20px;
  display: flex;
  align-items: center;
`
const MyCarrotItemIcon = styled.img`
    width: 20px;
    margin-right: 10px;
`
const MyCarrotItemDesc = styled.span`
    font-weight: bold;
`
interface MyCarrotItemProps {
    onClick?: () => void
    src: string;
    desc:string
}

export default function MyCarrotItem({onClick, src, desc}:MyCarrotItemProps){
    return (
        <>
            <MyCarrotItemWrapper onClick={onClick}>
                <MyCarrotItemIcon src={src}/>
                <MyCarrotItemDesc>{desc}</MyCarrotItemDesc>
            </MyCarrotItemWrapper>
        </>
    )
}