import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import {HeaderBlock, Top} from "../component/content/Header";
import WriteArticlesHeader from "../component/article/write/WriteArticlesHeader";
import WriteArticlesBody from "../component/article/write/WriteArticlesBody";
import ReadArticleHeader from "../component/article/read/ReadArticleHeader";
import ReadArticleBody from "../component/article/read/ReadArticleBody";
import styled from "styled-components";
import ArticleBottom from "../component/article/read/ArticleBottom";
import {usedItemApi} from "../api/usedItemApi";

const ClearTop = styled(Top)`
  background-color: transparent;
  z-index: 1;
`

export default function ArticlePage(){

    const location = useLocation();
    const query = usedItemApi.useGetUsedItemArticleQuery({id : location.state.id});

    return (
        <>
            {
                query.isSuccess ? <>
                    <ClearTop>
                        <HeaderBlock>
                            <ReadArticleHeader/>
                        </HeaderBlock>
                    </ClearTop>
                    <ReadArticleBody article={query.data}/>
                    <ArticleBottom article = {query.data}/>
                </> : ""
            }


        </>
    )
}