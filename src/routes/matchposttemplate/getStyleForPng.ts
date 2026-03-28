// this exists because the syntax highligher is broken in svelte files

export const getStyleForPng = (fontBase64: string) => {
    return `<style>
				@font-face {
					font-family: 'Mashine';
					src: url('${fontBase64}') format('woff');
					font-weight: 600;
					font-style: normal;
				}
			</style>`;
}