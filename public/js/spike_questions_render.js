console.log('spike_questions_render loaded');

//also need to add delete function here too


var $questionListEl; //<section> of where the question get posted
var renderQuestions = _.template(`
      <article id="<%= _id %>" class="">
        <a href="/users/<%= author %>'<h3><%= title %></h3></a>
        <p><%= body %></p>
        <span>
          Created at <% createdAt %>, by
          <%= user.fullName %>
        </span>
    <!-- <br> -->
    <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
    <!-- <br> -->
    <!-- <button>delete this question (only delete user own question)</button> -->
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
  $.ajax({
    method: "GET",
    url: "api/classrooms"
  }).then(function(questions){
    console.log("RENDERING Q", questions);

    questions.forEach(function(question){
      postQuestions(question);
    });


  })

}



