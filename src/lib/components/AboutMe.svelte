<script>
    import { Hr, Heading, P, GradientButton } from 'flowbite-svelte';
    import { MessageCaptionSolid } from 'flowbite-svelte-icons';
	import UtilsButton from './UtilsButton.svelte';
    import { _ } from '$lib/changeLanguage.js';

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<div class="AboutMe grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-15 justify-center">
    
    <!-- Colonne Gauche : Texte -->
    <div class="AboutMeText">
        <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">{$_("aboutMe.title")}</span>
        </Heading>
        
        <Hr classHr="w-95% h-1 my-4 rounded-sm mb-5 dark:bg-orange bg-orange" />

        <div class="Description w-50% ml-5 mr-5 text-justify break-words">
            <P>
                {@html $_("aboutMe.presentation")}
            </P>
        </div>

    </div>

    <!-- Colonne Droite : Boutons -->
    <div class="Buttons flex flex-col gap-5 justify-center items-center">
        <UtilsButton />

        <GradientButton on:click={() => scrollToSection('contact')} shadow color="blue" size="xl" class="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
            <MessageCaptionSolid
                    class="mr-2"
            />
            {$_("contactMe")}
        </GradientButton>
    </div>

</div>
