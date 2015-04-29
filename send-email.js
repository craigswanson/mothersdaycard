// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('ZuU4VKZr5FlKLUdIJaa-1Q');

// trying to pass form message data to script
var TestVar = form.inputbox.value;

// create a variable for the API call parameters
var params = {
        "template_name": "mother-s-day-card",
        "template_content": [{
            "name": "anne_message",
            "content": TestVar
        }],

    "message": {
        "from_email":"craig@craigswanson.org",
        "to":[{"email":"craig@craigswanson.org",}],
        "subject": "Happy Mother's Day from Anne Geddes!",
        "text": "I'm learning the Mandrill API at Codecademy."
    }
};

function sendTheMail() {
// Send the email!

    m.messages.sendTemplate (params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}
