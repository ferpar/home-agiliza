import stringsES from '../es.json'

const strings = {
    es: stringsES
}

export function getString(id, lang = 'es'){
    return strings[lang][id]
}