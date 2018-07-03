const   mongoose = require("mongoose"),
        Schema = mongoose.Schema,
        NoteSchema = new Schema({
            body: String
        }),
        Note = mongoose.model("Note", NoteSchema);

module.exports = Note;