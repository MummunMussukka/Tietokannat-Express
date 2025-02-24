const db = require('../database');

const book = {
  getAll: function(callback) {
    return db.query('select * from book', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book where idBook=?', [id], callback);
  },
  add: function(book, callback) {
    return db.query(
      'insert into book (name,author,isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book where idBook=?', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where idBook=?',
      [book.name, book.author, book.isbn, id],
      callback
    );
  }
};
module.exports = book;