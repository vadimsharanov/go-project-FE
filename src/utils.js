export const range = (start, end) => {
  return [...Array(end).keys()].map((item) => item + start);
};
