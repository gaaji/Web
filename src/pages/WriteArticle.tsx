import {HeaderBlock, Top} from "../component/content/Header";
import WriteArticlesBody from "../component/article/WriteArticlesBody";
import WriteArticlesHeader from "../component/article/WriteArticlesHeader";
import React, {createContext, useEffect, useState} from "react";
import {Article, WishPlace} from "../model/usedItemPost";
import SelectWishPlaceHeader from "../component/article/SelectWishPlaceHeader";
import SelectWishPlaceBody from "../component/article/SelectWishPlaceBody";

interface ImageBase{
    src: string;
    name:string
}
export interface MakeArticle{
    imgBase64:ImageBase[],
    setImgBase64:React.Dispatch<React.SetStateAction<ImageBase[]>>,
    imgFile:File[],
    setImgFile: React.Dispatch<React.SetStateAction<File[]>>,
    share:boolean,
    setShare:React.Dispatch<React.SetStateAction<boolean>>,
    suggest:boolean,
    setSuggest:React.Dispatch<React.SetStateAction<boolean>>,
    price:number|string,
    setPrice:React.Dispatch<React.SetStateAction<number|string>>,
    title:string,
    setTitle:React.Dispatch<React.SetStateAction<string>>,
    category:string,
    setCategory:React.Dispatch<React.SetStateAction<string>>,
    content:string,
    setContent:React.Dispatch<React.SetStateAction<string>>,
    wishPlace:WishPlace|undefined,
    setWishPlace:React.Dispatch<React.SetStateAction<WishPlace|undefined>>

}
export default function WriteArticle() {
    const [mapMode, setMapMode] = useState<boolean>(false)

    const [imgBase64, setImgBase64] = useState<ImageBase[]>([]); // 파일 base64
    const [imgFile, setImgFile] = useState<File[]>([]);	//파일
    const [share,setShare] = useState<boolean>(false);
    const [price,setPrice] = useState<number|string>("");
    const [title,setTitle] = useState<string>("");
    const [category,setCategory] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [suggest,setSuggest] = useState<boolean>(false);

    const [wishPlace,setWishPlace]= useState<WishPlace>();




    const article:MakeArticle = {
        imgBase64,
        setImgBase64,
        imgFile,
        setImgFile,
        share,
        setShare,
        price,
        setPrice,
        title,
        setTitle,
        category,
        setCategory,
        content,setContent,
        suggest,
        setSuggest,
        wishPlace,setWishPlace
    }



    return (
        <>

            {!mapMode ? <>
                <Top>
                    <HeaderBlock>
                        <WriteArticlesHeader article={article}/>
                    </HeaderBlock>
                </Top>
                <WriteArticlesBody setMapMode={setMapMode} article={article}/></>
            :<>
                    <Top>
                        <HeaderBlock>
                            <SelectWishPlaceHeader action ={setMapMode}/>
                        </HeaderBlock>
                    </Top>
                    <SelectWishPlaceBody setMapMode={setMapMode} setWishPlace={setWishPlace}/>
                </>}

        </>
    )
}