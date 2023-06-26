const { Schema, model } = require('mongoose')

//I need to format the date before it gets to the data base
const reactionSchema = new Schema(
    {
        reactionId: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
        reactionBody: {type: String, required: true, maxlength: 280},
        username: { type: Schema.Types.ObjectId, ref: "User" },
        createdAt: {type: Date, default: Date.now},
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: { type:String, required: true,  minlength: 1, maxlength: 280},
        createdAt: {type: Date, default: Date.now},
        username: { type: Schema.Types.ObjectId, ref: "User" },
        reactions: [reactionSchema] 
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
)


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})



const Thought = model('thought', thoughtSchema)

module.exports = Thought