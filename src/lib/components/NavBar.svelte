<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    import { GithubSolid,LinkedinSolid } from 'flowbite-svelte-icons';

    import { DarkMode } from 'flowbite-svelte';

  </script>


  
<Navbar color="transparent" 
        fluid={true} 
        class="fixed top-0 w-full backdrop-blur-lg bg-white/20 dark:bg-main/20 border-b border-gray-300 dark:border-gray-700 shadow-lg z-50">
    
    <NavHamburger/>
    <NavUl class="text-lg "> 
        <NavLi href="/" active={true} class="text-lg">A Propos</NavLi>
        <NavLi href="/about" class="text-lg">Projets</NavLi>
        <NavLi href="/docs/components/navbar" class="text-lg">Compétences</NavLi>
        <!-- A mettre quand j'aurais fait le stage -->
        <!-- <NavLi href="/pricing" class="text-lg">Expériences</NavLi>  -->
        <NavLi href="/contact" class="text-lg">Me contacter</NavLi>
    </NavUl>
    

    <div class="Util flex gap-10">
        <NavBrand href="https://github.com/Thomkraft" class="text-2xl font-bold"><GithubSolid class="size-8"/></NavBrand>
        <NavBrand href="https://www.linkedin.com/in/thomas-koenig-062121293/" class="text-2xl font-bold"><LinkedinSolid class="size-8"/></NavBrand>

        <DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
    </div>

    
    
</Navbar>


