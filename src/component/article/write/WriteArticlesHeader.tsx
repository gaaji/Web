import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {MarginRightIcon} from "../../town/TownHeader";
import {HeaderTitle} from "../../content/Header";
import styled from "styled-components";
import theme from "../../../theme";
import {MakeArticle} from "../../../pages/WriteArticle";
import {accessTokenAxios, townTokenAxios} from "../../../util/Axios";
import {UPLOAD_USED_ITEM_POST_PICTURE, WRITE_USED_ITEM_POST} from "../../../util/Api";
import {getCookie} from "../../../util/Cookie";
import {useNavigate} from "react-router-dom";
import {MAIN} from "../../../util/Url";
import {useDispatch} from "react-redux";
import {CLEAR, usedItemSlice} from "../../../store/usedItem";
import {pageNumSlice} from "../../../store/pageNum";
import {REFRESH} from "../../../store/now";

const CompleteButton = styled.span`
  font-weight: bold;
  color: ${theme.color.gaaji};
`
interface WriteArticlesHeaderProps{
    article:MakeArticle
}
export default function WriteArticlesHeader({article}:WriteArticlesHeaderProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function moveNextStep() {
        dispatch(pageNumSlice.actions.CLEAR());
        dispatch(usedItemSlice.actions.CLEAR());
        dispatch(REFRESH());
        navigate(MAIN, {
            replace: true
        })
    }

    const completeButtonClicked = () => {

        let errorMessage = `을 입력해주세요`;
        if (article.title === "" || article.category === "" || article.content === "") {
            if(article.title === "")
                errorMessage = `가격 ` + errorMessage;
            if(article.content === "")
                errorMessage = `내용 ` + errorMessage;
            if(article.category === "")
                errorMessage = `카테고리 ` + errorMessage;
            alert(errorMessage);
            return;
        }
        accessTokenAxios.post(WRITE_USED_ITEM_POST,{
            title:article.title,
            contents:article.content,
            category:article.category,
            price: article.share ? 0 : article.price,
            canSuggest: article.suggest,
            placeX : article.wishPlace?.x,
            placeY : article.wishPlace?.y,
            placeText:article.wishPlace?.text
        },{
            headers:{
                "X-TOWN-TOKEN": getCookie("X-TOWN-TOKEN")
            }
        }).then(res => {

            if (article.imgFile.length === 0) {
                moveNextStep();
                return;
            }

            let formData = new FormData();
            for (const file of article.imgFile) {
                formData.append("file", file);
            }

            accessTokenAxios.post(UPLOAD_USED_ITEM_POST_PICTURE(res.data.postId),
                formData,{
                    headers:{
                        "content-type": "multipart/form-data",
                        "X-TOWN-TOKEN": getCookie("X-TOWN-TOKEN")
                    }
                }).then(() => {
                moveNextStep();
            }).catch(err => {
                alert(err)
            })
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <>
            <HeaderTitle>
                <MarginRightIcon icon={faAngleLeft}/>
                <span>중고거래 글쓰기</span>
            </HeaderTitle>
            <CompleteButton onClick={completeButtonClicked}>완료</CompleteButton>

        </>
    )
}