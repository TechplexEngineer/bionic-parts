export const links: Record<string, { title?: string, link: string, desc?: string }> = {
    "veloxOn": {
        title: "How to turn the Velox CNC On",
        link: "https://www.youtube.com/watch?v=tCMKBqZ1Vi0",
        desc: "Scan to watch"
    },
    "440On": {
        title: "How to turn the Tormach CNC On",
        link: "https://www.youtube.com/@team4909",
        desc: "Scan to watch"
    },
    "slantOn": {
        title: "How to turn the Tormach Lathe On",
        link: "https://www.youtube.com/watch?v=Blp9nuuO4-A",
        desc: "Scan to watch"
    },
    "prusaOn": {
        title: "How to turn a Prusa Printer On",
        link: "https://www.youtube.com/@team4909",
        desc: "Scan to watch"
    },
    "powderCoat": {
        title: "How to <br>powder coat a part",
        link: "https://www.youtube.com/@team4909",
        desc: "Scan to watch"
    },
}

export const buildShortLinkUrl = (key: string, currentUrl: URL) => {
    const address = new URL(`${currentUrl.origin}/l/${key}`);
    return address.toString();
}