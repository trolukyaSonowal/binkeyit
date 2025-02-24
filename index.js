import expresss from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieparser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'


const app = expresss()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(expresss.json())
app.use(cookieparser())
app.use(morgan('dev'))
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8080 || process.env.PORT

app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message :"server is running" + PORT
    })
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running",PORT)
    })
})

