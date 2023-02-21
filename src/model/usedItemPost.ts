export interface UsedItemPost{
    previewPost : PreviewPost
    previewPostCount : PreviewPostCount
}


export interface PreviewPost{
    postId : string;
    representPictureUrl : string;
    title : string;
    address : string;
    createdAt : string;
    price : number;
    tradeStatus:string,
    isHide: boolean,
}
export interface PreviewPostCount  {
    interestCount : number;
    viewCount : number;
}

export interface UsedItemPostListArgs{
    pageNum: number,
    requestTime: string,
}