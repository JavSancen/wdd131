document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const input = document.querySelector('#favchap');
    const list = document.querySelector('ul'); // Assuming the list is a <ul> element

    button.addEventListener('click', function() {
        if (input.value.trim() !== '') { // Check if input is not empty
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            list.append(li);

            // Add event listener for delete button inside the click event
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus();
            });

            input.value = ''; // Clear input value
            input.focus(); // Refocus on input
        } else {
            alert('Please enter a chapter'); // Alert if input is empty
        }
    });
});