import {BetweenBox, FlexBox} from "../../../util/StyledBox";
import styled from "styled-components";
import theme from "../../../theme";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Article} from "../../../model/usedItemPost";

const ArticleBottomWrapper = styled(FlexBox)`
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 1px solid ${theme.color.gray};
  width: 100%;
  padding: 10px 20px;
`
const InterestIconBlock = styled(FlexBox)`
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  padding-right: 15px;
  height: 48px;


`
const InterestIcon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`
const PriceChatBlock = styled(BetweenBox)`
  width: 100%;
  padding-left: 20px;
  font-family: ${theme.font.kor};
  font-weight: bold;
`
const PriceText = styled.div`

`
const CannotSuggestText = styled.div`
  color: rgba(0, 0, 0, 0.4)
`
const CanSuggestText = styled.div`
  color: ${theme.color.gaaji};
  text-decoration: underline;
`

const ChatBlock = styled(FlexBox)`
  border-radius: 5px;
  background-color: ${theme.color.gaaji};
  color: white;
  padding: 8px;

`
interface ArticleBottomProps{
    article:Article
}
export default function ArticleBottom({article}:ArticleBottomProps) {
    return (
        <>

            <ArticleBottomWrapper>
                <InterestIconBlock>
                    <InterestIcon size={"lg"} icon={faHeart}/>
                </InterestIconBlock>
                <PriceChatBlock>
                    <div>
                        <PriceText>{article.price.toLocaleString()}원</PriceText>
                        {
                            article.canSuggest ?
                                <CanSuggestText>가격 제안 {article.suggestCount}명</CanSuggestText>
                                :<CannotSuggestText>가격 제안 불가</CannotSuggestText>
                        }
                    </div>
                    <ChatBlock>채팅하기</ChatBlock>
                </PriceChatBlock>
            </ArticleBottomWrapper>

        </>
    )
}