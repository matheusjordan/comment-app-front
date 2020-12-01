import axios from 'axios';
const url = 'http://localhost:1337/comments/';

const getAll = () => {
    return axios.get(url);
}

const update = (comment) => {
    return axios.put(url, comment);
}

const create = (comment) => {
    return axios.post(url, comment);
}


export {
    getAll,
    create,
    update,
}