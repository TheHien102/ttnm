const mongoose = require("mongoose");
const { COLLECTION_MESSAGES } = require("../config/db");

const messageSchema = mongoose.Schema(
  {
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Rooms" },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    msg: { type: String, trim: true, default: "" },
    fileIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Files" }],
    replyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages",
      default: null,
    },
    mentions: [
      {
        uid: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        name: { type: String },
      },
    ],
    unSend: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messageSchema, COLLECTION_MESSAGES);

module.exports = Messages;
