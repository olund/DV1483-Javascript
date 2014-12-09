$(document).ready(function() {
    $('#refresh').click(function(event) {
            $.ajax({
            url: 'quote.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);

                $('#quote').fadeOut('fast', function() {
                    $('#quote').html(data.quote).fadeIn();
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
            },
        });
    });

    $('#refresh').trigger('click');
});