const books = require("../books.js");

const getAllBooks = (request, h) => {
    const query = request.query;
    let result = books;

    if (query.name) {
        const paramsName = query.name.toLowerCase();
        result = books.filter(data => data.name.toLowerCase().includes(paramsName))
    }

    if (query.reading != null) {
        const paramsReading = (query.reading === '1');
        result = books.filter(data => data.reading === paramsReading)
    }

    if (query.finished != null) {
        const paramFinished = query.finished === '1';
        result = books.filter(data => data.finished === paramFinished)
    }

    const returnValue = result.map(data => ({
        id: data.id,
        name: data.name,
        publisher: data.publisher
    }))

    const response = h.response({
        status: 'success',
        data: {
            books: returnValue,
        }
    })
    return response
};

module.exports = {
    getAllBooks
};