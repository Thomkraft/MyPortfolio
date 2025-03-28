<script>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    export let threshold = 0.1; // Pour déclencher l'animation à 10% visible
    let isInView = false;
</script>

<div
    use:inview={{ threshold }}
    on:change={({ detail }) => { isInView = detail.inView; }}
>
    {#if isInView}
        <div in:fade out:fade>
            <slot />
        </div>
    {/if}
</div>
