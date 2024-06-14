document.addEventListener('DOMContentLoaded', (event) => {
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