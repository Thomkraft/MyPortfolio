import { register, init, getLocaleFromNavigator, locale as $locale, _ } from 'svelte-i18n';

register('fr', () => import('./language/fr.json'));
register('en', () => import('./language/en.json'));

init({
    fallbackLocale: 'fr',
    initialLocale: getLocaleFromNavigator(),
});

export { _, $locale as locale };
