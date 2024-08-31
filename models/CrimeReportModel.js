import mongoose from 'mongoose';

const CrimeReportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    crimeType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fileURL: {
        type: String,
        required: false
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const CrimeReportModel = mongoose.model('CrimeReport', CrimeReportSchema);

export default CrimeReportModel;
