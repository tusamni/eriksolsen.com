export function timeAgo(input) {
	const date = input instanceof Date ? input : new Date(input);
	const formatter = new Intl.RelativeTimeFormat("en");
	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	};
	const secondsElapsed = (date.getTime() - Date.now()) / 1000;
	for (let key in ranges) {
		if (ranges[key] < Math.abs(secondsElapsed)) {
			const delta = secondsElapsed / ranges[key];
			return formatter.format(Math.round(delta), key);
		}
	}
}

export function formatDate(date, format = { day: "numeric", month: "long", year: "numeric" }) {
	const jsDate = new Date(date);

	return Intl.DateTimeFormat("en-US", {
		day: format.day,
		month: format.month,
		year: format.year,
		timeZone: "UTC",
	}).format(jsDate);
}

export function cosmicDate() {
	let date = new Date();

	const dateOffset = date.getTimezoneOffset();
	date = new Date(date.getTime() - dateOffset * 60 * 1000);

	return date.toISOString().split("T")[0];
}