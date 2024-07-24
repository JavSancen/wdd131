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

// resume.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('friendForm');
    const welcomeMessage = document.getElementById('welcomeMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const friendName = document.getElementById('friendName').value;
        welcomeMessage.textContent = `Nice to meet you, ${friendName}`;
        welcomeMessage.style.display = 'block';
    });
});