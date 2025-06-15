<script>
    import {Heading, Hr} from "flowbite-svelte";
    import { _ } from '$lib/changeLanguage.js';

    let formEl;

    function handleSubmit() {
        setTimeout(() => {
            formEl.reset();
        }, 100); // 100ms, assez court pour que l'envoi ait lieu
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
                <a href="https://www.linkedin.com/in/thomas-koenig-062121293/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav5" class="text-orange-500 hover:underline text-base md:text-lg">
                    Thomas Koenig
                </a>
            </div>
        </div>
    </div>

    <form
            action="https://formspree.io/f/xrbkgzdd"
            method="POST"
            bind:this={formEl}
            on:submit={handleSubmit}
            class="flex flex-col gap-6 w-full max-w-lg mx-auto mt-16 mb-16
         bg-gradient-to-br bg-white dark:bg-gray-800 dark:text-white text-black
         border border-gray-200 dark:border-gray-700
         rounded-xl shadow-lg px-10 py-8"
    >

    <!-- Ligne Prénom + Nom -->
        <div class="flex flex-col md:flex-row gap-6">
            <div class="flex flex-col flex-1">
                <label for="prenom" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("FirstName")}</label>
                <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div class="flex flex-col flex-1">
                <label for="nom" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("LastName")}</label>
                <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
        </div>

        <div class="flex flex-col">
            <label for="entreprise" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Business")}</label>
            <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>

        <div class="flex flex-col">
            <label for="email" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Email")}</label>
            <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>

        <div class="flex flex-col">
            <label for="objet" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Object")}</label>
            <input
                    id="objet"
                    name="objet"
                    type="text"
                    required
                    class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>

        <div class="flex flex-col">
            <label for="message" class="mb-1 font-semibold text-gray-700 dark:text-gray-300">{$_("Message")}</label>
            <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    class="p-2 rounded border border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-y"
            ></textarea>
        </div>

        <button
                type="submit"
                class="self-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg py-2 px-8 transition"
        >
            {$_("Send")}
        </button>
    </form>

</div>


<style>
    #contact-page {
        padding: 2rem 1rem 4rem; /* plus de marge en bas */
        overflow-x: hidden;
        background-color: #121212; /* optionnel : fond très sombre */
        color: #ddd;
        min-height: 100vh;
    }

    h1 {
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        font-size: 3rem; /* réduit taille */
        color: #f97316; /* orange-500 */
        text-align: center;
        font-weight: 700;
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        align-items: start;
        color: #f97316;
    }

    .custom-form {
        background-color: #2d2d2d;
        border-radius: 0.75rem;
        box-shadow: 0 8px 20px rgb(0 0 0 / 0.4);
        padding: 2rem 2.5rem;
        color: #ddd;
    }


    form label {
        display: block;
        margin-bottom: 0.3rem;
        font-weight: 600;
        color: #cbd5e1; /* gris clair */
        font-size: 0.9rem;
    }

    form input,
    form textarea {
        width: 100%;
        padding: 0.5rem 0.75rem;
        border: 1px solid #444;
        border-radius: 0.5rem;
        background-color: #3b3b3b;
        color: #eee;
        font-size: 1rem;
        font-weight: 300;
        transition: border-color 0.3s ease;
        outline-offset: 2px;
    }

    form input:focus,
    form textarea:focus {
        border-color: #f97316;
        outline: none;
        box-shadow: 0 0 6px #f97316aa;
    }

    form textarea {
        resize: vertical;
        min-height: 120px;
    }

    form button[type="submit"] {
        display: block;
        margin: 2rem auto 0;
        background-color: #f97316;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: fit-content;
        min-width: 160px;
        text-align: center;
    }

    form button[type="submit"] {
        transition: transform 0.2s ease-in-out;
    }

    form button[type="submit"]:hover,
    form button[type="submit"]:focus {
        transform: scale(1.05);
    }

    .infos {
        margin-top: 6rem;
        width: 100%;
    }

    .infos button {
        background-color: #2d2d2d;
        color: #ddd;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        border: 1px solid transparent;
        font-weight: 600;
        transition: background-color 0.3s ease, border-color 0.3s ease;
        width: 100%;
    }

    .infos button:hover,
    .infos button:focus {
        background-color: #f97316;
        border-color: #f97316;
        color: #fff;
        outline: none;
    }

    .infos button img {
        width: 32px;
        height: 32px;
    }

    .infos button span {
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.25rem;
            margin-bottom: 1.5rem;
        }

        .container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
        }

        .infos {
            margin-top: 2rem;
        }

        .infos button {
            font-size: 1rem;
            padding: 0.75rem 1rem;
        }

        .infos button img {
            width: 24px;
            height: 24px;
        }
    }

    /* Mode clair */
    input:-webkit-autofill,
    textarea:-webkit-autofill {
        box-shadow: 0 0 0 1000px #f3f4f6 inset !important; /* bg-gray-100 */
        -webkit-text-fill-color: #111827 !important; /* text-gray-900 */
    }

    /* Mode sombre */
    @media (prefers-color-scheme: dark) {
        input:-webkit-autofill,
        textarea:-webkit-autofill {
            box-shadow: 0 0 0 1000px #3B3B3B inset !important; /* bg-gray-700 */
            -webkit-text-fill-color: #E8E6E8 !important; /* text-gray-100 */
        }
    }

    form input,
    form textarea,
    form select {
        background-color: #ffffff;
        color: #000000;
    }

    @media (prefers-color-scheme: dark) {
        form input,
        form textarea,
        form select {
            background-color: #1f2937; /* gray-800 */
            color: #ffffff;
        }
    }



</style>
