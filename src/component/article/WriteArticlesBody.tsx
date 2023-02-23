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
import React, {useState} from "react";
import {Article, WishPlace} from "../../model/usedItemPost";
import {MakeArticle} from "../../pages/WriteArticle";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";


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
  color: rgba(0, 0, 0, 0.4);
  margin-right: 10px;
`
const UploadInput = styled.input`
  display: none;
`
const ImageBlock = styled.div`
  width: 25%;
  height: 80px;
  border-radius: 15px;
  background-color: black;
  position: relative;
`
const ArticleImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`
const ImageDeleteButton = styled(CenterBox)`
  width: 16px;
  height: 16px;
  background-color: black;
  color: white;
  border-radius: 25px;
  text-align: center;
  position: absolute;
  top: 0;
  right:0;
  :hover{
    cursor:pointer;
  }
`
const WishPlaceSpan = styled(FontedSpan)`
  :hover{
    cursor:pointer;
  }
`

interface WriteArticlesBodyProps{
    article:MakeArticle,
    setMapMode: React.Dispatch<React.SetStateAction<boolean>>,
    wishPlace:WishPlace | undefined
}
export default function WriteArticlesBody({article,setMapMode,wishPlace}:WriteArticlesBodyProps) {

    const LIMIT = 10;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const imageAddBlockClicked = () => {
        const file = document.getElementById("input");
        if (file !== null)
            file.click();
    }
    const handleChangeFile = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files===null)
            return;

        if (LIMIT < article.imgFile.length + event.target.files.length) {
            alert("최대 10개 까지만 업로드 할 수 있습니다.")
            return;
        }
        for (const element of event.target.files) {
            if (element) {
                console.log(element.name)
                article.setImgFile(prev => [...prev, element])
                let reader = new FileReader();
                reader.readAsDataURL(element); // 1. 파일을 읽어 버퍼에 저장합니다.
                // 파일 상태 업데이트
                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    if (base64) {
                        let base64Sub = base64.toString()
                        article.setImgBase64(prev => [...prev, {
                            src:base64Sub,
                            name:element.name
                        }]);
                    }
                }
            }
        }
    }
    const imageDeleteButtonClicked = (name:string) => {
        article.setImgFile(prev => prev.filter(p => p.name !== name));
        article.setImgBase64(i=> i.filter(image => image.name !==name));
    }
    const shareButtonClicked = () => {
        article.setShare(prev => !prev)
        article.setPrice("");
        article.setSuggest(false);
    }

    return (
        <>
            <ArticleBodyWrapper>
                <ArticleBody>
                    <ArticleImageBlock>
                        <form>
                            <UploadInput onChange={handleChangeFile} multiple={true} id={"input"} type="file"
                                         accept='image/*'/>
                        </form>
                        <ArticleImageAddBlock onClick={imageAddBlockClicked}>
                            <ArticleImageAddIcon icon={faCamera}/>
                            <span>{article.imgBase64.length}/10</span>
                        </ArticleImageAddBlock>
                        <ImageSlider {...settings}>
                            {article.imgBase64.map(i => {
                                return <ImageBlock key={i.src}>
                                    <ArticleImageThumbnail key={i.name} src={i.src} />
                                    <ImageDeleteButton onClick={() => imageDeleteButtonClicked(i.name)}>X</ImageDeleteButton>
                                </ImageBlock>
                            })}
                        </ImageSlider>
                    </ArticleImageBlock>
                    <hr/>

                    <TitleInput value={article.title} onChange={(e)=>article.setTitle(e.target.value)} type={"text"} placeholder={"제목"}/>
                    <hr/>
                    <TitleInput value={article.category} onChange={(e)=>article.setCategory(e.target.value)} type={"text"} placeholder={"카테고리"}/>
                    <hr/>
                    <BetweenBox>
                        <PriceInput disabled={article.share} value={article.share?"":article.price} onChange={(e) => article.setPrice(Number.parseInt(e.target.value))} type={"number"} placeholder={"￦ 가격 (선택사항)"}/>
                        <FontedCenterBox>
                            <CheckButton onClick={shareButtonClicked} checked={article.share} type="checkbox" name="xxx" value="yyy"/>
                            <span>나눔</span>
                        </FontedCenterBox>
                    </BetweenBox>
                    <hr/>
                    <FlexBox>
                        <CheckButton type="checkbox" disabled={article.share} onClick={() => article.setSuggest(prev => !prev)} checked={article.suggest}  />
                        <FontedSpan>가격 제안받기</FontedSpan>
                    </FlexBox>
                    <DescArea value={article.content} onChange={(e) => article.setContent(e.target.value)} as={"textarea"} placeholder={"게시글 내용을 작성해주세요. (가품 밒 판매 금지 물품은 게시가 제한될 수 있어요.)"}/>
                </ArticleBody>
                <BigDivider/>
                <ArticleBody>
                    <WishPlaceBlock>
                        <FontedSpan>거래 희망 장소</FontedSpan>

                        <WishPlaceSpan onClick={() => setMapMode(true)}>
                            {
                                wishPlace?.text ?
                                    <>
                                        <WishPlaceSelectText>{ wishPlace?.text}</WishPlaceSelectText>
                                        <WishPlaceSelectText><FontAwesomeIcon icon={faCircleXmark}/></WishPlaceSelectText>
                                    </>
                                    :
                                    <>
                                        <WishPlaceSelectText>장소 선택</WishPlaceSelectText>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                    </>
                            }

                        </WishPlaceSpan>
                    </WishPlaceBlock>
                </ArticleBody>
            </ArticleBodyWrapper>

        </>
    )
}