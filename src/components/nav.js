export function getNavHTML() {
    return `
    <nav :class="scrolled ? 'bg-hacienda-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'"
        class="fixed w-full top-0 z-50 transition-all duration-500 ease-in-out">
        <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="z-50 transition-all duration-300 transform hover:scale-105">
                <img src="/assets/soledad-logo.png" alt="Hacienda La Soledad"
                    class="h-12 md:h-16 brightness-0 invert opacity-90">
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-10 items-center">
                <a href="history.html"
                    class="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-hacienda-gold transition-colors duration-300"
                    x-text="t('nav_legend')"></a>
                <a href="spaces.html"
                    class="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-hacienda-gold transition-colors duration-300"
                    x-text="t('nav_spaces')"></a>
                <a href="weddings.html"
                   class="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-hacienda-gold transition-colors duration-300">Bodas</a>
                <a href="corporate.html"
                   class="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-hacienda-gold transition-colors duration-300">Corporate</a>

                <!-- Language Switcher -->
                <div class="flex space-x-3 border-l border-white/20 pl-6 text-xs uppercase tracking-widest text-white/50">
                    <button @click="lang = 'es'"
                        :class="lang === 'es' ? 'text-hacienda-gold' : 'hover:text-white'">ES</button>
                    <button @click="lang = 'en'"
                        :class="lang === 'en' ? 'text-hacienda-gold' : 'hover:text-white'">EN</button>
                    <button @click="lang = 'fr'"
                        :class="lang === 'fr' ? 'text-hacienda-gold' : 'hover:text-white'">FR</button>
                    <button @click="lang = 'nl'"
                        :class="lang === 'nl' ? 'text-hacienda-gold' : 'hover:text-white'">NL</button>
                    <button @click="lang = 'de'"
                        :class="lang === 'de' ? 'text-hacienda-gold' : 'hover:text-white'">DE</button>
                </div>

                <a href="#contact"
                    class="text-xs uppercase tracking-[0.2em] border border-hacienda-gold text-hacienda-gold px-6 py-2 hover:bg-hacienda-gold hover:text-black transition-all duration-300"
                    x-text="t('nav_inquire')">
                </a>
            </div>

            <!-- Mobile Hamburger -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden z-50 focus:outline-none text-white" aria-label="Abrir menú">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div x-show="mobileMenuOpen" x-transition:enter="transition ease-out duration-500"
            x-transition:enter-start="opacity-0 translate-y-full" x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 translate-y-0"
            x-transition:leave-end="opacity-0 translate-y-full"
            class="fixed inset-0 bg-hacienda-black z-40 flex flex-col items-center justify-center space-y-8">

            <!-- Mobile Languages -->
            <div class="flex space-x-6 text-lg uppercase tracking-widest text-white/50 mb-8">
                <button @click="lang = 'es'"
                    :class="lang === 'es' ? 'text-hacienda-gold' : 'hover:text-white'">ES</button>
                <button @click="lang = 'en'"
                    :class="lang === 'en' ? 'text-hacienda-gold' : 'hover:text-white'">EN</button>
                <button @click="lang = 'fr'"
                    :class="lang === 'fr' ? 'text-hacienda-gold' : 'hover:text-white'">FR</button>
                <button @click="lang = 'nl'"
                    :class="lang === 'nl' ? 'text-hacienda-gold' : 'hover:text-white'">NL</button>
                <button @click="lang = 'de'"
                    :class="lang === 'de' ? 'text-hacienda-gold' : 'hover:text-white'">DE</button>
            </div>

            <a href="history.html" @click="mobileMenuOpen = false"
                class="text-3xl font-serif text-white hover:text-hacienda-gold" x-text="t('nav_legend')"></a>
            <a href="spaces.html" @click="mobileMenuOpen = false"
                class="text-3xl font-serif text-white hover:text-hacienda-gold" x-text="t('nav_spaces')"></a>
            <a href="weddings.html" @click="mobileMenuOpen = false"
                class="text-3xl font-serif text-white hover:text-hacienda-gold">Bodas</a>
            <a href="corporate.html" @click="mobileMenuOpen = false"
                class="text-3xl font-serif text-white hover:text-hacienda-gold">Corporate</a>

            <a href="#contact" @click="mobileMenuOpen = false"
                class="text-xl font-serif text-hacienda-gold border border-hacienda-gold px-8 py-3 mt-4"
                x-text="t('nav_inquire')"></a>
        </div>
    </nav>
    `;
}

