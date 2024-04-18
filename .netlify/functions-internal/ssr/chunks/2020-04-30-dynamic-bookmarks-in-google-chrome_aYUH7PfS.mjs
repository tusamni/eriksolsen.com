async function getMod() {
						return import('./2020-04-30-dynamic-bookmarks-in-google-chrome_C7QfKh11.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
