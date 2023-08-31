export function getStrapiURL(path = "") {
    return `${
        process.env.STRAPI_URL || "https://api.devopsick.com"
    }${path}`;
}