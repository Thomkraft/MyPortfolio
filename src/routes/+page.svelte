<script>
import AboutMe from '$lib/components/AboutMe.svelte';
import NavBar from '$lib/components/NavBar.svelte';
import { Hr,Heading,Span } from 'flowbite-svelte';


import { onMount } from 'svelte';
import BurgerMenu from '$lib/components/BurgerMenu.svelte';
	import Project from '$lib/components/Project.svelte';
  
let isMobile = false;
let showBurger = false;


//detect screen size
const checkScreenSize = () => {
isMobile = window.innerWidth < 1024; 
};

// Initial check and update if screen size changes
onMount(() => {
checkScreenSize();
window.addEventListener('resize', checkScreenSize); 

window.addEventListener('scroll', () => {
    showBurger = window.scrollY > 100;
});

return () => {
    window.removeEventListener('resize', checkScreenSize);
};
});
</script>


<NavBar />


<main class="flex flex-col">
    
    <div class="First-screen h-screen bg-opacity-60 mt-40 flex flex-col items-start lg:flex-row">

        {#if !isMobile }
            <div class="image flex justify-center items-center w-1/4 h-2/3">
                <img class="w-3/4 max-h-[80%]" src="/blank-profile.png" alt="Picture_of_me">
            </div>
        {/if}
        

        <div class="flex flex-col w-3/4 justify-start gap-20">
            
            <div class="title flex flex-col items-center text-center h-fit mb-10">
                <Heading tag="h1" class="mb-1" customSize="text-3xl font-bold md:text-4xl lg:text-5xl">
                    <Span>Thomas Koenig</Span>
                </Heading>
                <Heading tag="h2" class="mb-1" customSize="text-2xl font-bold md:text-2xl lg:text-3xl">
                    <Span>Étudiant en BUT informatique</Span>
                </Heading>
            </div>

            <!-- met l'image au milieu en version mobile -->
            {#if isMobile}
                <div class="image flex justify-center items-center w-1/4 h-2/3">
                    <img class="w-3/4 max-h-[80%]" src="/blank-profile.png" alt="Picture_of_me">
                </div>
            {/if}

            <div class="flex justify-center self-start">
                <AboutMe />
            </div>
            
            {#if showBurger}
                <BurgerMenu />
            {/if}
        </div>
    </div>
    
    <div id="projects" class="Project-section flex flex-col h-300 scroll-mt-20">
        <Hr classHr="w-50% h-1 my-4 rounded-sm mb-5 dark:bg-orange bg-orange" />    
        <Project />
    </div>
    

</main>

