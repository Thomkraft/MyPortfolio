<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    import { GithubSolid,LinkedinSolid } from 'flowbite-svelte-icons';

    import { DarkMode } from 'flowbite-svelte';

  </script>


  
<Navbar color="form" fluid=true class="sticky top-0 backdrop-blur-md bg-opacity-60 bg-white dark:bg-main">
    
    <NavHamburger/>
    <NavUl class="text-lg"> 
        <NavLi href="/" active={true} class="text-lg">Home</NavLi>
        <NavLi href="/about" class="text-lg">About</NavLi>
        <NavLi href="/docs/components/navbar" class="text-lg">Navbar</NavLi>
        <NavLi href="/pricing" class="text-lg">Pricing</NavLi>
        <NavLi href="/contact" class="text-lg">Contact</NavLi>
    </NavUl>
    

    <div class="Util flex gap-10">
        <NavBrand href="https://github.com/Thomkraft" class="text-2xl font-bold"><GithubSolid class="size-8"/></NavBrand>
        <NavBrand href="https://www.linkedin.com/in/thomas-koenig-062121293/" class="text-2xl font-bold"><LinkedinSolid class="size-8"/></NavBrand>

        <DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
    </div>

    
    
</Navbar>


