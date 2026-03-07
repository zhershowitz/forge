export default class forgeItemSheet extends ItemSheet {
get template() {
    return `systems/forge/templates/sheets/${this.item.data.type}-sheet.html`;
}
}