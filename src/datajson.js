const data = require("../database/db.json");
const fs = require("fs");
//console.log("our json db has this: ");
//console.log("our json db has this: ", data[0]);

class Datajson {
  /**   */
  constructor(data, id) {
    this.data = data;
    this.timestamp = timestamp;
    this.id = id;
   }
}


/**/
function Senddata(newData){
fetch("http://localhost:3000/blogs",{
method:'POST',
body:JSON.stringify(newData),
headers:{'Content-type':'application/json'}
})
}
async function Loadnames(id){
  const response=await fetch(`http://localhost:3000/blogs/${id}`,{
  method:'GET',
  headers: {
    'Content-type': 'application/json'
   }
  });
  const names = await response.json();
  //console.log(names[0].id);
  console.log(names);
   }/**/
  
   //Loadnames();


 module.exports.Datajson = Datajson;
 module.exports.Loadnames = Loadnames;
 module.exports.Senddata = Senddata;
/*
 const deleteMethod = {
  method: 'DELETE', // Method itself // Indicates the content 
  headers: {
   'Content-type': 'application/json'
  }
  // No need to have body, because we don't send nothing to the server.
 }
 // Make the HTTP Delete call using fetch api
 fetch("http://localhost:3000/blogs/1", deleteMethod) 
 .then(response => response.json())
 .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
 .catch(err => console.log(err)) // Do something with the error

 */
/*
  fs.appendFile("../database/db.json", JSON.stringify(newData), (err) => {
    if (err) throw err;
    console.log("done writing....");
  });*/
  //res.send(data);
  // Use fs.readFile() method to read the file
  /*
fs.readFile('../database/db.json', 'utf8', function(err, data2){
    // Display the file content
    console.log(data2);
    //var json=JSON.parse(data2);
    //var data3=JSON.stringify(json);
    var data3=eval("("+data2+")");
    //console.log(data3[2].id);
    console.log(data3);

});*/
 