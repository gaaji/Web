interface MyTown extends TownAddress{
    id : string
}

interface TownAddress{
    address1 : string,
    address2 : string
}

export type {MyTown, TownAddress}