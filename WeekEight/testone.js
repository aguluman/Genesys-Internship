const { default: axios } = require("axios");

const testone ={
    add: (num1, num2) => num1 + num2 + 0,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Chukwuma'}
        user['lastName'] = 'Akunyili';
        return user;
    },
    fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1') 
    .then(res => res.data)
    .catch(err => 'error')

};
module.exports = testone;
