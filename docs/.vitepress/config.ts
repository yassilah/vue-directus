import { defineConfig } from 'vitepress'
import { description, name, repository } from '../../package.json'
import { join, resolve } from 'path'
import { sync } from 'globby'

const srcDir = resolve(__dirname, '../../src')

export default defineConfig({
    title: name,
    description,
    srcDir,
    base: process.env.NODE_ENV === 'production' ? '/vue-directus' : '/',
    themeConfig: {
        repo: repository.url,
        editLinks: true,
        nextLinks: true,
        prevLinks: true,
        nav: [
            {
                text: 'Home',
                link: '/'
            }
        ],
        sidebar: {
            '/': [
                {
                    text: 'Introduction',
                    link: '/',
                    children: []
                },
                ...buildSideBar('/')
            ]
        }
    }
})
function titleCase(str: string) {
    return str.replace(/(^|\s)\S/g, t => t.toUpperCase())
}

function buildSideBar(base: string) {
    return sync(join(srcDir, base, '*/*.md')).map(file => {
        const text = titleCase(file.split('/').slice(0, -1).pop())
        const link = `${base + text}/`
        const children = buildSideBar(link)

        return {
            text,
            link,
            children
        }
    })
}
