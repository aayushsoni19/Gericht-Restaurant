const mongoose = require('mongoose');

const newsLetterSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    }
});

const newsLetterModel = new mongoose.model("NEWSLETTER_EMAIL", newsLetterSchema);

module.exports = newsLetterModel;