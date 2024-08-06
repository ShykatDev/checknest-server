import mongoose, { Schema } from "mongoose";

const subtaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  properties: {
    status: { type: String, required: true },
    startdate: { type: Date, required: true },
    enddate: { type: Date, required: true },
    priority: { type: String, required: true },
  },
  tags: [String],
});

const taskSchema = new Schema(
  {
    isActive: { type: Boolean, default: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    // author: { type: mongoose.Schema.Types.ObjectId, required: true },
    author: { type: String, required: true },
    properties: {
      status: { type: String, required: true },
      startdate: { type: Date, required: true },
      enddate: { type: Date, required: true },
      priority: { type: String, required: true },
    },
    subtask: [subtaskSchema],
    tags: [String],
  },
  { timestamps: true }
);

export const taskModel = mongoose.model("Task", taskSchema);
