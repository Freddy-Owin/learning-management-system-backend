require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const fileUpload = require('express-fileupload');
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(fileUpload());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static("storage"));
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/" + process.env.DB_NAME)
    .then(() => {
        console.log(`Server connected to MongoDB...`);
    })
    .catch(() => console.log(`Server is not connected to MongoDB...`));

// Admin Routers
const careerRouter = require("./routes/admin/careerRouter");
const applicationRouter = require("./routes/admin/applicationRouter");
const roleRouter = require("./routes/admin/roleRouter");
const instructorRouter = require("./routes/admin/instructorRouter");
const courseRouter = require("./routes/admin/courseRouter");
const batchRouter = require("./routes/admin/batchRouter");
const enrollmentRouter = require("./routes/admin/enrollmentRouter");
const weekRouter = require("./routes/admin/weekRouter");
const studentRouter = require("./routes/admin/studentRouter");
const lessonRouter = require("./routes/admin/lessonRouter");
const authRouter = require("./routes/api/authRouter");

// Api Routers
const careerApi = require("./routes/api/careerApi");
const courseApi = require("./routes/api/courseApi");
const enrollmentApi = require("./routes/api/enrollmentApi");

//Student Router 
const studentProfileRouter = require("./routes/students/studentProfileRouter");

const { validateToken } = require('./helper/validator');
// Api Use
app.use("/auth", authRouter);
app.use("/careers", careerApi);
app.use("/courses", courseApi);
app.use("/enrollments", enrollmentApi);

// Admin Use
app.use("/admin/careers", validateToken(), careerRouter);
app.use("/admin/batches", validateToken(), batchRouter);
app.use("/admin/weeks", validateToken(),weekRouter);
app.use("/admin/lessons", validateToken(),lessonRouter);
app.use("/admin/students", validateToken(),studentRouter);
app.use("/admin/instructors", validateToken(),instructorRouter);
app.use("/admin/courses", validateToken(),courseRouter);
app.use("/admin/roles", roleRouter);
app.use("/admin/applications", validateToken(),applicationRouter);
app.use("/admin/enrollments", validateToken(),enrollmentRouter);

// Student Use 
app.use("/students", validateToken(),studentProfileRouter);

app.use((err, req, res, next) => {
    err.status = err.status || 404;
    res.status(err.status).json({ con: false, "msg": err.message });
});

app.get("*", (req, res) => {
    res.status(200).send({ con: false, "msg": "No route with that request!" });
});
// let migrate = () => {
//     let migrator = require("./migrations/migrator");
//     migrator.backup();
    // migrator.migrate();
// }
// migrate();

httpServer.listen(process.env.PORT, () => {console.log("Port is listening on " + process.env.PORT)});
// module.exports = migrate;