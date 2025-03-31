<script>
import AboutMe from '$lib/components/AboutMe.svelte';
import NavBar from '$lib/components/NavBar.svelte';
import { Alert } from 'flowbite-svelte';
import { DarkMode } from 'flowbite-svelte';
import { Hr,Heading,Span,P } from 'flowbite-svelte';

import FadeIn from '$lib/components/FadeIn.svelte';


import { onMount } from 'svelte';
import BurgerMenu from '$lib/components/BurgerMenu.svelte';
  
let isMobile = false;
let showBurger = false;
let scrollOnTopButton = false;


//detect screen size
const checkScreenSize = () => {
isMobile = window.innerWidth < 1024; 
};

// Initial check and update if screen size changes
onMount(() => {
checkScreenSize();
window.addEventListener('resize', checkScreenSize); 

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        showBurger = true;
    } else {
        showBurger = false;
    }
});

return () => {
    window.removeEventListener('resize', checkScreenSize);
};
});
</script>


<NavBar />


<main class="h-screen bg-opacity-60 mt-40 flex flex-col items-start lg:flex-row">
    
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
    

</main>
