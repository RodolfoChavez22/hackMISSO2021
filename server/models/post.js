import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    STATUS: String,
    ESTAB_NAME: String,
    STREET: String,
    CITY: String,
    STATE: String,
    ZIP: String,
    Year: String,
    EMP_Q1: String,
    HOURS_Q2: String,
    DEATHS_G: String,
    CAWAY_H: String,
    CTRANSFER_I: String,
    COTHER_J: String,
    DTRANSFER_K: String,
    DAWAY_L: String,
    INJ_M1: String,
    SKIN_M2: String,
    RESP_M3: String,
    POIS_M4: String,
    OTHER_M5: String,
    HEARING_M: String,
    SIC: String,
    NAICS: String,
    PHONE: String,
    UNUSUAL_Q3: String,
    STRIKE_Q3: String,
    SHUT_Q3: String,
    SEASONAL_Q3: String,
    DISASTER_Q3: String,
    SHORT_Q3: String,
    LONG_Q3: String,
    OREASON_Q3: String,
    OREASON_DESC: String,
})

var PostMessage = mongoose.model('Data', postSchema);

export default PostMessage;