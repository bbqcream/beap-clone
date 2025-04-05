export interface AttendProps {
  room:string;
  reason:string;
  period:number;
  date:Date | null;
}

export interface AttendDataProps{
  attendData : AttendProps | null;
  setAttendData : (myData:AttendProps) => void
}
