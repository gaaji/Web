import styled from "styled-components";
import Slider from "react-slick";
import {Article} from "../../../model/usedItemPost";

const StyledSlider = styled(Slider)`
  width: calc(100% - 40px);
  height: 400px;
`
const ImageBlock = styled.div`
  width: 100%;
  height: 400px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
`
const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  
`

interface ArticleImageSliderProps{
    images : Article
}
export default function ArticleImageSlider({images}:ArticleImageSliderProps){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {images.picturesUrl.length===0 ? "" :

                <StyledSlider {...settings}>
                    {images.picturesUrl.map(p => {
                        return   <ImageBlock>
                            <UploadedImage src={p}/>
                        </ImageBlock>
                    })}

                </StyledSlider>
            }


        </>
    )
}