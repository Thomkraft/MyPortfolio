<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
    import { DarkMode } from 'flowbite-svelte';

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
        <NavLi href="/" active={true} class="text-lg">A Propos</NavLi>
        <NavLi on:click={() => scrollToSection('projects')} class="text-lg">Projets</NavLi>
        <NavLi href="#" class="text-lg">Compétences</NavLi>
        <!-- <NavLi href="/pricing" class="text-lg">Expériences</NavLi> -->
        <NavLi href="#" class="text-lg">Me contacter</NavLi>
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
    </div>
</Navbar>