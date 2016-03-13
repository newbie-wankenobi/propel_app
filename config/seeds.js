var mongoose = require('./database');

var User = require('../models/user');

var users = [
  { type: 'instructor',
    firstName: 'Ezra',
    lastName: 'Raez',
    email: 'ezra.raez@generalassemb.ly',
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
    firstName: 'Jim',
    lastName: 'Clark',
    email: 'jim.clark@generalassemb.ly',
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
    firstName: 'Phil',
    lastName: 'Hughes',
    email: 'pj@ga.co',
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

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.")
      console.log(users);
      mongoose.connection.close(function(err) {
        if (err) console.log(err);
        process.exit(0);
      });
    }
  });
});
