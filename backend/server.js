require('dotenv').config()
const app = require('./src/app')


app.listen(3000, ()=>{
    console.log('server is running on http://localhost:3000');
    
}) // now server is tarted on this port 3000