const express = require('express')
const  connectDB = require('./config/db')
const port = 5000
const app = express();


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/specializations', require('./routes/specializationRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));

app.listen(port, () => console.log(`server started on ${port}`))
