import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Arjit",
	subtitle: "Arjit Praveen's blog",
	lang: "en", 
	themeColor: {
		hue: 255, // 0 - 360
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner2.jpg", // Relative to the /src directory
		position: "center", // top, center, bottom
		// banner image credit
		credit: {
			enable: true, 
			text: "NASA",
			url: "https://unsplash.com/photos/photo-of-outer-space-Q1p7bh3SHj8", 
		},
	},
	toc: {
		enable: true, // toc on right
		depth: 2, // 1 - 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png', // relative to public directory
		//   theme: 'light',
		//   sizes: '32x32',             
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/arjitpraveen", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Arjit Praveen",
	bio: "Cyber Security ethusiast",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/arjitpraveen",
		},
		{
			name: "Linkedin",
			icon: "fa6-brands:linkedin",
			url: "www.linkedin.com/in/arjitpraveen",
		},
		{
			name:"Email",
			icon:"fa6-solid:envelope",
			url:"mailto:arjitpraveen.sec@gmail.com",
		},
		{
			name:"Resume",
			icon:"fa6-solid:file",
			url:"",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
