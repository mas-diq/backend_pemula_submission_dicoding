const { addBooks } = require("./handler/addBooks.js");
const { deleteBookById } = require("./handler/deleteBookById.js");
const { editBookById } = require("./handler/editBookById.js");
const { getAllBooks } = require("./handler/getAllBooks.js");
const { getBookById } = require("./handler/getBookById.js");

const routes = [
    // Menyimpan 1 buku
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    // Menampilkan semua buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    // Menampilkan 1 buku
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById,
    },
    // Merubah 1 buku
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookById,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookById,
    },
];

module.exports = routes;