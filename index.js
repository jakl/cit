$(function(){
  function Citation(citation){
    that = this;
    this.ready = function(cb){
      $.getJSON(
        that.url = "http://cskit-server.herokuapp.com/v1/text.json?"
        + "callback=?&citations=" + citation
      )
      .done(function(data){
        citation = data[0];
        that.volume = citation.volume;
        that.citation = citation.citation;
        that.text = citation.text;
        cb();
      })
      .fail(function(jqxhr, status, error){ //Why isn't this working!!!!
        that.volume = status + " : " + error;
      });
    };
  }

  function reload_citation(){
    citation = new Citation($('#citations').val());
    citation.ready(function(){
      $('#citation_volume').text(citation.volume);
      $('#citation_citation').text(citation.citation);
      $('#citation_text').text(citation.text);
      $('#citation_url').text(citation.url);
    });
  }

  $('#citations').change(reload_citation);
  $('#citations').keyup(reload_citation);
  reload_citation();
});
