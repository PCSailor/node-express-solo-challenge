$(document).ready(function() {
  console.log('jquery loaded');



$('#jokeButton').on('click', function(jokeButton) {
console.log('joke button clicked');
$.ajax({
  type: 'GET',
  url: '/',
  // url: '/firstJoke',
  success: function(response) {
  console.log('Client side successful response from server', response);
  $('#jokes').text(response);
}
}); // $.ajax({
}); // #jokeButton').on('click'


}); //$(document).ready(function() {
