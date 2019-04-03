    var config = {
        apiKey: "AIzaSyCLZs6xiRbBkiIZRBalWISyrNL9cHWSQ38",
        authDomain: "movie-night-aec0c.firebaseapp.com",
        databaseURL: "https://movie-night-aec0c.firebaseio.com",
        projectId: "movie-night-aec0c",
        storageBucket: "movie-night-aec0c.appspot.com",
        messagingSenderId: "1070295966731"
      };
 
 firebase.initializeApp(config);
 
 var db = firebase.database();
 var messageRef = db.ref("/message");
 
 $("#send-button").click(function () {
    var message = $("#message-text").val();
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        text: message
    });
 })
 
 messageRef.on('child_added', function (data) {
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
    var message = data.val().text;
    var messageElement = $("<p>").text(message);
    $("#message-container").append(messageElement);
    // Backend
 });