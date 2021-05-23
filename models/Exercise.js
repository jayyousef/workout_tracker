const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },   
       duration: {
        type: Number,
      },
    
      weight: {
        type: Number,
        unique: true,
        required: true
      },
          
      reps: {
        type: Number,
        unique: true,
        required: true
      },
          
      sets: {
        type: Number,
        unique: true,
        required: true
      },
    
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
