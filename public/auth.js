
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
        var user = $('#signup-form').serializeObject();
        console.log(user);


        $.post('/signup', user, function (data) {
            Cookies.set('token', data.token);
            console.log(data);
            window.location.href = "/";
        })
    })

    $("#login-form").submit(function(e) {
        e.preventDefault();
        var user = $('#login-form').serializeObject();
        console.log(user);

        $.post('/login', user, function (data) {
            Cookies.set('token', data.token);
            console.log(data);
            window.location.href = "/";
        })
    })
})
