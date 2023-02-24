import ArticleImageSlider from "./ArticleImageSlider";
import styled from "styled-components";
import {BetweenBox, FlexBox, FontedSpan} from "../../../util/StyledBox";
import theme from "../../../theme";
import SellerInfo from "./SellerInfo";
import {compareLocalDateTimeToNow} from "../../../util/LocalDateTimeConverter";
import {Article} from "../../../model/usedItemPost";
import ReadWishPlaceMap from "./ReadWishPlaceMap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

interface BodyContentWrapperProps{
    mode : boolean
}
const BodyContentWrapper = styled.div`
  margin-top: ${(props: BodyContentWrapperProps) => props.mode? "80px" : "30px"};
  padding: 0px 15px;
`

const ArticleTitle = styled.div`
  font-family: ${theme.font.kor};
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`
const ArticleSubInfo = styled.div`
  font-family: ${theme.font.kor};
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`
const CategorySpan = styled.span`
  text-decoration: underline;
`
const ArticleContentBlock = styled.div`
  margin-top: 20px;
  font-family: ${theme.font.kor};
`
const ArticleContent = styled.pre`
  font-family: ${theme.font.kor};
  font-size: 18px;
`
const CountBlock = styled.div`
    font-family: ${theme.font.kor};
  color: rgba(0,0,0,0.5);

`
const WishPlaceBlock =styled(BetweenBox)`
  font-size: 18px;
  font-family: ${theme.font.kor};
  margin-bottom: 10px;
`
const RightMarginedSpan = styled.span`
  margin-right: 10px;
`

interface ReadArticleBodyProps{
    article :Article;
}
export default function ReadArticleBody({article}:ReadArticleBodyProps) {


    return (
        <>
                <ArticleImageSlider images={article}/>
                <BodyContentWrapper mode = {article.picturesUrl.length===0}>
                    <SellerInfo sellerData={article}/>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleSubInfo>
                        <CategorySpan>{article.category}</CategorySpan>
                        <span> · {compareLocalDateTimeToNow(article.createdAt)}</span>
                    </ArticleSubInfo>
                    <ArticleContentBlock>
                        <ArticleContent>
                        {article.contents}
                            </ArticleContent>
                    </ArticleContentBlock>
                    <CountBlock>관심 {article.interestCount} · 조회 {article.viewCount} </CountBlock>

                {/*    거래 희망 장소 만들기*/}
                    {
                        article.wishX === "" ? "" :
                            <>
                                <hr/>
                                <WishPlaceBlock>
                                    <FontedSpan>
                                        거래 희망 장소
                                    </FontedSpan>
                                    <FlexBox>
                                        <RightMarginedSpan>{article.wishText}</RightMarginedSpan>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </FlexBox>
                                </WishPlaceBlock>
                                <ReadWishPlaceMap article={article}/>
                            </>
                    }


                </BodyContentWrapper>



        </>
    )
}