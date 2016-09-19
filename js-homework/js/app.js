$(document).ready(function() {

    var form = $('form');
    var userName = $('#first_name');
    var personalNumber = $('#pesel');
    var birthDate = $('#birth');
    var day = $('#day');
    var alertName = $('<div></div>');
    var alertPesel = $('<div></div>');
    var alertDate = $('<div></div>');
    var alertBday = $('<div></div>');
    var alert = $('<div></div>');
    var result = true;
    $(birthDate).attr('pattern', '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))');
    
  personalNumber.on('blur', function() {
      
      var pesel = personalNumber.val();
      function validateForm() {

            if (!/^[0-9]+$/.test(pesel) || pesel.length != 11) {
                $(personalNumber).after(alertPesel);
                $(alertPesel).text("Please only enter 11 numeric characters");
                result = false;
            }
        }

        validateForm(pesel);    
  });
  
 userName.on('blur', function() {
     
      var name = userName.val()
      if (name.length < 3) {
            $(userName).after(alertName);
            $(alertName).text("Name is too short");
        }   
  });
  
 day.on('blur', function() {
     var birthday = birthDate.val();
       if (day.val() === "") {
            $(day).after(alertDate);
            $(alertDate).text("Choose a day");
        };    
 })    
        
    form.on('submit', function() {

        event.preventDefault();

        var name = userName.val();
        var pesel = personalNumber.val();
        var birthday = birthDate.val();

        function validateForm() {

            if (!/^[0-9]+$/.test(pesel) || pesel.length != 11) {
                result = false;
            }
        }

        validateForm(pesel);

        if (result = true && day.val() !== "" && name.length >= 3 && birthday !== "") {
            this.submit();
        }
        
        else {
            $('.panel').after(alert);
            $(alert).text("Fill in all fields!");
        }

    });

});