<script>
    import { GradientButton,Spinner } from 'flowbite-svelte';
    import { AddressBookSolid } from 'flowbite-svelte-icons';
    import { _ } from '$lib/changeLanguage.js';

    let isLoading = false;

    export let onComplete = () => {};

    async function DownloadCV() {
        isLoading = true;

        // Attendre un court instant pour simuler un chargement
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/cv-koenig-thomas.pdf';
            link.download = 'Thomas_Koenig_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            isLoading = false;

            onComplete();
        }, 1500); // Simule un court délai pour l'effet loading
    }
</script>

<div class="Buttons flex flex-col gap-5 justify-center items-center">
    <GradientButton
            on:click={DownloadCV}
            shadow
            color="blue"
            size="xl"
            class="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
    >
        {#if isLoading}
            <Spinner class="me-3" size="4" color="white"/>Loading ...
        {:else }
            <AddressBookSolid class="mr-2" /> {$_("dlCV")}
        {/if}
    </GradientButton>

</div>