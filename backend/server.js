const dotenv=require('dotenv').config()
const app=require('./app'); //Importing the instantiated/initialsed app from app.js
const globalErrHandler = require('./middleware/errorHandler');
const  userRouter  = require('./routes/userRouter')
const mongoose=require('mongoose')
const morgan=require('morgan');
const mongoSantize = require('express-mongo-sanitize')
const xssClean= require('xss-clean');
const expenseRouter = require('./routes/expenseRouter');
const { checkAuth } = require('./middleware/checkAuth');
const budgetRouter = require('./routes/budgetRouter');
const blogRouter=require('./routes/blogRouter')

// const { Configuration, OpenAIApi  } = require('openai');

// Set up logger
app.use(morgan('dev'))

//Data sanitization (NoSQL query injection protection)
app.use(mongoSantize()) //looks at req.body and req.params and filters out '$' and '.'

//Data sanitization (XSS - Cross-site scripting attacks) 
app.use(xssClean())  // protection against injection of malicious code


// Chat Bot integration
const configuration = new Configuration({
  organization: process.env.GPT_ORG,
  apiKey: process.env.GPT_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/api/chat',async (req,res)=>{

  console.log(req.body)

  openai
  .createCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req.body.gptqn }],
  })
  .then((res) => {
    console.log(res)
    res.send(res.data.choices[0].message.content);
    console.log(gptmsg);
  })
  .catch((e) => {
    console.log(e);
    res.status(500).json({
          status: 'fail', message: e.message
        })
  });
  
})



//Routes
app.use('/api/users',userRouter)
app.use(checkAuth)
app.use('/api/expenses',expenseRouter)
app.use('/api/budget',budgetRouter)
app.use('/api/blog',blogRouter)


const uri=process.env.MONGO_URI.replace('<password>', process.env.MONGO_PW)
const PORT=process.env.PORT || 3000


//Middleware for unhandled routes
app.all('*', (req,res,next) => {
  res.status(404).json({
    status: 'fail', message: `The API endpoint ${req.url} does not exist!`
  })

})

//Global error handler to handle all errors thrown in the controllers
app.use(globalErrHandler)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    app.listen(PORT, function () {
      console.log('Server is listening at 3000')
    })	
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });