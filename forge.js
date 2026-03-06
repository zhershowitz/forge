import {FORGE} from "./modules/forge.js";

Hooks.once("init", async () =>{

    console.log("FORGE | Initializing Forge System");

    // Setting up the Global COnfiguration Object
    CONFIG.FORGE = FORGE;
    CONFIG.INIT = true;

    //Register custom Sheets and unregister the start Sheets
    //Items.unregisterSheet("core", ItemSheet);
    //Actors.unregisterSheet("core", ActorSheet);

    // Load all Partial-Handlebar Files
    preloadHandlebarsTemplates();

    // Register Additional Handlebars Helpers
    registerHandlebarsHelpers();
});

Hooks.once("ready", async () =>{
    
    //Finished Instilation Phase and release lock
    CONFIG.INIT = false;

    //Only execute when run as Gamemaster
    if(!game.user.isGM) return;
});

function preloadHandlebarsTemplates(){

    const templePaths = [

        // "system/forge/templates/partial/template.hbs",

    ];

    return loadTemplates(templatePaths);
};

function registerHandlebarsHelpers() {

    Handlebars.registerHelper("equals", function(v1, v2) { return (v1 === v2)});

    Handlebars.registerHelper("contains", function(element, search) { return element.includes(search)});
     
    Handlebars.registerHelper("concat", function(s1, s2, s3 = "") { return s1 + s2 + s3;});

    Handlebars.registerHelper("isGreater", function(p1, p2) { return (p1 > p2)});

    Handlebars.registerHelper("isEqualORGreater", function(p1, p2) { return (p1 >= p2)});

    Handlebars.registerHelper("ifOR", function(conditional1, conditional2) { return (conditional1 || conditional2)});

    Handlebars.registerHelper("doLog", function(value) { console.log(value)});

    Handlebars.registerHelper("toBoolean", function(string) { return string === "true"});

    Handlebars.registerHelper('for', function(from, to, incr, content) {

        let result = "";

        for(let i = from; i < to; i += incr)
            result += content.fn(i);

        return result;
     });

     Handlebars.registerHelper("times", function(n, content) {

        let result = "";

        for(let i = 0; i < n; i++)
            result += content.fn(i);
        
        return result;
     });

     Handlebars.registerHelper("notEmpty", function(value) {

        if (value ==0 || vaulue == "0") return true;
        if (vaule == null|| vaule =="") return false;
        return true;
        });
    }


    /* --------------------------------------- */
    /*            General Functions            */
    /* --------------------------------------- */