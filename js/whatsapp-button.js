// WhatsApp Floating Button
// Automatically adds a floating WhatsApp button to the page

(function () {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Create the WhatsApp button HTML
        const whatsappButton = document.createElement('a');
        whatsappButton.href = 'https://wa.me/919384772250';
        whatsappButton.target = '_blank';
        whatsappButton.rel = 'noopener noreferrer';
        whatsappButton.className = 'whatsapp-float';
        whatsappButton.setAttribute('aria-label', 'Chat on WhatsApp');

        // Add WhatsApp SVG icon
        whatsappButton.innerHTML = `
            <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.832.74 5.488 2.036 7.792L0 32l8.416-2.204A15.933 15.933 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.42 0-4.728-.648-6.704-1.78l-.48-.284-4.972 1.304 1.328-4.852-.312-.496A13.27 13.27 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.332-9.996c-.4-.2-2.368-1.168-2.736-1.3-.368-.136-.636-.2-.904.2-.268.4-1.036 1.3-1.272 1.568-.232.268-.468.3-.868.1-.4-.2-1.688-.62-3.216-1.98-1.188-1.06-1.992-2.368-2.224-2.768-.232-.4-.024-.616.176-.816.18-.18.4-.468.6-.7.2-.236.268-.4.4-.668.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.24-2.98-.328-.78-.66-.672-.904-.684-.232-.012-.5-.016-.768-.016s-.7.1-1.068.5c-.368.4-1.4 1.368-1.4 3.336s1.436 3.868 1.636 4.136c.2.268 2.82 4.304 6.832 6.036.956.412 1.7.66 2.28.844.96.304 1.832.26 2.52.16.768-.116 2.368-.968 2.7-1.904.332-.936.332-1.74.232-1.904-.1-.164-.368-.264-.768-.464z"/>
            </svg>
        `;

        // Append to body
        document.body.appendChild(whatsappButton);

        console.log('WhatsApp button added successfully');
    }
})();
