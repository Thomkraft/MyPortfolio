<script>
	import '../app.css';

	let { children } = $props();

	import { onMount } from 'svelte';

    onMount(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
	
</script>

{@render children()}
