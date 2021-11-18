import { parse } from 'query-string';

export const range = (start, end) => {
  return [...Array(end).keys()].map((item) => item + start);
};

export const limit = 10;

export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
  const offset = currentPage * 10 - limit;
  return { currentPage, offset };
};

export const dateFormat = (d) => {
  d = new Date(d);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let hours = d.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
