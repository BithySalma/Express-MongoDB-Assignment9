//create collection
db.createCollection('students');

//Removes a collection from the database.
db.students.drop();

//Inserts a single document into a collection.
db.students.insertOne({
    name: "Bithy Salma",
    age: 20,
    grade: "A",
  });

  //Delete/remove a single document from the collection
  db.students.deleteOne({ name: "Bithy Salma" })



