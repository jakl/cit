var params = {
  book: "bible",
  citation: "Gen. 1:1"
};

url_template = "http://cskit-server.herokuapp.com/v1/lesson/text.json?callback=?&";
url_template += "payload=[%7B%22section%22:1,%22readings%22:%7B%22{{book}}%22:[%22{{citation}}%22]%7D%7D]";
url = Mustache.render(url_template, params);

$.getJSON(url).done(function(data){
  console.log(data);
  $('#citations').text(data);
});