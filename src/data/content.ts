/**
 * All copy on the landing page, transcribed from the Figma "Desktop" frame.
 * Keeping it here means the components stay presentational and the text is
 * editable in one place.
 */

export interface NavItem {
	label: string;
	href: string;
	index: string;
}

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#home', index: '01' },
	{ label: 'About Me', href: '#about', index: '02' },
	{ label: 'Skills & Technologies', href: '#skills', index: '03' },
	{ label: 'Projects', href: '#projects', index: '04' },
	{ label: 'Education & Experience', href: '#education', index: '05' },
	{ label: 'Contact', href: '#contact', index: '06' },
];

export const hero = {
	/* Rendered one line at a time by the typewriter, matching the five
	   `hero_text` variants in Figma. */
	lines: [
		{ text: 'Hi! I am', size: 'md' as const },
		{ text: 'JASON,', size: 'lg' as const },
		{ text: 'A Full Stack Developer.', size: 'sm' as const },
	],
	tagline: 'Bridging the gap between beautiful aesthetics and robust functionality.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Rikitu03/', icon: 'github' as const },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jason-jay-recto/', icon: 'linkedin' as const },
	],
	actions: [
		{ label: 'Hire me', href: '#contact', variant: 'solid' as const, arrow: 'up-right' as const },
		{ label: 'Explore', href: '#about', variant: 'ghost' as const, arrow: 'down-right' as const },
	],
};

export const about = {
	heading: 'About Me',
	body: "I'm an aspiring full-stack dev and software engineer building web apps that solve real problems. I excel at a lot of tasks, especially designing and building landing pages, and backend development. I'm open to any gigs that fit my skills.",
	/* Drop the photos into /public/images/about/ and they replace the
	   placeholders on the next build. The carousel expands whichever shot is
	   active and collapses the rest, so every image is cropped to fill — use
	   photos whose subject sits near the centre. */
	gallery: [
		{ src: '/images/about_me/moment-1.jpg', alt: 'Team photo at a university event' },
		{ src: '/images/about_me/moment-2.jpg', alt: 'With classmates' },
		{ src: '/images/about_me/moment-3.jpg', alt: 'Client presentation and interview' },
		{ src: '/images/about_me/moment-4.jpg', alt: 'Presenting the thesis system' },
		{ src: '/images/about_me/moment-5.jpg', alt: 'Thesis Defense', position: 'top' as const },
	],
};

export interface SkillGroup {
	/* Short label for the left-hand rail */
	rail: string;
	/* Full label above the pill cluster */
	title: string;
	items: string[];
}

export const skills = {
	heading: 'Skills & Technologies',
	body: 'Most of this I picked up building real things — class projects, a full-scale thesis system, and personal builds. Laravel, PHP, and Python do the heavy lifting on the backend; Astro, Tailwind, and Blade cover the frontend; the computer-vision tools came out of the thesis. The list is still growing.',
	groups: <SkillGroup[]>[
		{
			rail: 'Frontend',
			title: 'FRONTEND',
			items: ['JavaScript', 'Tailwind CSS', 'Vite', 'Blade', 'HTML & CSS', 'Astro'],
		},
		{
			rail: 'Backend',
			title: 'BACKEND',
			items: ['Laravel', 'PHP', 'Python', 'JavaScript', 'FastAPI', 'Flask', 'MySQL', 'REST'],
		},
		{
			rail: 'Cloud Hosting',
			title: 'Cloud Hosting, DevOPS & Networking',
			items: ['Vercel', 'Render', 'Railway', 'Sevalla', 'Docker', 'ngrok tunneling'],
		},
		{
			rail: 'Databases',
			title: 'Databases & Backend-as-a-Service',
			items: ['TiDB', 'Supabase'],
		},
		{
			rail: 'Version Control & Collaboration',
			title: 'Version Control & Collaboration',
			items: ['GitHub', 'GitLab'],
		},
		{
			rail: 'Machine Learning',
			title: 'Machine Learning, Computer Vision & Data Science',
			items: ['PyTorch', 'TensorFlow', 'OpenCV', 'Ultralytics', 'Roboflow', 'Doccano', 'Google Colab'],
		},
		{
			rail: 'AI Models & Developer Assistants',
			title: 'AI Models & Developer Assistants',
			items: ['Claude', 'Google Gemini', 'Deepseek', 'Claude Code', 'GitHub Copilot', 'Codex', 'Google AI Labs'],
		},
	],
};

export interface Project {
	index: string;
	name: string;
	kind: string;
	body: string;
	/* Alternating surfaces, straight from the Figma section fills */
	theme: 'dark' | 'light';
	cover: string;
	/* Every screenshot, in order. The strip renders the first three and the
	   badge counts the rest, so the two can never disagree. The lightbox
	   shows the cover followed by all of these. */
	gallery: string[];
	comingSoon?: boolean;
	/* Live URL behind the "Visit site" link in the card header. Omit it and
	   the link is not rendered — which is what we want for unshipped work. */
	href?: string;
}

