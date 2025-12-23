export function getContactHTML() {
    return `
    <section id="contact-form-section" class="py-24 bg-white text-hacienda-black">
        <div class="container mx-auto px-6 max-w-5xl">
            <div class="flex flex-col md:flex-row gap-16">
                <div class="md:w-1/3 text-center md:text-left">
                    <img src="/assets/soledad-logo.png" alt="Logo de Hacienda La Soledad" class="w-32 mx-auto md:mx-0 mb-6 opacity-80">
                    <h2 class="font-serif text-4xl mb-4 text-gray-900 font-bold">Contacto</h2>
                    <p class="text-gray-700 font-light mb-8">Envíanos un mensaje</p>
                </div>

                <!-- Form Side -->
                <div class="md:w-2/3">
                    <form class="space-y-6" onsubmit="event.preventDefault(); alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="contact-name" class="sr-only">Nombre</label>
                                <input id="contact-name" type="text" placeholder="Nombre" 
                                    class="w-full border-b border-gray-300 py-2 focus:border-hacienda-gold focus:outline-none transition-colors bg-transparent placeholder-gray-400 font-light font-serif">
                            </div>
                            <div>
                                <label for="contact-phone" class="sr-only">Teléfono</label>
                                <input id="contact-phone" type="tel" placeholder="Teléfono" 
                                    class="w-full border-b border-gray-300 py-2 focus:border-hacienda-gold focus:outline-none transition-colors bg-transparent placeholder-gray-400 font-light font-serif">
                            </div>
                        </div>
                        <div>
                            <label for="contact-email" class="sr-only">Email</label>
                            <input id="contact-email" type="email" placeholder="Email" 
                                class="w-full border-b border-gray-300 py-2 focus:border-hacienda-gold focus:outline-none transition-colors bg-transparent placeholder-gray-400 font-light font-serif">
                        </div>
                        <div>
                            <label for="contact-message" class="sr-only">Mensaje</label>
                            <textarea id="contact-message" placeholder="Mensaje" rows="4"
                                class="w-full border-b border-gray-300 py-2 focus:border-hacienda-gold focus:outline-none transition-colors bg-transparent placeholder-gray-400 font-light font-serif"></textarea>
                        </div>
                        
                        <div class="flex items-center gap-2 pt-4">
                            <input type="checkbox" id="privacy" class="text-hacienda-gold focus:ring-hacienda-gold border-gray-300 rounded">
                            <label for="privacy" class="text-xs text-gray-500 uppercase tracking-widest">He leído y acepto la política de privacidad</label>
                        </div>

                        <div class="pt-8">
                            <button type="submit" style="background-color: #000; color: #fff; border-color: #000;"
                                class="px-12 py-3 text-white hover:bg-hacienda-gold hover:border-hacienda-gold hover:text-black transition-all uppercase tracking-[0.2em] text-xs font-bold">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
}

