import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import AdminLayout from './layout/admin-layout'
import ClientLayout from './layout/client-layout'

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                {console.log('rrrrrr', props)}
                {true ? <App {...props} /> : true ? <AdminLayout><App {...props} /></AdminLayout> : <ClientLayout><App {...props} /></ClientLayout>}
            </>
        )
    },
})
