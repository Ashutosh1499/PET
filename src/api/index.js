import axios from 'axios';

const url1 = 'http://localhost:5000/data';
const url2 = 'http://localhost:5000/expList';

export const fetchData = () => axios.get(url1);
export const createData = newData => axios.post(url1, newData);

export const fetchExpList = () => axios.get(url2);
export const createExpData = newExpData => axios.post(url2, newExpData);
