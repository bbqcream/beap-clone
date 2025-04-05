import {GetmeElem} from "./getmeElem.ts";

export interface GetmeProps {
    myData: GetmeElem | null;
    setMyData: (myData: GetmeElem) => void;
}
