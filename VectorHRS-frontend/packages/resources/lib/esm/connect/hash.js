var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
export default function hash(args) {
    if (!args.length)
        return "";
    var key = "arg";
    for (var i = 0; i < args.length; ++i) {
        var _hash = void 0;
        if (args[i] === null ||
            (typeof args[i] !== "object" && typeof args[i] !== "function")) {
            if (typeof args[i] === "string") {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += "@" + _hash;
    }
    return key;
}
export var hid = function (obj) {
    var hc = 0;
    var chars = JSON.stringify(obj);
    var len = chars.length;
    for (var i = 0; i < len; i++) {
        // Bump 7 to larger prime number to increase uniqueness
        hc += chars.charCodeAt(i) * 19;
    }
    return hc;
};
//# sourceMappingURL=hash.js.map