interface MyTown extends TownAddress{
    id : string
}
interface TownAddress{
    address1 : string,
    address2 : string
}
interface UpdateAddress extends TownAddress{
    originalTownId:string
}

export type {MyTown, TownAddress, UpdateAddress}