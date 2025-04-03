import {GetmeElem} from "./getmeElem.ts";

export interface GetmeProps{
    myData : GetmeElem;
    setMyData : (myData:object) => void;
}
