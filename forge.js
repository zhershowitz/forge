import forgeItemSheet from "./module/sheets/forgeItemSheet.js";

Hooks.once("init", function () {
    console.log("forge | Initializing Forge System");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("forge", forgeItemSheet, { makeDefault: true});
});