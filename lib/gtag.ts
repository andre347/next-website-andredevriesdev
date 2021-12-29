// Find the dev environment, and only do GA in Prod
const { NODE_ENV } = process.env;
export const GA_TRACKING_ID =
  NODE_ENV !== "development" ? "UA-90804640-2" : null; // This is your GA Tracking ID

(window as any).MyNamespace;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  (window as any).gTag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  (window as any).gTag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
