let modal = {
  show : function(data) {
    let that = this;
    $(function(){
      $("a").click(function(e){
        let movieId =  data.results[Number($(this).attr('id'))]["id"]; // movie id
        e.preventDefault();
        that.addModalText();
        that.initModal();
        that.getTrailer(movieId);
        // modal.loadYoutubeApi()
      });
    });
  },
  
  addModalText : function() {
    $(function(){
      let text = 
      `<!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <div class="container">
              <iframe id="existing-iframe-example"
                frameborder="0"
                enablejsapi="1"
                style="border: solid 4px #37474F">
              </iframe>
            </div>
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        
      </div>
      </div>`

      $("main").append(text);
    });
  },

  initModal: function() {
    $(function() {
      $("#myModal").modal();
    })
  },

  getTrailer: function(id){
    $(function(){
      $("iframe").attr('src',"https://www.youtube.com/embed/ePbKGoIGAXY?enablejsapi=1")
    })
  },
  
  // loadYoutubeApi: function() {
  //   $(function(){
  //     var tag = document.createElement('script');
  //     tag.id = 'iframe-demo';
  //     tag.src = 'https://www.youtube.com/iframe_api';
  //     var firstScriptTag = document.getElementsByTagName('script')[0];
  //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
  //     var player;
  //     function onYouTubeIframeAPIReady() {
  //       player = new YT.Player('existing-iframe-example', {
  //           events: {
  //             'onReady': onPlayerReady,
  //             'onStateChange': onPlayerStateChange
  //           }
  //       });
  //     }
  //   })
  // }

}

module.exports = modal;