const prefix = 'expense_tracker_';
const isObject = (v) => typeof v === 'object' && !Array.isArray(v) && v !== null;
module.exports = {
    set: (key,value) => {
        if (typeof window !== "undefined") {
            return window.localStorage.setItem(`${prefix}${key}`, value);
        }

    },
    get: (key) => {
        if (typeof window !== "undefined") {
            let value =  window.localStorage.getItem(`${prefix}${key}`);

            try {
                return JSON.parse(value);
            }catch (e){
                return value;
            }
        }
    }
}
