<script>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    export let threshold = 0.01; // L'élément apparaît dès qu'il entre à 1% dans la vue
    export let rootMargin = "0px 0px -30% 0px"; // Détecte plus tôt l'entrée dans la vue

    let isInView = false;
</script>

<div
    use:inview={{ threshold, rootMargin }}
    on:change={({ detail }) => { isInView = detail.inView; }}
>
    {#if isInView}
        <div in:fade={{ duration: 500 }}>
            <slot />
        </div>
    {/if}
</div>
