$(document).ready(function() {
    $("#tabs").tabs();
    // Datepicker Initialization
    $("#arrival_date").datepicker({
        minDate: new Date(), // Disallow past dates
        maxDate: "+90D" // Allow selection up to 90 days from today
    });

    // Tabs Initialization
    $("#reservation_form").tabs();

    // Dialog Initialization for Cancellation Policies
    $("#dialog").dialog({
        autoOpen: false, // Do not open automatically
        width: 400, // Set a suitable width
        modal: true, // Disable interaction with other elements
        buttons: {
            Close: function() {
                $(this).dialog("close"); // Button to close the dialog
            }
        }
    });

    // Open the dialog when the policies button is clicked
    $("#policies").click(function() {
        $("#dialog").dialog("open");
    });

    // Form Submission Handler
    $("#reservation_form").submit(function(event) {
        var isValid = true;

        // Validate the arrival date field
        var arrivalDate = $("#arrival_date").val().trim();
        if (arrivalDate === "") {
            $("#arrival_date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#arrival_date").next().text("");
        }

        // Validate the number of nights field
        var nights = $("#nights").val().trim();
        if (nights === "") {
            $("#nights").next().text("This field is required.");
            isValid = false;
        } else if (!$.isNumeric(nights)) {
            $("#nights").next().text("This field must be numeric.");
            isValid = false;
        } else {
            $("#nights").next().text("");
        }

        // Validate the name field
        var name = $("#name").val().trim();
        if (name === "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        // Validate the email field
        var email = $("#email").val().trim();
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        if (email === "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        // Validate the phone field
        var phone = $("#phone").val().trim();
        if (phone === "") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }

        // Prevent the form submission if any entries are invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
