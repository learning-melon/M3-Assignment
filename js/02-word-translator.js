let selLang //selected language

//OPTION 1-- get English display name of language code
const languageNames = new Intl.DisplayNames(['en'], {
    type: 'language'
});

//language:translated phrase
const langTrans = {"es":"Hola Mundo","de":"Hallo Welt","en":"Hello World","fr":"Bonjour Le Monde"}
selLang = prompt("Please enter a language code")

//set language to en if not in selected group of languages
if(langTrans[selLang] == undefined) selLang = "en"

console.log("Hello World translated in " + languageNames.of(selLang) + " is: "+langTrans[selLang])

//OPTION 2-- use JSON as reference
/*const langTrans = {"es":{"lang":"Spanish","trans":"Hola Mundo"},
                   "de":{"lang":"German","trans":"Hallo Welt"},
                   "en":{"lang":"English","trans":"Hello World"},
                   "fr":{"lang":"French","trans":"Bonjour Le Monde"}
                  }
selLang = prompt("Please enter a language code")
if(langTrans[selLang] == undefined) selLang = "en" 
console.log("Hello World translated in " + langTrans[selLang].lang + " is: "+langTrans[selLang].trans)*/