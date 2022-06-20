// Imports
import { createApp } from 'Vue'
import { createPinia } from 'pinia'

//Vanilla Javascript
import './nav/mobileToggle.js';
import './nav/stickyHeader.js';

// Stores
//import { useCartStore } from './store/cart';

// Components
//import searchComponent from './components/search/searchComponent.js'


const vueApps = [
    /* Official list 
    {
        component: searchComponent,
        selector: '#searchComponent',
        reload: false,
    }*/
]

const createVueApp = (component) => {

    //Initialize Vue app instance
    const app = createApp(component);

    /**
     * Pinia config
     * extended with additional features:
     * - localStorage persist
     * - Multiple apps store sync
     */

    const pinia = createPinia();

    pinia.use((context) => {
        const storeId = context.store.$id;

        if(storeId != 'productModal'){
            // get localStorage store data
            let storage = JSON.parse(localStorage.getItem(storeId));

            // Update store with localStorage data or create localStorage item in case it doesn't exist.
            if (storage) {
                context.store.$patch(storage);
            } else {
                localStorage.setItem(storeId, JSON.stringify(context.store.$state));
            }
        }else{
            // only set localStorage but do not persist
            localStorage.setItem(storeId, JSON.stringify(context.store.$state));
        }

        // Subscribe to store changes
        context.store.$subscribe((mutation, state) => {
            let dispatchEvent = false;

            // Get the most recent localStorage data
            let storage = JSON.parse(localStorage.getItem(storeId));

            // Check if store data is different from localStorage
            Object.keys(state).forEach(key => {

                if (JSON.stringify(state[key]) != JSON.stringify(storage[key])) {
                    // Update localStorage with the new store data only if it's different from localStorage
                    window.localStorage.setItem(storeId, JSON.stringify(state));
                    dispatchEvent = true;
                }

            });

            // Dispatch event if store has changed to transfer information between other App instances.
            if (dispatchEvent) window.dispatchEvent(new Event(`${storeId}-updated`));
        });

    });

    //Initialize Pinia Store
    app.use(pinia);

    // Declare all stores
    const vueStores = [
        {
            id: 'cart',
            init: useCartStore(),
        },
    ]

    // Custom listener for store sync between other App instances
    if (vueStores) vueStores.forEach((store) => {

        // Listen for store changes
        window.addEventListener(`${store.id}-updated`, (event) => {
            // get localStorage store data
            const storage = JSON.parse(localStorage.getItem(store.id));

            //Update App instance store with localStorage data
            if (storage) store.init.$patch(storage);

        });

    }
    );

    return app
}

let instancedApps = [];

if (vueApps) vueApps.forEach((app) => {

    document.querySelectorAll(app.selector).forEach((element) => {

        let vueApp = createVueApp(app.component);
        
        vueApp.mount(element);

        instancedApps.push({app: vueApp, reload: app.reload});

        vueApp.config.errorHandler = (err) => {
            console.log(err);
        }
    });

});

function reload(){
    // Reload all Vue apps
    console.log('Reloading apps...');

    instancedApps.forEach((app) => {
        if (app.reload) app.app.unmount();
    });

    instancedApps = [];

    if (vueApps) vueApps.forEach((app) => {
        if(app.reload) {
            document.querySelectorAll(app.selector).forEach((element) => {

                let vueApp = createVueApp(app.component);
                vueApp.mount('#' + element.id);

                instancedApps.push({ app: vueApp, reload: app.reload });

                vueApp.config.errorHandler = (err) => {
                    console.log(err);
                }
            });
        }
    });
    
}

document.addEventListener('vue-restart', () => {
    reload();
});


