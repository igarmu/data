const sql = require("msnodesqlv8");
const connectionString="server=.; Database=academics;Trusted_Connection=Yes; Driver=(Sql Server Native 11.0)";
const query ="select *from students";

sql.query(connectionString, query,(err,rows)=>{
    console.log(rows);

});
