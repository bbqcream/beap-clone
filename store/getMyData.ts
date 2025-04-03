import {create} from "zustand/react";
import {getmeProps} from "../types/getmeProps.ts";

const getMyData = create<getmeProps>((set)=> ({
    myData : {
    }
,
    setMyData : (myData) => set({myData}),
}))

export default getMyData;
