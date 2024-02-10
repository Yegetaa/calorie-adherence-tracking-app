import mongoose from 'mongoose';
const { Schema } = mongoose;

const caloriePerDaySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  totalCalories: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 10000
    }
});


export default mongoose.model('CalorieConsumption', caloriePerDaySchema);

