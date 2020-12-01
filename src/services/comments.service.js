import axios from 'axios';
const url = 'http://localhost:1337/comments/';

const getAll = async () => {
    let comments = [];

    try {
        const response = await axios.get(url);
        comments = response.data;
    } catch {
        console.log('deu pau');
    }

    return comments;
}

const update = async (comment) => {
    let updated = {};

    try {
        const response = await axios.put(url, comment);
        updated = response.data;       
    } catch {
        console.log('deu pau');
    }
    return updated; 
}

const remove = async (id) => {
    let success = false;

    try {
        await axios.delete(url + `${id}`);
        success = true; 
    } catch {
        console.log('deu pau');
    }

    return success;
}

const create = async (comment) => {
    let created = {}

    try {
        const response = await axios.post(url, comment);
        created = response.data;
    } catch {
        console.log('deu pau');
    }

    return created;
}


export {
    getAll,
    create,
    update,
    remove
}