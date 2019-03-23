var topics = ["Adventure Time", "Futurama", "Simpsons"];
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics[1] + "&api_key=5WfA9YXgMTsRPIe1JdT69VXHrMIoPdpL&limit=10";
//queryURL.done(function(data) { console.log("success got data", data); });

$("#get-button").on("click", function() {
   console.log("Buttom click")
    $.ajax({
        url: queryURL,
        method: "GET"
      })
    .then(function(response) {
         console.log(response);

         var results = response.data;

         for (var i =0; i < results.legnth; i++) {
             var toonDiv = $("<div>");
             var rating = results[i].rating;
             var p = $("<p>").text("Rating: " + rating);
             var toonGif = $("<img>");

             toonGif.attr("src", results[i].fixed_height.url);
             toonDiv.append(p);
             toonDiv.append(toonGif)

             $("#gif-container").prepend(toonDiv);

         }
      
    //     var imageUrl = response.data.image_original_url;

    //     var gifResult = $("<img>");

    //     gifResult.attr("src", imageUrl);
    //     gifResult.attr("alt", "cat image");

    //     $("#images").prepend(gifResult);
       })
    
    })
