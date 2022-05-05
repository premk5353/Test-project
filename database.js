const {createPool} = require('mysql')
const pool = createPool({
host:"localhost",
user:"root",
password:"12345",
connectionlimit: 10
})

pool.query('select * from traildb.user', (err, res)=>{
    return console.log(res)
})