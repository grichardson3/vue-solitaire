import SettingsData from "./settingsData";

export default {
    async loadSettings(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        context.commit('setSettings', SettingsData);
        context.commit('setFetchTimestamp');
    }
};