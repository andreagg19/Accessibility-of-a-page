document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').textContent = 'Thank you for reaching out, ' + name + '! We will contact you shortly.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').textContent = 'Please fill in all fields.';
    }
    });


    const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
    // Deselect all tabs
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    panels.forEach(panel => panel.hidden = true);

    // Select clicked tab and show the associated panel
    tab.setAttribute('aria-selected', 'true');
    const panelId = tab.getAttribute('aria-controls');
    document.getElementById(panelId).hidden = false;
    });
});
