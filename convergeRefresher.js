window.addEventListener('load', function() {

    var refresher = window.setInterval(function(){
        var x = document.getElementById('txtRegStatus');

        if(x.innerHTML == "<i>Disconnected: <b>Failed to connet to the server</b></i>")
            window.location.reload();
        
        if(x.innerHTML == "<i>Connected</i>") {
            clearInterval(refresher);
            console.log('stop');
        }
            

      }, 2000);
})
