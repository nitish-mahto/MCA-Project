const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
// const connection = require("./src/db/connection");
require("./src/db/connection");
require("./src/models/tokenSchema");
const DATABASE_URL = process.env.D_URL;
const userRouter = require("./src/routes/user.routes");
const vendorRouter = require("./src/routes/vendor.routes");
const adminRouter = require("./src/routes/admin.routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// connection(DATABASE_URL);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/vendor", vendorRouter);
app.use("/admin", adminRouter);
app.use("/", userRouter);

// Swagger API..
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node js API project for E-commerce",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./*.*", "./src/models/*.js", "./src/controller/user.controller.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *  get:
 *    summary: This API is used to check for the API is working or not
 *    description: This API is used to check if get method is working or not
 *    responses:
 *         200:
 *            description: To test Get Method
 *
 */

/**
 * @swagger
 * /getData:
 *  get:
 *    summary: This API is used to check for the API is working or not
 *    description: This API is used to check if get method is working or not
 *    responses:
 *         200:
 *            description: To test Get Method
 *            content:
 *                application/json:
 *                  schema:
 *                      type: array
 *                      user:
 *                          $ref: '#component/schema/getData'
 *
 */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
