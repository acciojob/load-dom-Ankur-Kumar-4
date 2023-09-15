//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
            // Function to write the message to the page
            function writeMessage(message) {
                var messageDiv = document.getElementById("message");
                messageDiv.textContent = message;
            }

            // Write the message when the DOM is loaded
            writeMessage("DOM load success");
        });