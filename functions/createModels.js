function createCoachesModel() {
    var CoachesSchema = mongoose.Schema(
        {
            id: Number,
            nsme: String,
            role: String,
            img: String,
            about: String,
            quote: String,
            quote_author: String,
            gmail: String,
            youtube: String,
            facebook: String,
            instagram: String,
            hangouts: String,
            ycbme: String
        }
    );
    var Coaches = mongoose.model("Coaches", CoachesSchema);
    return Coaches;
}

module.exports = {
    coachesModel: createCoachesModel()
}