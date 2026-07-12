import { es } from './i18n/es';
import { fr } from './i18n/fr';

function getKeys(obj: any, prefix = ''): string[] {
  let keys: string[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], prefix + key + '.'));
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item: any, index: number) => {
        if (typeof item === 'object' && item !== null) {
           keys = keys.concat(getKeys(item, prefix + key + '.' + index + '.'));
        } else {
           keys.push(prefix + key + '.' + index);
        }
      });
    } else {
      keys.push(prefix + key);
    }
  }
  return keys;
}

const esKeys = getKeys(es);
const frKeys = getKeys(fr);

const missingInFr = esKeys.filter(k => !frKeys.includes(k));
const missingInEs = frKeys.filter(k => !esKeys.includes(k));

console.log('Missing in FR:', missingInFr);
console.log('Missing in ES:', missingInEs);
