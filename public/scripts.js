
console.log('i live to serve')

$(document).ready(function() {

    $( "#new-post" ).on( "submit", function( event ) {
        event.preventDefault();

        var post = $(this).serialize();

        $.post('/posts', post, function (data) {
            console.log(data)
            $('#post-list').append("<li>" + data.body + "</li>");
            $('#new-post')[0].reset();
        });
    });

    $('#post-list').on("click", ".remove-post",  function (e) {
        e.preventDefault();
        console.log("remove-post");
        var post = $(this)
        var postId = post.data('id');

        $.ajax({
            url: '/posts/' + postId,
            type: 'DELETE',
            success: function(data) {
                post.parent().remove();
            }
        })
    })
});
