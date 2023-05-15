const { addBooks } = require("./handler/addBooks.js");
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
    // {
    //     method: 'PUT',
    //     path: '/notes/{id}',
    //     handler: editNoteByIdHandler,
    // },
    // {
    //     method: 'DELETE',
    //     path: '/notes/{id}',
    //     handler: deleteNoteByIdHandler,
    // },
];

module.exports = routes;