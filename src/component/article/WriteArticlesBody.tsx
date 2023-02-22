import {ContentBlock} from "../main/MainContent";
import styled from "styled-components";
import theme from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BetweenBox, CenterBox, FlexBox, FontedSpan} from "../../util/StyledBox";
import {FormControl} from "react-bootstrap";


const ArticleBodyWrapper = styled(ContentBlock)`
  padding-bottom: 0px;
`
const ArticleBody = styled.div`
  padding: 0px 20px;
`
const ArticleImageBlock = styled.div`
  padding: 30px 0px;
  display: flex;

`
const ArticleImageAddBlock = styled.div`
  border: 3px solid gray;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${theme.font.kor};
`
const ArticleImageAddIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  margin-bottom: 5px;
`
const ImageSlider = styled(Slider)`
  background-color: gray;
  width: calc(100% - 80px);
`
const TitleInput = styled.input`
  border: none;
  font-family: ${theme.font.kor};
  font-size: 20px;
  width: 100%;
`
const PriceInput = styled.input`
  border: none;
  font-family: ${theme.font.kor};
  font-size: 20px;
`
const CheckButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
const FontedCenterBox = styled(CenterBox)`
  font-family: ${theme.font.kor};

`
const DescArea = styled(FormControl)`
  margin-top: 10px;
  border: none;
  height: 100px;
  width: 100%;
  font-family: ${theme.font.kor}
`

const BigDivider = styled.hr`
  border-top: 10px solid;
`
const WishPlaceBlock = styled(BetweenBox)`
  font-size: 20px;
`
const WishPlaceSelectText = styled(FontedSpan)`
  color: rgba(0,0,0,0.4);
  margin-right:10px;
`

export default function WriteArticlesBody() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <>
            <ArticleBodyWrapper>
                <ArticleBody>
                    <ArticleImageBlock>
                        <ArticleImageAddBlock>
                            <ArticleImageAddIcon icon={faCamera}/>
                            <span>0/10</span>
                        </ArticleImageAddBlock>
                        <ImageSlider {...settings}>
                        </ImageSlider>
                    </ArticleImageBlock>
                    <hr/>

                    <TitleInput type={"text"} placeholder={"제목"}/>
                    <hr/>
                    <TitleInput type={"text"} placeholder={"카테고리"}/>
                    <hr/>
                    <BetweenBox>
                        <PriceInput type={"number"} placeholder={"￦ 가격 (선택사항)"}/>
                        <FontedCenterBox>
                            <CheckButton type="checkbox" name="xxx" value="yyy"/>
                            <span>나눔</span>
                        </FontedCenterBox>
                    </BetweenBox>
                    <hr/>
                    <FlexBox>
                        <CheckButton type="checkbox" checked={true}/>
                        <FontedSpan>가격 제안받기</FontedSpan>
                    </FlexBox>
                    <DescArea as={"textarea"} placeholder={"게시글 내용을 작성해주세요. (가품 밒 판매 금지 물품은 게시가 제한될 수 있어요.)"}/>
                </ArticleBody>
                <BigDivider/>
                <ArticleBody>
                    <WishPlaceBlock>
                        <FontedSpan>거래 희망 장소</FontedSpan>
                        <FontedSpan>
                            <WishPlaceSelectText>장소 선택</WishPlaceSelectText>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </FontedSpan>
                    </WishPlaceBlock>

                </ArticleBody>
            </ArticleBodyWrapper>

        </>
    )
}