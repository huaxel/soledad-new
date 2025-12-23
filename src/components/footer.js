export function getFooterHTML() {
    return `
    <!-- Grand Finale Footer - Dark & Luxurious -->
    <footer class="bg-[#0a0a0a] text-white pt-24 pb-12 relative overflow-hidden">
        <!-- Subtle XVI Background Watermark -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span class="font-serif text-[40rem] font-bold text-white select-none">XVI</span>
        </div>
        
        <div class="container mx-auto px-6 max-w-6xl relative z-10">
            
            <!-- Centered Logo as Seal -->
            <div class="text-center mb-16">
                <img src="/assets/soledad-logo.png" alt="Hacienda La Soledad" class="h-20 mx-auto brightness-0 invert opacity-80 mb-6">
                <p class="text-hacienda-gold uppercase tracking-[0.4em] text-xs">Est. Siglo XVI</p>
            </div>

            <!-- Three Column Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-20">
                
                <!-- Miembro de -->
                <div>
                    <h4 class="font-serif text-lg mb-8 text-hacienda-gold">Miembro de</h4>
                    <div class="flex flex-wrap items-center justify-center gap-6">
                         <a href="https://sevillacb.com/" target="_blank" class="opacity-50 hover:opacity-100 transition-all duration-300">
                            <img src="/assets/logos/sevilla-cb.png" alt="Sevilla Convention Bureau" class="h-10 object-contain brightness-0 invert">
                         </a>
                         <a href="https://www.turismosvq.com/" target="_blank" class="opacity-50 hover:opacity-100 transition-all duration-300">
                            <img src="/assets/logos/aset.png" alt="ASET" class="h-8 object-contain brightness-0 invert">
                         </a>
                         <a href="https://casashistoricas.com/" target="_blank" class="opacity-50 hover:opacity-100 transition-all duration-300">
                            <img src="/assets/logos/casas-historicas.jpg" alt="Casas Históricas de España" class="h-8 object-contain brightness-0 invert">
                         </a>
                    </div>
                </div>

                <!-- Contacto -->
                <div>
                    <h4 class="font-serif text-lg mb-8 text-hacienda-gold">Información y reservas</h4>
                    <div class="space-y-4 text-gray-400 font-light text-sm">
                        <p>
                            <span class="block text-hacienda-gold/60 text-xs uppercase tracking-widest mb-1">Tel. Contacto</span>
                            <a href="tel:+34609746727" class="hover:text-hacienda-gold transition-colors">+34 609 74 67 27</a>
                            <span class="block text-xs text-gray-500 mt-1">Rocío León</span>
                        </p>
                        <p>
                             <span class="block text-hacienda-gold/60 text-xs uppercase tracking-widest mb-1">Email</span>
                             <a href="mailto:info@haciendalasoledad.es" class="hover:text-hacienda-gold transition-colors">info@haciendalasoledad.es</a>
                        </p>
                    </div>
                </div>

                 <!-- Ubicación & Social -->
                <div>
                    <h4 class="font-serif text-lg mb-8 text-hacienda-gold">¿Dónde estamos?</h4>
                     <p class="text-gray-400 font-light text-sm leading-relaxed mb-6">
                        Ctra. A-8026, Km 5.800<br>
                        41500 Alcalá de Guadaíra (Sevilla)
                    </p>
                    
                    <!-- Virtual Tour -->
                    <a href="https://www.visitavirtual360.es/TourVirtuales/HaciendalaSoledad/index.html" target="_blank"
                       class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-hacienda-gold transition-colors mb-6 group">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <span class="group-hover:tracking-wider transition-all">Tour Virtual 360°</span>
                    </a>
                    
                    <!-- Social Icons -->
                    <div class="flex justify-center gap-4">
                        <a href="https://www.facebook.com/haciendalasoledadeventos" target="_blank" class="w-10 h-10 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/haciendalasoledad/" target="_blank" class="w-10 h-10 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/hacienda-la-soledad/" target="_blank" class="w-10 h-10 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center hover:border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45,20.45H16.9V14.88c0-1.33,0-3-1.85-3s-2.13,1.45-2.13,2.94v5.66H9.37V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46v6.28ZM5.34,7.43a2.06,2.06,0,1,1,2.06-2.06A2.06,2.06,0,0,1,5.34,7.43ZM7.12,20.45H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCoOcU_SM0ARrjQYFO_ZDm9w" target="_blank" class="w-10 h-10 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center hover:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300" aria-label="YouTube">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.19a3,3,0,0,0-2.12-2.12C19.55,3.5,12,3.5,12,3.5s-7.55,0-9.38.53A3,3,0,0,0,.5,6.19,31.25,31.25,0,0,0,0,12a31.25,31.25,0,0,0,.5,5.81,3,3,0,0,0,2.12,2.12c1.83.53,9.38.53,9.38.53s7.55,0,9.38-.53a3,3,0,0,0,2.12-2.12A31.25,31.25,0,0,0,24,12,31.25,31.25,0,0,0,23.5,6.19ZM9.6,15.6V8.4L15.84,12Z"/></svg>
                        </a>
                    </div>
                </div>

            </div>

             <!-- Bottom Bar -->
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light uppercase tracking-widest">
                <div class="flex gap-6 mb-4 md:mb-0">
                    <a href="privacy.html" class="hover:text-hacienda-gold transition-colors">Política Privacidad</a>
                    <a href="legal.html" class="hover:text-hacienda-gold transition-colors">Aviso Legal</a>
                    <a href="cookies.html" class="hover:text-hacienda-gold transition-colors">Cookies</a>
                </div>
                <span class="text-hacienda-gold/50">COPYRIGHT © 2025</span>
            </div>
        </div>
    </footer>
    `;
}

