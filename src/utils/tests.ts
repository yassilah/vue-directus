import { App, createApp } from 'vue'
import install from '../index'

/**
 * Run a test with the plugin installed.
 */
export function useApp<T extends (...args: any[]) => any>(
    composable: T
): [ReturnType<T>, App<Element>]
export function useApp(): App<Element>
export function useApp<T extends (...args: any[]) => any>(composable?: T) {
    let result: ReturnType<T>

    const app = createApp({
        setup() {
            if (composable) {
                result = composable()
            }

            return () => null
        }
    })

    app.use(install)

    app.mount(document.createElement('div'))

    return composable ? [result, app] : app
}
