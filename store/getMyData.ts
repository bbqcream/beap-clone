import { create } from "zustand/react";
import { GetmeElem } from '../types/getmeElem.ts';
import { GetmeProps } from '../types/getmeProps.ts';

const getMyData = create<GetmeProps>((set) => ({
    myData: {
        username: '',
        email: '',
        grade: 0,
        cls: 0,
        num: 0,
        status: ' ',
        fixedRoom: null,
    },
    setMyData: (myData: GetmeElem) => set({ myData }),
}));

export default getMyData;
