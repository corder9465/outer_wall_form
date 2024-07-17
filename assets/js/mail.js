$(document).ready(function() {
    $('.__btn').on('click', function() {
        var itemsText = [];

        // Loop through each answer ID
        for (let i = 1; i <= 20; i++) {
            var itemText = $('#answer_' + i + ' .__answer-main .a__main-ctn span').text(); // Extract text from the element with class 'item'
            if (itemText) { // Check if the text is not empty
                itemsText.push(itemText); // Add the text to the array
            }
        }

        // console.log('data:', itemsText);

        // Send the array to the PHP server
        $.ajax({
            url: 'mail.php', // Your server-side script
            type: 'POST',
            data: { items: itemsText }, // Send the array as 'items'
            success: function(response) {
                console.log('Server response:', response);
                console.log('data:', itemsText);
            },
            error: function(xhr, status, error) {
                console.log('Error sending data. Status:', status, 'Error:', error);
            }
        });
    });
});