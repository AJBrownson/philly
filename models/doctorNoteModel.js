const mongoose = require('mongoose');


const doctorNoteSchema = new mongoose.Schema({
  // patient: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Patient', // Reference to the Patient model
  //   required: true,
  // },
  note: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const DoctorNote = mongoose.model('DoctorNote', doctorNoteSchema);

module.exports = DoctorNote;