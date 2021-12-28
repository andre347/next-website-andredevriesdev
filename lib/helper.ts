export const fetcher = (url) => fetch(url).then((r) => r.json());

export function msToTime(ms) {
  let seconds: number = +(ms / 1000).toFixed(0);
  let minutes: number = +(ms / (1000 * 60)).toFixed(0);
  let hours: number = +(ms / (1000 * 60 * 60)).toFixed(1);
  let days: number = +(ms / (1000 * 60 * 60 * 24)).toFixed(1);
  if (seconds < 60) return seconds + " Sec";
  else if (minutes < 60) return minutes + " Mins";
  else if (hours < 24) return hours + " Hrs";
  else return days + " Days";
}
