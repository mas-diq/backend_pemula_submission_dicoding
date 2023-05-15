const { addBooks } = require("./handler/addBooks.js");
const { getAllBooks } = require("./handler/getAllBooks.js");

const routes = [
    // Menyimpan buku
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    // Menampilkan buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    // {
    //     method: 'GET',
    //     path: '/notes/{id}',
    //     handler: getNoteByIdHandler,
    // },
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