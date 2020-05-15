// Mysql data connection

var mysql = require('mysql');
require('dotenv').config();
var connection; 

// connection to the DB
if(process.env.JAWSDB_URL){
  connection=mysql.createConnection('mysql://m045vh8vsqb8p4qq:x6s1hiqjk9l7uuba@qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/is96vf1svwq4k7y7');
} else {  
connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'
  });
};

connection.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
  console.log('connected as id ' + connection.threadId);
});


module.exports = connection;
