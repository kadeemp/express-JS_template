
console.log('i live to serve')
$(document).ready(function() {
    $( "#new-post" ).on( "submit", function( event ) {
  event.preventDefault();

var post = $(this).serialize();

      $.post('/posts', post, function (data) {
          console.log(data)
          $('#posts').append("<li>" + data.body + "</li>");
          $('#new-post')[0].reset();
});
    // $('').submit(function (e){
    //     console.log(e)
    //     e.preventDefault();
    //     console.log("preventDefault line loaded")
    //
    //
    //
    //var post = $(this).serialize();
    //
    //     $.post('/posts', post, function (data) {
    //         console.log(data)
    //         $('#posts').append("<li>" + data.body + "</li>");
    //         $('#new-post')[0].reset();


})
})

//   });
// });
