let welcomeMessage = "Welcome to Girls Gang!";
        console.log(welcomeMessage);

        // Use the querySelector method to store HTML elements in variables
        let fnameInput = document.querySelector('#fname');
        let lnameInput = document.querySelector('#lname');
        let emailInput = document.querySelector('#email');
        let submitButton = document.querySelector('button');

        // Test variables by logging them in the console
        console.log(fnameInput);
        console.log(lnameInput);
        console.log(emailInput);
        console.log(submitButton);

        // Use querySelector to update the style of the elements
        

        //Show an alert when a user interacts with the name field
        //fnameInput.onfocus = function()  {
          
          // alert('Please enter your first name');

        
        
       //};
        
        //lnameInput.onfocus = function() {
          //  alert('Please enter your last name');
            
        //};

        fnameInput.onfocus = function() {
            // Show tooltip
            fnameTooltip.style.display = 'block';

            // Hide tooltip after 3 seconds (adjust as needed)
            setTimeout(function() {
                fnameTooltip.style.display = 'none';
            }, 3000);
        };

        fnameInput.onblur = function() {
            // Hide tooltip when focus is lost
            fnameTooltip.style.display = 'none';
        };

        lnameInput.onfocus = function() {
            // Show tooltip
            lnameTooltip.style.display = 'block';

            // Hide tooltip after 3 seconds (adjust as needed)
            setTimeout(function() {
                lnameTooltip.style.display = 'none';
            }, 3000);
        };

        lnameInput.onblur = function() {
            // Hide tooltip when focus is lost
            lnameTooltip.style.display = 'none';
        };
        // Experiment with mouse events
        submitButton.onclick = function() {
            alert('Form submitted!');
        };
        emailInput.onmouseover = function() {
            emailInput.classList.add('highlight');
        };

        emailInput.onmouseout = function() {
            emailInput.classList.remove('highlight');
        };

        //document.body.oncontextmenu = function() {
            //alert('Right-click is disabled on this page');
           // return false; // Prevents the context menu from appearing
       // };

        fnameInput.ondblclick = function() {
          fnameInput.value = ''; // Clears the input field on double-click
          
        };
        lnameInput.ondblclick = function() {
            lnameInput.value = ''; // Clears the input field on double-click
        };

        emailInput.onchange = function() {
            console.log('Email changed to: ' + emailInput.value);
        };

        // Bonus task: Update styles upon user interactions and create a custom function
        

        // Example usage: Toggle form visibility on button double-click
        submitButton.ondblclick = toggleFormDetails;
