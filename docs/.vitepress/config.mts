import { defineConfig } from 'vitepress'
import { that } from './glable'
import { navItem } from './nav'
import { Path, getSideBarList } from './siddbar'

export default defineConfig({
  title: that.title,
  description: that.description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: that.logo,
    siteTitle: that.siteTitle,
    search: {
      provider: 'local'
    },
    nav: navItem,
    sidebar: {
      '/components/web/vue/': getSideBarList(Path.vue),
      '/components/web/flutter/': getSideBarList(Path.flutter),
      '/components/web/angular/': getSideBarList(Path.angular),
      '/components/web/react/': getSideBarList(Path.react),
      '/components/serve/nest/': getSideBarList(Path.nest),
    },
    socialLinks: [
      { icon: 'github', link: that.github }
    ]
  }
})
