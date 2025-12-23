import '../style.css'
import Alpine from 'alpinejs'
import layout from './js/layout.js'
import { getNavHTML } from './components/nav.js'
import { getFooterHTML } from './components/footer.js'
import { getContactHTML } from './components/contact.js'
// Instagram component removed

// Inject Shared Components
const navContainer = document.getElementById('nav-container');
if (navContainer) navContainer.innerHTML = getNavHTML();



const contactContainer = document.getElementById('contact-container');
if (contactContainer) contactContainer.innerHTML = getContactHTML();

const footerContainer = document.getElementById('footer-container');
if (footerContainer) footerContainer.innerHTML = getFooterHTML();

// Initialize Alpine
window.Alpine = Alpine

Alpine.data('layout', layout)

Alpine.start()
