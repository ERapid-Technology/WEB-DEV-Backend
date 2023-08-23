const express = require("express")
const bodyParser = require('body-parser')
const api = require('./api');
const router = require("./api");
const UserSChema = require("./schema/UserSChema");
const port = 3000;
const app = express();


app.listen(port, function () {
    console.log("server is up");
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use("/api", api)


router.post('/create', function (req, res) {
    console.log("--------------------------------------------------------------------------")
    console.log(req.body);
    const newUser = new UserSChema({
        userId: req.body.id,
        Name: req.body.name,
        EmailId: req.body.email,
        PhoneNumber: req.body.phoneNumber
    })

    newUser.save(function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.send("user created");
        }
    })
})


router.get('/Users', function (req, res) {
    console.log("--------------------------------------------------------------------------")


    UserSChema.find(function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.send(data);
        }
    })
})

router.post('/Delete', function (req, res) {
    console.log("--------------------------------------------------------------------------")


    UserSChema.deleteOne({ userId: req.body.id }, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            res.send("data deleted");
        }
    })
})

router.post('/update', function (req, res) {
    console.log("--------------------------------------------------------------------------")
    console.log(req.body)

    UserSChema.updateOne({ userId: req.body.id }, {
        Name: req.body.name,
        EmailId: req.body.email,
        PhoneNumber: req.body.phoneNumber
    },
        function (error, data) {
            if (error) {
                console.log(error);
            } else {
                res.send("data deleted");
            }
        })
})