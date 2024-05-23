export enum Path {
    vue = 'vue',
    flutter = 'flutter',
    angular = 'angular',
    react = 'react',
    nest = 'nest',
};

export const getSideBarList = (pathname: Path) => {
    switch (pathname) {
        case Path.vue:
            return [
                {
                    text: 'bugs',
                    collapsed: false,
                    items: [
                        { text: 'videojs', link: '/components/web/vue/videojs' },
                        { text: 'echart', link: '/components/web/vue/echart' },
                        { text: 'viewer', link: '/components/web/vue/viewer' }
                    ]
                },
            ]
        case Path.flutter:

            break;
        case Path.angular:

            break;
        case Path.react:

            break;
        case Path.nest:

            break;
    }
    return [];
}
