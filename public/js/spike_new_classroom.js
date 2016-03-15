
console.log("spike loaded")





var user = {_id: "12345"};

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
}

// .then()







