//Used with "tailwindCSS.experimental.classRegex": ["tw`([^`]*)"] to provide intellisense
export const tw = (strings: TemplateStringsArray, ...params: unknown[]) => {
	if (params.length > 0) throw new Error('tw tagged template must have no values');
	return strings[0];
};
