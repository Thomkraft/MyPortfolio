<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
    import { DarkMode } from 'flowbite-svelte';
    import { locale, _ } from "$lib/changeLanguage.js";
    import {get} from "svelte/store";
    import {onMount} from "svelte";

    onMount(() => {
        const browserLang = navigator.language || navigator.languages[0];
        const defaultLang = browserLang.startsWith('fr') ? 'fr' : 'en';
        locale.set(defaultLang);
    })

    function setLanguage() {
        const current = get(locale).slice(0, 2); // ne garder que "fr" ou "en"
        const newLang = current === 'fr' ? 'en' : 'fr';
        locale.set(newLang);
    }

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<Navbar color="transparent"
        fluid={true}
        class="fixed top-0 w-full backdrop-blur-lg bg-white/20 dark:bg-main/20 border-b border-gray-300 dark:border-gray-700 shadow-lg z-50">

    <NavHamburger />

    <NavUl class="text-lg">
        <NavLi on:click={() => scrollToSection('home')} active={true} class="text-lg cursor-pointer">{$_("navAbout")}</NavLi>
        <NavLi on:click={() => scrollToSection('projects')} class="text-lg cursor-pointer">{$_("navProject")}</NavLi>
        <NavLi on:click={() => scrollToSection('skills')} class="text-lg cursor-pointer">{$_("navSkills")}</NavLi>
        <NavLi href="#" class="text-lg cursor-pointer">{$_("navSoftSkills")}</NavLi>
        <NavLi href="#" class="text-lg cursor-pointer">{$_("navContact")}</NavLi>
    </NavUl>


    <div class="Util flex gap-10 items-center">
        <NavBrand
                href="https://github.com/Thomkraft"
                class="text-2xl font-bold transform transition duration-300 hover:scale-110 hover:text-orange-500"
                aria-label="GitHub"
        >
            <GithubSolid class="size-8 transition-colors duration-300 hover:text-orange-500" />
        </NavBrand>

        <NavBrand
                href="https://www.linkedin.com/in/thomas-koenig-062121293/"
                class="text-2xl font-bold transform transition duration-300 hover:scale-110 hover:text-blue-500"
                aria-label="LinkedIn"
        >
            <LinkedinSolid class="size-8 transition-colors duration-300 hover:text-blue-500" />
        </NavBrand>

        <DarkMode
                class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 transform transition duration-300 hover:scale-110 hover:text-orange-500"
                aria-label="Toggle Dark Mode"
        />

        <!--TODO Il faut appuyer 2fois apres un f5 pour que ca fonctionne -->
        <button on:click={setLanguage} class="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-300 shadow transition-transform duration-200 ease-in-out hover:scale-110">
            {#if $locale === 'en'}
                <!-- Drapeau UK -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
                    <clipPath id="t">
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="s">
                        <path d="M30,15 h30 v15 z M0,0 v15 h30 z M0,15 h30 v15 z M30,0 h30 v15 z" />
                    </clipPath>
                    <g clip-path="url(#t)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 l60,30 M60,0 l-60,30" stroke="#fff" stroke-width="6" />
                        <path d="M0,0 l60,30 M60,0 l-60,30" clip-path="url(#s)" stroke="#c8102e" stroke-width="4" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" stroke-width="6" />
                    </g>
                </svg>
            {:else}
                <!-- Drapeau France -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
                    <rect width="1" height="2" x="0" fill="#0055A4" />
                    <rect width="1" height="2" x="1" fill="#fff" />
                    <rect width="1" height="2" x="2" fill="#EF4135" />
                </svg>
            {/if}
        </button>

    </div>
</Navbar>