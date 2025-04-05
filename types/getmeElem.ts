import {FixedRoomProps} from './fixedRoomProps.ts';

export interface GetmeElem {
    username:string,
    email:string,
    grade:number,
    cls:number,
    num:number,
    status:string,
    fixedRoom:FixedRoomProps | null,
}
