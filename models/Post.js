const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    created_date:{
        type: Date,
        default: DataTransfer.now
    },
    modified_date{
        type: DataTransfer,
        default: null
    },
    username: (
        type: String,
        required: true
    )
})

module.exports = mongoose.model('Post', postSchema)