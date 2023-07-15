// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    alias: {
        "~": "/<rootDir>",
        "@": "/<rootDir>",
        "~~": "/<rootDir>",
        "@@": "/<rootDir>",
        "public": "/<rootDir>/public"
    },
    css: [],
    head: {
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "url('https://fonts.googleapis.com/css2?family=Bitter:wght@100;400;900&display=swap')",
            },
        ],
    },
}
