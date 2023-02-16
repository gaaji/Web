import styled from "styled-components";
import theme from "../../theme";

import {MyTown} from "../../model/town";
import SettingButton, {MyTownSettingButtonProps, SettingButtonProps} from "./SettingButton";
import AddNewTownButton from "./AddNewTownButton";
import {useState} from "react";

const MyTownSettingWrapper = styled.div`

  padding: 20px 20px 0px 20px;
  position: relative;
  top: -10px;
  z-index: 1;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: ${theme.font.kor};
  font-weight: bold;
`
const MyTownSettingTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

`
const MyTownSettingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  height: 40px;
  padding: 20px;
  border-radius: 10px;
`
export const MyTownSettingButton = styled(ButtonBase)`
  background-color: ${(props:MyTownSettingButtonProps) => props.selected ? theme.color.gaaji : theme.color.gray } ;
`
export const MyTownSettingButtonDeleteButton = styled.span`
    :hover{
      cursor: pointer;
    }
`

interface TownSettingBlockProps{
    addresses: MyTown[],
    selectedTown? : string
    setTown: (town:string) => void
}

export default function TownSettingBlock({addresses, selectedTown, setTown}:TownSettingBlockProps){

    const createTownSettingButtons = () => {

        if(addresses.length === 1)
            return <>
                <SettingButton address={addresses[0]} selected={addresses[0].address2 === selectedTown}/>
                <AddNewTownButton/>
            </>
        return addresses.map(a =>  <SettingButton setTown={setTown} key={a.id}  address={a} selected={a.address2 === selectedTown}/>);
    }

    return (
        <>
            <MyTownSettingWrapper>
                <MyTownSettingTitle>내 동네</MyTownSettingTitle>
                <MyTownSettingButtonWrapper>
                    {createTownSettingButtons()}
                </MyTownSettingButtonWrapper>
            </MyTownSettingWrapper>

        </>
    )
}