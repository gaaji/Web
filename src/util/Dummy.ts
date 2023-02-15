
interface UsedItemPost{
    previewPost : {
          postId : string;
          representPictureUrl : string;
          title : string;
          address : string;
          createdAt : string;
          price : number;
    }
    previewPostCount : {
        interestCount : number;
        viewCount : number;
    }
}
interface UsedItemPostList{
    postListRetirveResponse : UsedItemPost
}

const createDummyUsedItemData = () => {
    const dummy:UsedItemPostList[] = [];
    for (let i = 0; i < 10; i++) {
        dummy.push({
            postListRetirveResponse: {
                previewPost : {
                    postId: `asdasd ${i}`,
                    representPictureUrl : "https://todoay-picture.s3.ap-northeast-2.amazonaws.com/gaaji/fd308fa8-f9c1-4e2c-8a35-4c0816b51f23gajji.png",
                    title : `테스트 ${i+1}`,
                    address : `서초 ${i+1}동`,
                    createdAt : `2023-02-15T22:52:49.954301600`,
                    price : 30000
                },
                previewPostCount : {
                    interestCount : 10,
                    viewCount : 10
                }
            }
        })
    }
    return dummy;

}

export {createDummyUsedItemData};
export type { UsedItemPostList };
