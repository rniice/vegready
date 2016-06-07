var storeApp = angular.module('storeApp', []);

storeApp.controller('orderController', ['$scope', function($scope) {

  $scope.options = [
    { label: '0', value: 0 },  
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 }
  ];
 
  $scope.vegready_standard = $scope.options[0];
  $scope.vegready_pro = $scope.options[0];


  $scope.checkout = function() {  //when user clicks checkout trigger the paypal form
    var target = document.getElementById("paypal-submit");
    target.click();
  };


}]);

storeApp.controller('pageContent', ['$scope', '$http', function($scope,$http) {

  $scope.intro_data = null;
  $scope.endorsement_data = null;

  //load up the intro and endorsement data into scope
  loadJSON("http://rniice.github.io/vegready/data/intro_data.json", "intro_data");
  loadJSON("http://rniice.github.io/vegready/data/endorsement_data.json", "endorsement_data");

  alert($scope.intro_data);

  function loadJSON(address, load_item){

    // Simple GET request example:
    $http({
      method: 'GET',
      url: address,
      config: "",
      }).then(function success(response) {
          $scope[load_item] = response.data;
        }, function error(response) {
          console.log("error loading json" + response);
      });
  }

}]);


/*
$(document).ready(function() {
  var contactForm = $('#contact-form');      //get the form object

  var formMessages = $('#form-messages');    //get the form response message

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#contact-name').val('');
        $('#contact-mail').val('');
        $('#contact-message').val('');
    })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

  });
  
}

*/