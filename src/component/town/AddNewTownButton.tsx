import {ButtonBase, MyTownSettingButton, MyTownSettingButtonDeleteButton} from "./TownSettingBlock";
import styled from "styled-components";
import theme from "../../theme";
import {useNavigate} from "react-router-dom";
import {ENROLL_TOWN} from "../../util/Url";

const NewTownButton = styled.div`
  background-color: ${theme.color.gray};
  display: flex;
  align-items: center;
  width: 49%;
  height: 40px;
  padding: 20px;
  border-radius: 10px;
  justify-content: center;
  font-size: 26px;
`

export default function AddNewTownButton() {
    const navigate = useNavigate();

    const addNewTownButtonClicked = () => {
        navigate(ENROLL_TOWN,{
            replace : true
        })
    }

    return (
        <NewTownButton onClick={addNewTownButtonClicked}>
            <MyTownSettingButtonDeleteButton>+</MyTownSettingButtonDeleteButton>
        </NewTownButton>
    )
}