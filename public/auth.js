<script src="./models/user.js"></script>
$(document).ready(function() {
    $("#signup-form").submit(function(e) {
        e.preventDefault();
        console.log($(this).serialize());

        var post = $(this).serialize();
        $.post('/signup', post, function (data) {

        })
    })
})
