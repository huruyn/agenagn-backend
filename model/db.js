mongoose = require('mongoose');
var dbUrl = "mongodb://127.0.0.1:27017/agenagn";
/*var dbUrl = "mongodb+srv://kalab:kalab.1@cluster0.nifwn.mongodb.net/kiray?retryWrites=true&w=majority";*/

/*
if (process.env.NODE_ENV === 'production') {
    dbUrl = "mongodb+srv://kalab:kalab.1@cluster0.nifwn.mongodb.net/kiray?retryWrites=true&w=majority";


}*/
mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(db => {
      console.log("Database connected");
    }).catch(error => console.log("Could not connect to mongo db " + error));


var user = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
});
var home = mongoose.Schema({
    location: String,
    bed_room : Number,
    monthly_payment: Number,
    floor: Number,
    squareMeter: String,
    phone_number: Number,
    guest_house : Boolean,
    description : String,
    owner_name: String,
    encodedImageUrl: String,
    ownerEmail: String,
    availabilityDate:Date,
    editedVersion: {type:Boolean, default:false},

    listingStatus: String,
    reviewStatus : String,

    dateCreated: Date,
    dateEdited: Date,
    encodedAvatarUrl: String
});
var editHome = mongoose.Schema({
    originalId : String,

    location: String,
    bed_room : Number,
    monthly_payment: Number,
    floor: Number,
    squareMeter:String,
    phone_number: Number,
    guest_house : Boolean,
    description : String,
    owner_name: String,
    encodedImageUrl: String,
    ownerEmail: String,
    availabilityDate:Date,

    listingType: String,
    listingStatus: String,
    reviewStatus : String,

    dateCreated: Date,
    dateEdited: Date,
    encodedAvatarUrl: String,

});


// Create schema
const feedback = mongoose.Schema({
    email: String,
    feed: String
});



mongoose.model('home', home);
mongoose.model('editHome', editHome);
mongoose.model('feedback', feedback);
mongoose.model('user', user);



