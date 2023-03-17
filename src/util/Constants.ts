interface ModeType{
    HOME : ModeProps,
    TOWNLIFE : ModeProps,
    CHAT : ModeProps,
    MY : ModeProps,
    NEIGHBOR : ModeProps
}
interface ModeProps{
    eng : string,
    kor : string
}

const MODE:ModeType = {
    HOME : {
        eng :'home',
        kor : '홈'
    },
    TOWNLIFE : {
        eng : 'townlife',
        kor : "동네생활"
    },
    CHAT : {
     eng : 'chat',
     kor : '채팅'   
    },
    MY : {
     eng : 'my',
     kor : "나의 당근"   
    },
    NEIGHBOR : {
     eng : "neighbor",
     kor : "내 근처"
    }
}

export const SETTING_MODE = {
    MODIFY : "MODIFY",
    DELETE : "DELETE",
}
export const ENROLL_TOWN_MODE = {
    MODIFY : "MODIFY",
    ADD : "ADD"
}
export const KAKAO_MAP_MODE = {
    MY_TOWN : "MY_TOWN",
    TOWN_AUTH : "TOWN_AUTH"
}

export {MODE}
export type { ModeProps }
