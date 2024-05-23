import { DefaultTheme } from "vitepress";

export const navItem: DefaultTheme.NavItem[] = [
    {
        text: '前端',
        items: [
            {
                text: 'vue',
                link: '/components/web/vue/index'
            },
            {
                text: 'flutter',
                link: '/components/web/flutter/index'
            },
            {
                text: 'angular',
                link: '/components/web/angular/index'
            },
            {
                text: 'react',
                link: '/components/web/react/index'
            },
            {
                text: 'js&ts',
                link: '/components/web/js&ts/index'
            },
        ]
    },
    {
        text: '后端', items: [
            {
                text: 'nest',
                link: '/components/serve/nest/index'
            },
            {
                text: 'node',
                link: '/components/serve/node/index'
            },
        ]
    }
]