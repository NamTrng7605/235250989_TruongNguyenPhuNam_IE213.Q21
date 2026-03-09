2.1 <br>
<br>
use 23520989-ie213 <br>
![alt text](img/2.1.png) <br>
<br>
---
2.2 <br>
<br>
db.employees.insertMany([<br>
  {"id":1, "name":{"first":"John","last":"Doe"}, "age":48},<br>
  {"id":2, "name":{"first":"Jane","last":"Doe"}, "age":16},<br>
  {"id":3, "name":{"first":"Alice","last":"A"}, "age":32},<br>
  {"id":4, "name":{"first":"Bob","last":"B"}, "age":64}<br>
])<br>
![alt text](img/2.2.png) <br>
<br>
---
2.3<br>
<br>
db.employees.createIndex({ "id": 1 }, { unique: true }) <br>
![alt text](img/2.3.png)<br>
<br>
---
2.4<br>
<br>
db.employees.find({ "name.first": "John", "name.last": "Doe" })<br>
![alt text](img/2.4.png)<br>
<br>
---
2.5<br>
<br>
db.employees.find({<br>
  $and: [<br>
    { "age": { $gt: 30 } },<br>
    { "age": { $lt: 60 } }<br>
  ]<br>
})<br>
![alt text](img/2.5.png)<br>
<br>
---
2.6<br>
<br>
db.employees.insertMany([<br>
  {"id":5, "name":{"first":"Rooney", "middle":"K", "last":"A"}, "age":30},<br>
  {"id":6, "name":{"first":"Ronaldo", "middle":"T", "last":"B"}, "age":60}<br>
])<br>
![alt text](img/2.6.1.png)<br>
<br>
db.employees.find({ "name.middle": { $exists: true } })<br>
![alt text](img/2.6.2.png)<br>
<br>
---
2.7<br>
<br>
db.employees.updateMany(<br>
  { "name.middle": { $exists: true } },<br>
  { $unset: { "name.middle": "" } }<br>
)<br>
![alt text](img/2.7.png)<br>
<br>
---
2.8<br>
<br>
db.employees.updateMany(<br>
  {}, <br>
  { $set: { "organization": "UIT" } }<br>
)<br>
![alt text](img/2.8.png)<br>
<br>
---
2.9<br>
<br>
db.employees.updateMany(<br>
  { "id": { $in: [5, 6] } },<br>
  { $set: { "organization": "USSH" } }<br>
)<br>
![alt text](img/2.9.png)<br>
<br>
---
2.10<br>
<br>
db.employees.aggregate([<br>
  {<br>
    $group: {<br>
      _id: "$organization",<br>
      totalAge: { $sum: "$age" },<br>
      averageAge: { $avg: "$age" }<br>
    }<br>
  }<br>
])<br>
![alt text](img/2.10.png)<br>
<br>
---