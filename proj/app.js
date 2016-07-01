$(document).ready(function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/users/",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "29b15c9c-7e80-747a-8b39-8889472b7c0a"
    }
  }


  $.ajax(settings).done(function (response) {

    $(response).each(function(i, val){
      $('#kyle').append(`<a href='http://localhost:3000/users/${val.user_data.id}'><li>${val.user_data.first_name} ${val.user_data.last_name}</li></a>`);
    })
    $(response).each(function(i, val){
      if(val.user_data.active === 1){
        $('#maiman').append(`<a href='http://localhost:3000/users/${val.user_data.id}' ><li>${val.user_data.first_name} ${val.user_data.last_name}</li></a>`);
      }
    })
  });
})
