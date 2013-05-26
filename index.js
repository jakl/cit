$(function(){
  function Citation(citation){
    this.book = parseInt(text.charAt(0)) ? 'science_health' : 'bible';
    this.citation = citation;

    url = "http://cskit-server.herokuapp.com/v1/lesson/text.json?callback=?&"
    + "payload=[%7B%22section%22:1,%22readings%22:"
    + "%7B%22{{book}}%22:[%22{{citation}}%22]%7D%7D]";

    url = url.replace('{{book}}', citation.book);
    url = url.replace('{{citation}}', citation.citation);

    $.ajaxSetup({ async: false });
    this.text = $.getJSON(url);
    $.ajaxSetup({ async: true });
  }

  $('#citations').change(function(){
    citation = new Citation($('#citations').text());
    lookup_citation(citation,
      function(text){
        citation = data[1][citation.book]
        console.log(citation.text);
        $('#text').text(citation.text);
      }
    );
  });
});
