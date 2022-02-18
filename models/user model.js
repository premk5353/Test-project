let query = "";
const create = (connection,data,callback) =>{
    query = "INSERT INTO users SET";
    connection.query(query, [data],callback)
};
const getall =(connection,callback)=>{
    query = "select*, from users";
    connection.query(query,callback);
}; 
module.exports = {
    create,
    getall,
};