const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const path = require('path'); 

const app = express(); 


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));