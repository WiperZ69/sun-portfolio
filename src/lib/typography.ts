export function fixWidows(text: string): string {
	return text.replace(
		/ (?=(?:в|и|с|к|о|у|а|но|на|не|по|за|от|из|до|не|без|над|для|при|об|со|же|ли|да)\b)/gi,
		'\u00A0'
	)
}