export const projects: Project[] = [
	{
		index: '01',
		name: 'Bakerdan',
		kind: 'E-commerce Platform',
		theme: 'dark',
		body: 'Bakerdan is replacing its manual, error-prone system of Google Forms and Excel spreadsheets with a unified e-commerce platform designed to eliminate overbooking and administrative delays. The new solution features a live catalogue with automatic inventory deductions upon reservation, direct messaging paired with an LLM chatbot to handle customer inquiries and escalations, and a centralized admin dashboard that unifies product management, stock alerts, and messaging in one place.',
		cover: '/images/bakerdan_/cover.png',
		gallery: Array.from({ length: 14 }, (_, i) => `/images/bakerdan_/bakerdan${i + 1}.png`),
		href: 'https://bakerdan-riktu-s-projects.vercel.app/',
	},
	{
		index: '02',
		name: 'OPTIQ',
		kind: 'Multi-Store Gaming Marketplace',
		theme: 'light',
		body: 'OPTIQ gathers a scattered set of game shops into one place to browse. Search once and see gear, titles and accessories from every store side by side, with what each one is charging and whether it is actually in stock. Instead of opening a dozen tabs and checking each site yourself, you compare everything in a single list and click through to whichever shop has the better deal.',
		cover: '/images/optiq/cover.png',
		/* optiq2.png is absent from the export, so the run skips 2. */
		gallery: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => `/images/optiq/optiq${n}.png`),
		href: 'https://optiq-app.dev/',
	},
	{
		index: '03',
		name: 'BayanLink',
		kind: 'Disaster Resource Mapper',
		theme: 'dark',
		body: "BayanLink is a live map for Pasig City that keeps working when the internet doesn't. During a storm or blackout, residents can post what they need or what they can offer — water, food, power, signal, medical help, or rescue — and see it show up across all 30 barangays. The map holds on to anything you report while you're offline and sends it the moment you reconnect. With no connection at all, a plain text message still gets your report through.",
		cover: '/images/bayanlink/cover.png',
		gallery: Array.from({ length: 6 }, (_, i) => `/images/bayanlink/bayanlink${i + 1}.png`),
	},
	{
		index: '04',
		name: 'ADVS',
		kind: 'Automated Document Validation System',
		theme: 'light',
		body: "ADVS checks the paperwork suppliers hand over before a company agrees to work with them. Upload a permit or a registration and it reads the document, sorts it by type, and looks for signs it has been faked — a copied signature, an altered stamp, details that don't line up. Each one comes back with a risk score and a short report on a single dashboard, so the person approving vendors can go straight to what looks wrong instead of reading every page by hand.",
		/* No dedicated cover was exported; advs1 is the landing hero, so the
		   gallery picks up from advs2 to avoid showing it twice. */
		cover: '/images/advs/advs1.png',
		gallery: [2, 3, 4, 5].map((n) => `/images/advs/advs${n}.png`),
	},
	{
		index: '05',
		name: 'PLP: Entrance & Exit Kiosk',
		kind: 'Kiosk',
		theme: 'dark',
		body: 'A scan-in, scan-out system for Pamantasan ng Lungsod ng Pasig. Students, staff and visitors scan a QR code at the gate, and attendance for flag ceremonies and seminars is taken the same way — no more sign-in sheets. Admins get one view of who is on campus, when they arrived and how long they stayed, plus alerts for anyone who came in without scanning or stayed past closing, and a text to department heads when something needs a look.',
		cover: '/images/kiosk/cover.png',
		gallery: Array.from({ length: 9 }, (_, i) => `/images/kiosk/kiosk${i + 1}.png`),
		comingSoon: true,
	},
];

/* The numbered index that sits opposite the "Projects" heading. */
export const projectsToc = {
	heading: 'Projects',
	sub: 'Solo & Colaboration',
	items: [
		{ index: '01', label: 'Bakerdan', muted: '' },
		{ index: '02', label: 'OPTIQ', muted: '' },
		{ index: '03', label: 'BayanLink', muted: '' },
		{ index: '04', label: 'Automated Document Validation System', muted: '' },
		{ index: '05', label: 'PLP: Entrance & Exit Kiosk', muted: '(local only)' },
		{ index: '06', label: 'Coming Soon', muted: '', dim: true },
	],
};

export const education = {
	heading: 'Education & Experience',
	body: "I'm a 4th year Computer Science/IT student at Pamantasan ng Lungsod ng Pasig (PLP) in Pasig City, Philippines. Throughout my college journey, I've built both solo and collaborative projects — from class requirements to a full-scale thesis system — working across the stack as both a frontend and backend developer.",
	bodySecondary:
		'Coursework that shaped my full-stack foundation, applied directly in real projects like our thesis system and my personal builds.',
	label: 'Advanced Classes',
	courses: [
		{ title: 'Software Engineering', units: '6 units earned', year: '2nd year - 3rd year' },
		{ title: 'Web Programming Development', units: '3 units earned', year: '2nd year' },
		{ title: 'Application Development', units: '3 units earned', year: '2nd year' },
		{ title: 'Open Source Programming with Framework', units: '3 units earned', year: '3rd year' },
	],
};

export const contact = {
	heading: 'Contact Me',
	intro: "Let's talk about your project and build something great! Send me a message through email or Facebook messenger.",
	email: {
		heading: 'Email',
		/* Submit builds a Gmail web-compose deep link addressed here — no
		   backend needed, and it opens the visitor's own Gmail tab instead of
		   relying on whatever the OS has registered as the default mail app. */
		to: 'jasonjayrecto@gmail.com',
	},
	/* Each renders as its own "Visit" card next to the email form. */
	socials: [
		{
			heading: 'Facebook',
			body: 'Send me a message on messenger',
			/* TODO: replace with the real Facebook profile/page URL. */
			href: 'https://www.facebook.com/JRiktu.03/',
		},
		{ heading: 'GitHub', body: 'Browse my repositories', href: 'https://github.com/Rikitu03/' },
		{ heading: 'LinkedIn', body: "Let's connect professionally", href: 'https://www.linkedin.com/in/jason-jay-recto/' },
	],
};

export const footer = {
	wordmark: 'Recto',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Rikitu03/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jason-jay-recto/' },
		{ label: 'Facebook', href: 'https://facebook.com/' },
	],
	legal: 'This website is created as my personal portfolio.',
	rights: 'All Rights Reserved',
};
