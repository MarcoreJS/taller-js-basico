class Useful {
    static objectToJSON(obj) {
        let result = JSON.stringify(obj);
        result = JSON.parse(result);
        return result;
    }

    static eval(x, fn) {
        if (x instanceof Array) {
            let r = [];
            for (let num of x) {
                r.push(fn(num));
            }
            return r;
        } else {
            return fn(x);
        }
    }

    static getFormattedDate() {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return day + "/" + month + "/" + year;
    }

    static getIva(x, iva){
        return (x * iva) + x;
    }

}