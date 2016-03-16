console.log('spike_questions_render loaded');

//also need to add delete function here too


var $questionListEl; //<section> of where the question get posted
var renderQuestions = _.template(`
      <article id="<%= _id %>" class="">
        <a href="/users/<%= author %>" ><h3> title </h3></a>
        <p><%= body %></p>
        <span>
          Created at <% createdAt %>, by
           user.fullName
        </span>

      </article>
    `);

//using put info in template and append to page
function postQuestions(question){
  var questionComponent  = renderQuestions(question);
  var $questionComponent = $(questionComponent);
      $questionListEl      = $('#questionList');

      $questionListEl.append($questionComponent);
}

 //$questionList = <section> of where the question get posted}

function indexingQuestions() {
  var id = "56e89f549e27cd2b3c135ef5"
  $.ajax({
    method: "GET",
    url: "api/classrooms/" + id
  }).then(function(classroom){
    console.log("RENDERING Q", classroom);

    classroom.questions.forEach(function(question){
      postQuestions(question);
    });


  })

}



