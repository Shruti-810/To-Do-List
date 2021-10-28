const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = express.Router()
const app = express()
app.use(express.json())

app.use(cors());
const db = "mongodb+srv://vrushika:vrushika@cluster0.ubnqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db, ({ useNewUrlParser: true }))
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

const todoschema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
})

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String },
    createdDate: { type: Date, default: Date.now },

});
const User = mongoose.model("user", userSchema)

const Todo = mongoose.model('todo', todoschema)

router.get('/todos', (req, res) => {

    Todo.find().then(todo => res.json(todo))
})

router.post("/register", async (req, res, next) => {
    const userParam = req.body;
    console.log("here");

    if (await User.findOne({ email: userParam.email })) {
        res.status(401).json({ message: 'Email "' + userParam.email + '" is already taken' });
    }

    const user = new User(userParam);
    // save user
    await user.save();
    res.json(user);
});


router.post("/login", async (req, res, next) => {
    const userParam = req.body;
    console.log("here");
    const user = await User.findOne({ email: userParam.email })
    if (!user) {
        res.status(401).json({ message: 'Email "' + userParam.email + '" Not exist' });
    }
    else {
        if (userParam.password === user.password) {
            res.json(user)
        }
    }

});


router.post('/todos', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    newTodo.save().then(todo => res.json(todo))
})


router.delete('/todos/:id', (req, res) => {

    Todo.findByIdAndDelete(req.params.id)
        .then(() => { res.json({ remove: true }) })
})
app.use('/', router);

app.listen(5000, () => {
    console.log("Running at 5000");
})