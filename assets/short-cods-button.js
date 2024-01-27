(function() {
    tinymce.PluginManager.add('custom_button', function(editor, url) {
        editor.addButton('custom_button', {
            text: 'Insert IDs',
            icon: false,
            classes: 'dido-btn',
            onclick: function() {
                // Create a container div for input fields
                var container = document.createElement('div');

                // Function to create a new input field
                function createInput() {
                    var input = document.createElement('input');
                    input.type = 'text';
                    input.placeholder = 'Enter ID';
                    container.appendChild(input);
                }

                // Create the first input field
                createInput();

                // Open a prompt box with the container div
                var result = prompt('Enter IDs (separated by commas):', '');

                // Check if the user clicked OK and entered IDs
                if (result !== null && result !== '') {
                    // Split the entered IDs
                    var idsArray = result.split(',');

                    // Validate and filter out non-numeric IDs
                    var validIdsArray = idsArray.filter(function(id) {
                        return /^\d+$/.test(id);
                    });

                    // Create input fields for each valid ID
                    validIdsArray.forEach(function(id) {
                        createInput();
                    });

                    // Insert the shortcode with the entered IDs
                    editor.insertContent('[newaqar_post ids="' + result + '"]');
                }
            }
        });
    });
})();
