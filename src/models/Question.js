const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const QuestionSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
    },
    questions: [{
        keywords: [String],
        question: { 
            type: String,
            required: true,
        },
        answers: {
            positive: {
                type: String,
                required: true,
            },
            negative: {
                type: String,
                required: true,
            },
            informative: {
                type: String,
                required: true,
            }
        },
        standardAnswer: {
            type: String,
            required: true,
        },
    },]
},{
    timestamps: true
});

QuestionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Question',QuestionSchema)
