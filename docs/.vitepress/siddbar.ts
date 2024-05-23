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
                        { text: '1', link: '/api-examples' },
                        { text: '2', link: '/api-examples' },
                        { text: '3', link: '/api-examples' }
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
