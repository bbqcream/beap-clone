import {create} from 'zustand/react';
import {AttendState} from '../types/attendDataProps.ts';

const useAttendState = create<AttendState>(set => ({
  attendData: {
    room: '',
    reason: '',
    period: 0,
    date: null,
  },
  setAttendData: updatedFields =>
    set(state => ({
      attendData: {
        ...state.attendData,
        ...updatedFields,
      },
    })),
}));

export default useAttendState;
