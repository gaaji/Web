export interface UsedItemPost {
    previewPost: PreviewPost
    previewPostCount: PreviewPostCount
}


export interface PreviewPost {
    postId: string;
    representPictureUrl: string;
    title: string;
    address: string;
    createdAt: string;
    price: number;
    tradeStatus: string,
    isHide: boolean,
}

export interface PreviewPostCount {
    interestCount: number;
    viewCount: number;
}

export interface UsedItemPostListArgs {
    pageNum: number,
    requestTime: string,
}

export interface Article {
    title: string,
    contents: string,
    category: string,
    canSuggest: boolean,
    price: number,
    placeX: string,
    placeY: string,
    placeText: string
}

export interface WishPlace{
    text ?: string,
    x ?:string,
    y?:string;
}

export interface Article{
      postId:string
      suggestCount:number
      interestCount:number
      viewCount:number
      chatCount:number
      title:string
      contents:string
      category:string
      createdAt:string
      isHide:boolean
      price:number
      canSuggest:boolean
      wishX:string
      wishY:string
      wishText:string
      townId:string
      townAddress:string
      sellerId:string
      sellerNickname:string
      sellerProfilePictureUrl:string
      sellerMannerTemperature:number
      isMine:boolean
      tradeStatus:string
      isInterested:boolean
     picturesUrl:string[]
}