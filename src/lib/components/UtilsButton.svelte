<script>
    import { goto } from '$app/navigation';
    import { Hr, Heading, Span, P, GradientButton,Spinner } from 'flowbite-svelte';
    import { AddressBookSolid, MessageCaptionSolid } from 'flowbite-svelte-icons';

    let isLoading = false;

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
        }, 1500); // Simule un court délai pour l'effet loading
    }
</script>

<div class="Buttons flex flex-col gap-5 justify-center items-center">
    <GradientButton on:click={DownloadCV} shadow color="blue" size="xl"> 
        {#if isLoading}
            <Spinner class="me-3" size="4" color="white"/>Loading ... 
        {:else }
            <AddressBookSolid class="mr-2" /> Télécharger mon CV
        {/if}
    </GradientButton>

    <GradientButton href="/" shadow color="blue" size="xl"><MessageCaptionSolid class="mr-2"/>Me contacter</GradientButton>
</div>