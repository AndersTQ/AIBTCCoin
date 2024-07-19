const data = require("../database/db.json");
const fs = require("fs");
//console.log("our json db has this: ");
//console.log("our json db has this: ", data[0]);

const newData = [
    {
      id: 1,
      title: "bowl",
    },
    {
        id: 2,
        title: "bowl",
      },
      {
        id: 3,
        title: "bowl",
      },
  ];

//fs.writeFile("../database/db.json", JSON.stringify(newData), (err) => {
  //  if (err) throw err;
    //console.log("done writing....");
  //});
/*
  fs.appendFile("../database/db.json", JSON.stringify(newData), (err) => {
    if (err) throw err;
    console.log("done writing....");
  });*/
  //res.send(data);
  // Use fs.readFile() method to read the file
fs.readFile('../database/db.json', 'utf8', function(err, data2){
    // Display the file content
    console.log(data2);
    //var json=JSON.parse(data2);
    //var data3=JSON.stringify(json);
    var data3=eval("("+data2+")");
    console.log(data3[2].id);
    //console.log(data3);

});
 