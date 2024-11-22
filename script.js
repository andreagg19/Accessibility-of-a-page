document.querySelectorAll('#tabs [role="tab"]').forEach(tab => {
    tab.addEventListener('click', () => {
        // Deselect all tabs
        document.querySelectorAll('#tabs [role="tab"]').forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });

        // Hide all panels
        document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
            panel.hidden = true;
        });

        // Select clicked tab
        tab.setAttribute('aria-selected', 'true');

        // Show associated panel
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        panel.hidden = false;
    });
});


document.querySelector('.submit-button').addEventListener('click', () => {
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
    // Logic for form submission or associated action
    console.log('Form submitted!');
//});

document.querySelector('.submit-button').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent scrolling with Space
        event.target.click(); // Trigger the click event
    }
});
