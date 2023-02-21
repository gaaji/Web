import styled from "styled-components";
import UsedItem from "./UsedItem";
import {usedItemApi} from "../../../api/usedItemApi";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {ADD, useUsedItemSelector} from "../../../store/usedItem";
import {useDispatch} from "react-redux";
import {PLUS, usePageNumSelector} from "../../../store/pageNum";
import {UsedItemPost} from "../../../model/usedItemPost";
import {useNowSelector} from "../../../store/now";

const UsedItemListWrapper = styled.div`
  margin: 20px;
`


function UsedItemList() {


    const [ref, inView] = useInView();
    const usedItem:UsedItemPost[] = useUsedItemSelector();
    const pageNum = usePageNumSelector();
    const dispatch = useDispatch();


    const now = useNowSelector();
    let query = usedItemApi.useGetUsedItemQuery({
        pageNum,
        requestTime : now
    });
    useEffect(() => {

        if (inView && !query.isLoading && query.data !== null && usedItem.length > 0) {
            console.log(`hooking~~ ${pageNum}`)
            dispatch(PLUS())
        }
    }, [inView])




    useEffect(()=>{
        if (query.isSuccess) {
            dispatch(ADD(query.data));
        }
    },[query.data,now])

    if(query.isLoading) return <>Now Loading...</>


    return (
        <>

            <UsedItemListWrapper>
                {

                        usedItem.map(d => {
                        return <UsedItem
                            key={d.previewPost.postId}
                            imgUrl={d.previewPost.representPictureUrl}
                            postId={d.previewPost.postId}
                            title={d.previewPost.title}
                            address={d.previewPost.address}
                            createdAt={d.previewPost.createdAt}
                            price={d.previewPost.price}
                            interestCount={d.previewPostCount.interestCount}
                        />
                    })
                }
                <p ref={ref}></p>
            </UsedItemListWrapper>

        </>
    )
}

export default UsedItemList;