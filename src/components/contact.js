export function getContactHTML() {
    return `
    <section id="contact-form-section" class="py-24 bg-white text-hacienda-black">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="flex flex-col lg:flex-row gap-16">
                <!-- Left Side: Info -->
                <div class="lg:w-1/3 text-center lg:text-left">
                    <img src="/assets/soledad-logo.png" alt="Logo de Hacienda La Soledad" class="w-32 mx-auto lg:mx-0 mb-6 opacity-80">
                    <h2 class="font-serif text-4xl mb-4 text-gray-900 font-bold">Planifica tu Evento</h2>
                    <p class="text-gray-700 font-light mb-8">Cuéntanos sobre tu celebración y te responderemos en menos de 24 horas.</p>
                    
                    <!-- Quick Contact Options -->
                    <div class="space-y-4 text-left">
                        <a href="tel:+34955688000" class="flex items-center gap-3 text-gray-600 hover:text-hacienda-gold transition-colors group">
                            <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-hacienda-gold transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span class="font-light">+34 955 688 000</span>
                        </a>
                        <a href="https://wa.me/34600000000" target="_blank" class="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors group">
                            <div class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-50 transition-colors">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                            </div>
                            <span class="font-light">WhatsApp Directo</span>
                        </a>
                    </div>
                </div>

                <!-- Right Side: Enhanced Form -->
                <div class="lg:w-2/3">
                    <form class="space-y-8" onsubmit="event.preventDefault(); alert('¡Gracias! Hemos recibido tu consulta. Te contactaremos en menos de 24 horas.');">
                        
                        <!-- Event Type Selection -->
                        <div>
                            <label class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Tipo de Evento</label>
                            <div class="grid grid-cols-3 gap-3">
                                <label class="cursor-pointer">
                                    <input type="radio" name="event-type" value="wedding" class="hidden peer">
                                    <div class="border border-gray-200 rounded-lg p-4 text-center peer-checked:border-hacienda-gold peer-checked:bg-hacienda-gold/5 hover:border-gray-400 transition-all">
                                        <svg class="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        <span class="text-sm font-serif">Boda</span>
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="event-type" value="corporate" class="hidden peer">
                                    <div class="border border-gray-200 rounded-lg p-4 text-center peer-checked:border-hacienda-gold peer-checked:bg-hacienda-gold/5 hover:border-gray-400 transition-all">
                                        <svg class="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        <span class="text-sm font-serif">Corporativo</span>
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="event-type" value="private" class="hidden peer">
                                    <div class="border border-gray-200 rounded-lg p-4 text-center peer-checked:border-hacienda-gold peer-checked:bg-hacienda-gold/5 hover:border-gray-400 transition-all">
                                        <svg class="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                        <span class="text-sm font-serif">Celebración</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Date and Guests Row -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="event-date" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Fecha Deseada</label>
                                <input id="event-date" type="date" 
                                    class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light"
                                    min="2025-01-01">
                            </div>
                            <div>
                                <label for="guest-count" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Número de Invitados</label>
                                <select id="guest-count" 
                                    class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light appearance-none cursor-pointer">
                                    <option value="">Seleccionar...</option>
                                    <option value="50-100">50 - 100 invitados</option>
                                    <option value="100-200">100 - 200 invitados</option>
                                    <option value="200-300">200 - 300 invitados</option>
                                    <option value="300-500">300 - 500 invitados</option>
                                    <option value="500+">Más de 500 invitados</option>
                                </select>
                            </div>
                        </div>

                        <!-- Space Preference -->
                        <div>
                            <label for="space-preference" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Espacio Preferido</label>
                            <select id="space-preference" 
                                class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light appearance-none cursor-pointer">
                                <option value="">Sin preferencia / Asesoradme</option>
                                <option value="almazara">La Almazara (Gran Salón)</option>
                                <option value="jardines">Los Jardines</option>
                                <option value="patio-fuente">Patio de la Fuente</option>
                                <option value="patio-torre">Patio de la Torre</option>
                                <option value="lagar">El Lagar</option>
                                <option value="atarazanas">Las Atarazanas</option>
                                <option value="multiple">Varios espacios combinados</option>
                            </select>
                        </div>

                        <!-- Contact Info Row -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="contact-name" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Nombre Completo</label>
                                <input id="contact-name" type="text" placeholder="Tu nombre" 
                                    class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light text-gray-900 placeholder:text-gray-500">
                            </div>
                            <div>
                                <label for="contact-email" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Email</label>
                                <input id="contact-email" type="email" placeholder="tu@email.com" 
                                    class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light text-gray-900 placeholder:text-gray-500">
                            </div>
                        </div>

                        <div>
                            <label for="contact-phone" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Teléfono</label>
                            <input id="contact-phone" type="tel" placeholder="+34 600 000 000" 
                                class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light text-gray-900 placeholder:text-gray-500">
                        </div>

                        <!-- Message -->
                        <div>
                            <label for="contact-message" class="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Cuéntanos más sobre tu evento</label>
                            <textarea id="contact-message" placeholder="Detalles adicionales, necesidades especiales, visión de tu celebración..." rows="4"
                                class="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-hacienda-gold focus:outline-none focus:ring-2 focus:ring-hacienda-gold/20 transition-all bg-white font-light resize-none"></textarea>
                        </div>
                        
                        <!-- Privacy and Submit -->
                        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div class="flex items-center gap-2">
                                <input type="checkbox" id="privacy" class="w-4 h-4 text-hacienda-gold focus:ring-hacienda-gold border-gray-300 rounded">
                                <label for="privacy" class="text-xs text-gray-500">He leído y acepto la <a href="privacy.html" class="underline hover:text-hacienda-gold">política de privacidad</a></label>
                            </div>
                            <button type="submit" 
                                class="px-10 py-4 bg-black text-white hover:bg-hacienda-gold hover:text-black transition-all uppercase tracking-[0.2em] text-xs font-bold rounded-lg shadow-lg hover:shadow-xl">
                                Solicitar Información
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
}

