const mongoose = require("mongoose");

const users = require("./seeds/users.json");
const reviews = require("./seeds/reviews.json");
const ratings = require("./seeds/ratings.json");
const locations = require("./seeds/locations.json");
const cuisines = require("./seeds/cuisines.json");

mongoose.connect("mongodb://dev:dev_password@localhost/chowrate");
