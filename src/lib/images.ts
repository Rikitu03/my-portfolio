/**
 * One place that knows how the `/images/...` strings in content.ts map onto
 * the real files under src/assets. Keeping content.ts on plain strings means
 * the data stays portable; this module is what hands Astro the ImageMetadata
 * it needs to actually optimize them.
 */

const assets = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/images/**/*.{png,jpg,jpeg,webp,avif,gif}',
	{ eager: true }
);

/** Returns undefined when the file isn't there yet, so callers can fall back. */
export function resolveImage(src: string): ImageMetadata | undefined {
	return assets[`/src/assets/images/${src.replace(/^\/images\//, '')}`]?.default;
}

/** Resolves a list, dropping any path that has no file behind it. */
export function resolveImages(sources: string[]): ImageMetadata[] {
	return sources.map(resolveImage).filter((img): img is ImageMetadata => Boolean(img));
}
