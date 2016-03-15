console.log('spike_questions_render loaded');

//also need to add delete function here too


var $questionListEl; //<section> of where the question get posted
var renderQuestions = _.template(`
      <article id="<%= _id %>" class="">
        <a href="/users/<%= _id %>"><h3><%= name %></h3></a>
        // <a href="/users/<%= creator._id %>"><h3><%= creator.name %></h3></a>
        <p><%= description %></p>
        <span>
          Created at <% createdAt %>, by
          <%= creator.displayName() %>
        </span>
    // <!-- <br> -->
    // <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
    // <!-- <br> -->
    // <!-- <button>delete this question (only delete user own question)</button> -->
      </article>
    `);

//using put info in template and append to page
function postQuestions(question){
  var questionComponent  = renderQuestions(question);
  var $questionComponent = $(questionComponent);
      $questionListEl    = $('#questionList');

      $questionListEl.append($questionComponent);
}

 //$questionList = <section> of where the question get posted}

function indexingClassrooms() {
  $.ajax({
    method: "GET",
    url: "api/classrooms"
  }).then(function(classrooms){
    console.log("RENDERING Q", questions);

    questions.forEach(function(question){
      postQuestions(question);
    });


  })

}



