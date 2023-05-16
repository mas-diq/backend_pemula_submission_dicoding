const books = require("../books.js");

const getAllBooks = () => {
    return {
        status: 'success',
        data: {
            books: books.map(book => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            })),
        }
    }
};

module.exports = {
    getAllBooks
};