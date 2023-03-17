export function currentTime() {
    let cur = new Date();
    return `${cur.getFullYear()}-${cur.getMonth() + 1 < 10 ? "0"+(cur.getMonth() + 1)
    :cur.getMonth() + 1}-${cur.getDate()<10?"0"+cur.getDate():cur.getDate()}T${cur.getHours()
    <10? "0"+cur.getHours():cur.getHours()}:${cur.getMinutes()<10?
        "0"+cur.getMinutes():cur.getMinutes()}:${cur.getSeconds()<10?"0"+cur.getSeconds():cur.getSeconds()}`
}