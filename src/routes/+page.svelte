<script>
	import AboutMe from '$lib/components/AboutMe.svelte';
import NavBar from '$lib/components/NavBar.svelte';
import { Alert } from 'flowbite-svelte';
import { DarkMode } from 'flowbite-svelte';
import { Hr,Heading,Span,P } from 'flowbite-svelte';

import FadeIn from '$lib/components/FadeIn.svelte';

  </script>


<NavBar />


<main class="min-h-screen h-[200vh] bg-opacity-60 mt-30">


    <div class="title flex flex-col items-center text-center justify-center mt-20 mb-20">
        <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold  md:text-4xl lg:text-5xl">
            <Span >Thomas Koenig</Span>
        </Heading>

        <Heading tag="h2" class="mb-4" customSize="text-2xl font-bold  md:text-2xl lg:text-3xl ">
            <Span>Étudiant en BUT informatique</Span>
        </Heading>

    </div>

    <AboutMe />


</main>

  