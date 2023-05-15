const books = require("../books.js");

const getBookById = (request, h) => {
    const { id } = request.params;
    const book = books.filter((n) => n.id === id)[0];

    if (book !== undefined) {
        response.code(200);
        return {
            status: 'success',
            data: {
                book: book,
            },
        };
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = {
    getBookById
};
