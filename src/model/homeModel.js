const {fetch, fetchAll} = require('../database/connect');
const {GET_USERS} = require('../database/query');
const getUsers = () => fetchAll(GET_USERS);
console.log(getUsers());

module.exports = {
    getUsers
}