import styled from "styled-components";
import theme from "../theme";

export const FlexBox = styled.div`
    display: flex;
  align-items: center;
    `
export const BetweenBox = styled(FlexBox)`
  justify-content:space-between;
`

export const CenterBox = styled(FlexBox)`
  justify-content: center;
`
export const FontedSpan = styled.span`
    font-family: ${theme.font.kor}
    `