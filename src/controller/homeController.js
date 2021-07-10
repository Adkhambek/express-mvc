const model = require('../model/homeModel')

const GET = (req, res) => {
    res.render('index.html', {data: [1,2,3]})
};

module.exports = {
    GET
}