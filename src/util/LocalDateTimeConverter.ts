function convertLocalDateTime(localDateTime:string){
    return new Date(localDateTime.substring(0,19));
}
function compareLocalDateTimeToNow(localDateTime:string) : string{
    const target = convertLocalDateTime(localDateTime);
    const now = new Date();

    const gap = (now.getTime() - target.getTime())/1000;

    // 분 60
    // 시 60 * 60
    // 하루 3600 * 24
    // 달 60 * 60 * 24 * 30

    if(now.getTime() < target.getTime())
        console.error("현재보다 더 이후에 생성된 게시글이 존재할 수 없습니다.")
    if(gap < 60)
        return `${Math.floor(gap)}초 전`
    if(gap < 3600)
        return `${Math.floor(gap/60)}분 전`
    if(gap < 3600 * 24)
        return `${Math.floor(gap/3600)}시간 전`
    if(gap < 3600 * 24 * 30)
        return `${Math.floor(gap/ (3600 * 24))}일 전`
    if(gap > 3600 * 24 * 30)
        return `${Math.floor(gap/ (3600 * 24 * 30))}달 전`
    return "";
}

export{compareLocalDateTimeToNow}