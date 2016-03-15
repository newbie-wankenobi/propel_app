
console.log("spike loaded");

var $classroomInfoTemp = _.template(`
  <article id="<%= _id %>">
    <h3><%= name %></h3>
    <p><%= description %></p>
    <p>Created at <%= createdAt %></p>
  </article>
  `);



//event listener for classroom submit
$('#new-classroom-submit').on('click', function(evt) {
  evt.preventDefault();
  console.log("new classroom click!")
  createClassroom();
});

//grabing new classroom data from form
function newThreadData() {
  return {
    type: $('#new-classroom-type').val(),
    name: $('#new-classroom-name').val(),
    // creator: user._id,
    admins: $('#new-classroom-admins').val(),
    description: $('#new-classroom-description').val()
  }
}

//ajax to create classroom
function createClassroom(){
  console.log(newThreadData());
  return $.ajax({
    method: 'POST',
    url: '/api/classrooms',
    dataType: 'JSON',
    data: newThreadData()
  })


//getting all the classroom
function attachClases() {
  $.get('/api/classrooms').then(function(classrooms) {
      var classArticles = [];
      classrooms.forEach(function(class) {
        classArticles.push($classroomInfoTemp(class));
      })
      return classArticles;
    }, function(err) {
      console.log(err)
    }).then(function(classArticles) {
      classArticles.forEach(function(art) {
        $('#place-to-display-classrooms').append(art); // Don't know
      })                                               // where you want
    }, function(err) {                                 // to attach these
      console.log(err);
    })
}


// function(createClassroom) {
//     $.each(classrooms, function(i, classroom) {
//       createClassroom(classroom)
//     })
//     .then(function(classrooms){


//     }


//       )

//   }
//   errors: function() {
//     alert('error loading classrooms')
//   }
// });

// $( document ).ready(function() {
//   function renderClassroom() {
//     $.ajax({
//       type: 'GET',
//       url: '/api/classrooms'
//     });
//   }
// });









