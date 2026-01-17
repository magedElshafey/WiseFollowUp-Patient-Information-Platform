export const trackEvent = (
    event: string,
    payload?: Record<string, any>
) => {
    if (process.env.NODE_ENV === "development") {
        console.log("[Analytics]", event, payload);
    }

    // Ready for:
    // window.gtag(...)
    // posthog.capture(...)
};
