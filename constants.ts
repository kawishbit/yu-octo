export const BASE_URL =
	process.env.BASE_URL == "/"
		? ""
		: "/" + (process.env.BASE_URL || "").replace(/(^\/)|(\/$)/g, "");
export const API_URL =
	process.env.API_URL == "/"
		? ""
		: (process.env.API_URL || "").replace(/(^\/)|(\/$)/g, "");
console.log(process.env.AD_USERNAME);
export const AD_USERNAME = process.env.AD_USERNAME || "soe\\hars-";
export const AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID;
export const AZURE_AUTHORITY = process.env.AZURE_AUTHORITY;
export const AZURE_SCOPE = process.env.AZURE_SCOPE;
export const AZURE_REDIRECT_URI = process.env.AZURE_REDIRECT_URI;
export const AZURE_POST_LOGOUT_REDIRECT_URI = process.env.AZURE_POST_LOGOUT_REDIRECT_URI;
export const AZURE_ACCOUNT = "azureAccount";


export const AVATAR_COLORS = [
	"pink-600",
	"red-600",
	"purple-600",
	"indigo-600",
	"green-600",
	"gray-600",
	"blue-600",
	"orange-600",
	"teal-600",
];

export const IMAGE_DIRECTORY = `${BASE_URL}/images`;
export const LANGUAGE_DIRECTORY = `${BASE_URL}/lang`;

export const COMMON_AGGRID_OPTIONS = {
	rowHeight: 48,
	headerHeight: 48,
	floatingFiltersHeight: 28,
	groupHeaderHeight: 48,
	pagination: true,
	paginationPageSize: 100,
	enableCellTextSelection: true,
};

export const PLUGINS_DIRECTORY = `${BASE_URL}/plugins`;

export const AGE_LIMIT = 18;

export const INTERCEDE_APPLICANT_ID_KEY = 'intercedeApplicantId';
export const SINGAPORE_NATIONALITY = "SINGAPORE";
export const UNKNOWN_RACE = "UNKNOWN";

