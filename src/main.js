// Dependencies
import { createApp } from 'vue'
import { createStore } from 'vuex';
import "bootstrap";

import "./css/styles.scss"

// UI Components
import App from './App.vue';

// Data Modules
import cardDataModule from "./modules/cards/index.js";
import fieldCardsDataModule from "./modules/fieldCards/index.js";
import flippedCardsDataModule from "./modules/flippedCards/index.js";
import pileCardsDataModule from "./modules/pileCards/index.js";
import selectedCardDataModule from "./modules/selectedCard/index.js";
import settingsDataModule from "./modules/settings/index.js";

const store = createStore({
    modules: {
        cards: cardDataModule,
        fieldCards: fieldCardsDataModule,
        flippedCards: flippedCardsDataModule,
        pileCards: pileCardsDataModule,
        selectedCard: selectedCardDataModule,
        settings: settingsDataModule
    },
    state(){
        return {};
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
