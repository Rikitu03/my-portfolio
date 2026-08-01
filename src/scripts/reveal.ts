/**
 * Scroll-reveal for anything marked `data-reveal` or `data-reveal-stagger`.
 *
 * - `data-reveal`            → the element itself eases in.
 * - `data-reveal-stagger`    → its direct children ease in one after another.
 *
 * Both are one-shot: once an element has been seen it stays visible, so
 * scrolling back up doesn't re-trigger animations.
 */

const STAGGER_MS = 70;

export function initReveal(): void {
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
	const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]');

	if (reduced.matches) {
		targets.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	/* Pre-compute each child's delay so the browser only has to flip a class. */
	document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
		Array.from(group.children).forEach((child, i) => {
			(child as HTMLElement).style.transitionDelay = `${i * STAGGER_MS}ms`;
		});
	});

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
	);

	targets.forEach((el) => observer.observe(el));
}
