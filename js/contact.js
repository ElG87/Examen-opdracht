var participants = {};

var counter = 1;

function removeParticipant(email) {
    var participant = participants[email];
    $(`#participant-${participant.number}`).remove();
    $(`#participant-email-${participant.number}-input`).remove();
    $(`#participant-name-${participant.number}-input`).remove();
    delete participants[email];
}

$(document).ready(function() {
    $('#add-participant-form').submit(function(event) {
        event.preventDefault();

        $("#participant-email").removeClass('error');
        $("#participant-name").removeClass('error');
        $("#errormessage").html('');

        var name = $("#participant-name").val();
        var email = $("#participant-email").val();


        if(!name) {
            $("#participant-name").addClass('error');
        }
        if(!email) {
            $("#participant-email").addClass('error');
        }
        if(!name || !email)
            return;

        email = email.toLowerCase();

        if(participants[email]) {
            $("#participant-email").addClass('error');
            $("#errormessage").html('Er bestaat al een deelnemer met dit emailadres.');
            return;
        }

        participants[email] = {name: name, email: email, number: counter};

        $('#participants-table-body').append(`<tr id="participant-${counter}"><td>${name}</td><td>${email}</td><td><button class="btn btn-link" onclick="removeParticipant('${email}');"><i class="fa fa-times"></i></button></td></tr>`)
        $('#submit-groepsinschrijving-form').append(`<input type="hidden" name="names[]" value="${name}" id="participant-name-${counter}-input"/>`)
        $('#submit-groepsinschrijving-form').append(`<input type="hidden" name="emails[]" value="${email}" id="participant-email-${counter}-input"/>`)

        counter += 1

        $("#participant-name").val('');
        $("#participant-email").val('');
    });
});
