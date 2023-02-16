import {MyTown} from "../../model/town";
import {MyTownSettingButton, MyTownSettingButtonDeleteButton} from "./TownSettingBlock";
import {setCookie} from "../../util/Cookie";

export interface SettingButtonProps{
    address : MyTown ,
    selected : boolean,
    setTown? : (a : string) => void
}
export interface MyTownSettingButtonProps{
    selected : boolean
}
export default function SettingButton({address, selected, setTown}: SettingButtonProps):JSX.Element{

    const settingButtonClicked = () => {
        if (setTown) {
            setTown(address.address2);
            setCookie("selected_town", address.address2);
        }
    }
    return (
        <>
            <MyTownSettingButton selected={selected}>
                    <span onClick={settingButtonClicked}>{address.address2}</span>
                <MyTownSettingButtonDeleteButton>X</MyTownSettingButtonDeleteButton>
            </MyTownSettingButton>
        </>
    )
}