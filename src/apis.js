const getBaseUrl = () => {
    return import.meta.env.VITE_APP_BASEURL || "http://52.66.117.232/api/v1";
}

export const baseurl = getBaseUrl();

export const apis = {
    SERVICE_PAGES: `${baseurl}/service/1`,
};
