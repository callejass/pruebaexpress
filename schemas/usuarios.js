const mongoose = require('../bd'),
    Schema = mongoose.Schema;

const schemas = {

    usuarioSchema: new Schema({
        username: { type: String },
        password: { type: String },
    })

};

module.exports = schemas;