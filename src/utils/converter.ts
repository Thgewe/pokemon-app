export const convertWeightToKG = (weight: number): string =>
	(Math.round(weight) / 10).toString();
export const convertHeightToSM = (height: number): string =>
	(Math.round(height * 100) / 10).toString();
