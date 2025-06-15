<script>
    import { Heading, Hr } from "flowbite-svelte";
    import { _ } from '$lib/changeLanguage.js';

    let formEl;

    function handleSubmit() {
        setTimeout(() => {
            formEl.reset();
        }, 100); // délai court pour laisser le temps à l'envoi
    }
</script>

<div class="SkillsSection flex flex-col items-center gap-1 mt-20">
    <!-- Titre -->
    <section>
        <Heading tag="h1" customSize="text-4xl font-bold md:text-5xl lg:text-7xl" class="mb-4 text-center">
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">
                {$_("contactMe")}
            </span>
        </Heading>
        <Hr classHr="w-125 h-1 rounded-sm dark:bg-orange bg-orange mb-10 mx-auto" />
    </section>
</div>

<div class="flex flex-col md:flex-row justify-center items-center gap-10 px-4 w-full max-w-6xl mx-auto">
    <!-- Colonne gauche : infos de contact -->
    <div class="flex flex-col gap-6 text-base w-full md:w-1/2 max-w-md bg-white/80 dark:bg-main/50 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700">
        <div class="space-y-2">
            <div class="font-semibold text-gray-800 dark:text-white text-lg md:text-xl">📬 {$_("contactMe")}</div>

            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">Discord :</span><br />
                <a href="https://discordapp.com/users/291499418383810561" target="_blank" class="text-orange-500 hover:underline text-base md:text-lg">
                    Thomkraft
                </a>
            </div>

            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">{$_("Phone")} :</span><br />
                <a href="tel:+33667308641" class="text-orange-500 hover:underline text-base md:text-lg">
                    +33 6 67 30 86 41
                </a>
            </div>

            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">{$_("Email")} :</span><br />
                <a href="mailto:thomas.kng69@gmail.com" class="text-orange-500 hover:underline text-base md:text-lg">
                    thomas.kng69@gmail.com
                </a>
            </div>

            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">Linkedin :</span><br />
                <a href="https://www.linkedin.com/in/thomas-koenig-062121293/" class="text-orange-500 hover:underline text-base md:text-lg">
                    Thomas Koenig
                </a>
            </div>
        </div>
    </div>

    <!-- Formulaire -->
    <form
            action="https://formspree.io/f/xrbkgzdd"
            method="POST"
            bind:this={formEl}
            on:submit={handleSubmit}
            class="flex flex-col gap-6 w-full max-w-lg mx-auto mt-16 mb-16
            bg-white dark:bg-gray-800 dark:text-white text-black
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg px-10 py-8"
    >
        <div class="flex flex-col md:flex-row gap-6">
            <div class="flex flex-col flex-1">
                <label for="prenom" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("FirstName")}</label>
                <input id="prenom" name="prenom" type="text" required />
            </div>
            <div class="flex flex-col flex-1">
                <label for="nom" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("LastName")}</label>
                <input id="nom" name="nom" type="text" required />
            </div>
        </div>

        <div class="flex flex-col">
            <label for="entreprise" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Business")}</label>
            <input id="entreprise" name="entreprise" type="text" />
        </div>

        <div class="flex flex-col">
            <label for="email" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Email")}</label>
            <input id="email" name="email" type="email" required />
        </div>

        <div class="flex flex-col">
            <label for="objet" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Object")}</label>
            <input id="objet" name="objet" type="text" required />
        </div>

        <div class="flex flex-col">
            <label for="message" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Message")}</label>
            <textarea id="message" name="message" rows="6" required></textarea>
        </div>

        <button type="submit" class="self-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg py-2 px-8 transition">
            {$_("Send")}
        </button>
    </form>
</div>

<style>
    :root {
        --light-input-bg: #ffffff;
        --light-text: #000000;
        --dark-input-bg: #1f2937;
        --dark-text: #ffffff;
        --border-color: #d1d5db;
    }

    form input,
    form textarea {
        width: 100%;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        transition: border-color 0.3s ease;
        outline-offset: 2px;
        background-color: var(--light-input-bg);
        color: var(--light-text);
    }

    @media (prefers-color-scheme: dark) {
        form input,
        form textarea {
            background-color: var(--dark-input-bg);
            color: var(--dark-text);
            border-color: #4b5563;
        }
    }

    form input:focus,
    form textarea:focus {
        border-color: #f97316;
        outline: none;
        box-shadow: 0 0 6px #f97316aa;
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    button[type="submit"]:hover,
    button[type="submit"]:focus {
        transform: scale(1.05);
    }
</style>
