$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(document).ready(function() {
    $("#signup-form").submit(function(e) {
        e.preventDefault();
        console.log(post);

        var post = $('#signup-form').serializeObject();
        console.log(post);
        $.post('/signup', post, function (data) {

        })
    })
})
