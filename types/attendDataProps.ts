export interface AttendData {
  room: string;
  reason: string;
  period: number;
  date: Date | null;
}

export interface AttendState {
  attendData: AttendData;
  setAttendData: (updatedFields: Partial<AttendData>) => void;
}
