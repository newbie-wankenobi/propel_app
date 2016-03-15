var mongoose = require('./database');

var User = require('../models/user');
var Classroom = require('../models/classroom');

// Define users on the global scope to share between promises
var users;
var classrooms;

/*
 * Seed the database.
 */

console.log("Removing users…");
User.remove({})

.then(function() {
  process.stdout.write("Creating users: "); // like console.log!
  return User.create(definedUsers());
})

.then(function(createdUsers) {
  users = createdUsers; // save the users list!
  console.log("Database seeded with " + users.length  + " users.");
})

.then(function() {
  console.log("Removing classrooms...");
  Classroom.remove({})
  // continue chaining after mongodb remove method on second model
  .then(function() {
    process.stdout.write("Creating classrooms: ");
    return Classroom.create(definedClassrooms(users));
  })

  .then(function(createdClassrooms) {
    classrooms = createdClassrooms;
    console.log("Database seeded with " + createdClassrooms.length  + " createdClassrooms.");
    console.log(classrooms);
  })

  .catch(function(err) {
    console.log("Error:", err);
  })
  .then(
    closeMongoConnection, // when the chain is successful…
    closeMongoConnection  // when the chain has failed…
  )
});


function closeMongoConnection() {
  mongoose.connection.close(function(err) {
    if (err) console.log(err);
    process.exit(0);
  });
}

function definedUsers() {
 return [
  { type: 'instructor',
    firstName: 'Phil',
    lastName: 'Hughes',
    email: 'pj@ga.co',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Ezra',
    lastName: 'Raez',
    email: 'ezra.raez@generalassemb.ly',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Jim',
    lastName: 'Clark',
    email: 'jim.clark@generalassemb.ly',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Casper',
    lastName: 'Purtlebaugh',
    email: 'cassie.purtlebaugh@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Melissa',
    lastName: 'Wilcox',
    email: 'melissa@emdubb.co',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Michael',
    lastName: 'Klophaus',
    email: 'mmklophaus@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Fernando',
    lastName: 'Orozco',
    email: 'forozco2085@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Rob',
    lastName: 'Gonnella',
    email: 'robgonnella@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'instructor',
    firstName: 'Shanee',
    lastName: 'Gilboa',
    email: 'shanee85@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'professional',
    firstName: 'Jude',
    lastName: 'Molke',
    email: 'jude@generalassemb.ly',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'professional',
    firstName: 'Meredith',
    lastName: 'Bryan',
    email: 'meredith.bryan@ga.co',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { type: 'professional',
    firstName: 'Kate',
    lastName: 'Rogers',
    email: 'kate.rogers@generalassemb.ly',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Claire',
    lastName: 'Savage',
    email: 'clairejsavage@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Karen',
    lastName: 'Quan',
    email: 'quan.karen@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Yael',
    lastName: 'Amir',
    email: 'yaelamir1@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Michael',
    lastName: 'Duran',
    email: 'mad2116@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Jui-Young',
    lastName: 'Chen',
    email: 'jyc422@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Duane',
    lastName: 'Conqueror',
    email: 'eventsco@aol.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Adrian',
    lastName: 'Nuyda',
    email: 'adamnuyda@yahoo.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Markus',
    lastName: 'Dioguardi',
    email: 'dioguardi.it@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Gamaliel',
    lastName: 'Gad',
    email: 'gamalielgad1234@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Demetra',
    lastName: 'Haloutsos',
    email: 'demetra2h@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Samira',
    lastName: 'Husein',
    email: 'samira.n.husein@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Jonah',
    lastName: 'Sobol',
    email: 'jonah.sobol@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Jasmine',
    lastName: 'Guzman',
    email: 'jasmineguzmanescobar@yahoo.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Jerry',
    lastName: 'Ngov',
    email: 'jcngov@yahoo.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Jerry',
    lastName: 'Lee',
    email: 'leejb91@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'David',
    lastName: 'Niederhauser',
    email: 'niederhauser_david@hotmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'James',
    lastName: 'Coslett',
    email: 'james.coslett@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Ray',
    lastName: 'Chen',
    email: 'jianfuc@usc.edu',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Nelson',
    lastName: 'Valdivia',
    email: 'nperez88@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Pare',
    lastName: 'Saku',
    email: 'parekeet@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'becca',
    lastName: 'Dag',
    email: 'rebecca.dagnew@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Tim',
    lastName: 'Kim',
    email: 'myungtkim@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Mike',
    lastName: 'Pascual',
    email: 'mrpascual6@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Oat',
    lastName: 'Asdon',
    email: 'o.asdon@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Edward “Tony"',
    lastName: 'Estese',
    email: 'tonyestese@hotmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } },

  { firstName: 'Keith',
    lastName: 'To',
    email: 'keithtkto@gmail.com',
    institution: 'General Assembly',
    location: { name: 'Los Angeles', countryCode: 'USA' } }
  ];
}

function definedClassrooms(users) {
  return [
    {
      name: 'WDI-DTLA-8',
      creator: users[0],
      admins: [users[0], users[1], users[2]],
      students: users.slice(12),
      professionals: [users[9], users[10], users[11]],
    },
  ];
}
