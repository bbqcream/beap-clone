import {create} from "zustand/react";
import {AttendDataProps, AttendProps} from '../types/attendDataProps.ts';

const attendState = create<AttendDataProps>((set)=> ({
  attendData : {
    room:"",
    reason:"",
    period:0,
    date:null,
  }
  ,
  setAttendData : (attendData:AttendProps) => set({attendData}),
}))

export default attendState;
