import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

schoolSchema.index({ location: "2dsphere" });

const School = mongoose.model("School", schoolSchema);

export default School;
