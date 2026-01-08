export const convertTimeToMinutes = (time: string): number => {
  return parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3));
};

export const convertMinutesToTime = (totalMinutes: number): string => {
  const hour = totalMinutes / 60;
  const minutes = totalMinutes % 60;
  return `총 ${hour}시간 ${String(minutes).padStart(2, "0")}분`;
};
