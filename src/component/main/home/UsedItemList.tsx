import styled from "styled-components";
import UsedItem from "./UsedItem";
import {useState} from "react";
import {createDummyUsedItemData, UsedItemPostList} from "../../../util/Dummy";

const UsedItemListWrapper = styled.div`
  margin: 20px;
`


function UsedItemList() {
    const dummy_data = createDummyUsedItemData();


    return (
        <>

            <UsedItemListWrapper>
                {
                    dummy_data.map(d => {
                        return <UsedItem
                            key={d.postListRetirveResponse.previewPost.postId}
                            imgUrl={d.postListRetirveResponse.previewPost.representPictureUrl}
                            postId={d.postListRetirveResponse.previewPost.postId}
                            title={d.postListRetirveResponse.previewPost.title}
                            address={d.postListRetirveResponse.previewPost.address}
                            createdAt={d.postListRetirveResponse.previewPost.createdAt}
                            price={d.postListRetirveResponse.previewPost.price}
                            interestCount={d.postListRetirveResponse.previewPostCount.interestCount}
                        />
                    })
                }
            </UsedItemListWrapper>

        </>
    )
}

export default UsedItemList;