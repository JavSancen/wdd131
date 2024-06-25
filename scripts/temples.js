document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('show');
            hamButton.classList.toggle('open');
            // Ensure the navigation is in column direction when shown
            if (navigation.classList.contains('show')) {
                navigation.style.flexDirection = 'column';
            } else {
                navigation.style.flexDirection = ''; // Reset the flex direction when hiding
            }
        });
    } else {
        console.error('Menu button or navigation element not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get date of last modification of document
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    document.getElementById('date-and-time').textContent = formattedLastModified;
});