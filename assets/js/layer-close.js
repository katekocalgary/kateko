/* * * * * * * * * * * * * * * * * * *
JS for Closing message layer 
* * * * * * * * * * * * * * * * * * */
/* (2019-11-15, Kate Ko) */
/* related ejs : post, post-form, signin, signup */

// Close  message layer
  const messageClose = document.querySelector("#message-close");
  const subMessage = document.querySelector(".subMessage");
    // Result layer close event
    messageClose.addEventListener("click", function(){
      subMessage.setAttribute("class","closeMessage") 
      location.reload();
    });



