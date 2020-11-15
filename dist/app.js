"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var database = require("../config").database;
// Routers
var indexRouter = require("./routes/index");
// database connection
database.connect();
app.use("/", indexRouter);
app
    .listen(port, function () {
    console.log("Listening on port: ", port);
})
    .on("error", function (e) {
    console.log("Error happened: ", e.message);
});
//# sourceMappingURL=app.js.map