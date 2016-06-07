$(function(){
        console.log("Loading trains");
        function loadTrains(){
          $.getJSON("/api/trains/", function( trains ) {
            console.log(trains);
            var message = "Nobody is here";
            if ( trains.length > 0 ) {
                message = trains[0].street + " " + trains[0].date;
            }
           $(".intro-lead-in").text(message);
          });
        };
        setInterval( loadTrains, 5000);
});