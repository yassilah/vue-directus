import { defineConfig } from 'vitepress'
import { description, name, repository } from '../package.json'
import { join, resolve } from 'path'
import { sync } from 'globby'

const srcDir = resolve(__dirname, '../../src')
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
    title: name,
    description,
    srcDir,
    base: isProduction ? '/vue-directus' : '/',
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
        const name = file.split('/').slice(0, -1).pop()
        const text = titleCase(name)
        const link = `${base + name}/`
        const children = buildSideBar(link)

        return {
            text,
            link,
            children
        }
    })
}
