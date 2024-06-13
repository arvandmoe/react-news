interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "News",
    github: {
        title: "News",
        url: "https://github.com/arvandmoe/react-news",
    },
    author: {
        name: "Moe Arvand",
        url: "https://github.com/arvandmoe/",
    }
}
