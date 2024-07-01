import { __awaiter, __generator } from "tslib";
import axios from "axios";
import hash from "../../../user-interfaces/src/context/hash";
export var instance = axios.create();
var DataLayer = /** @class */ (function () {
    function DataLayer(debugMode) {
        if (debugMode === void 0) { debugMode = false; }
        this.TIMESTAMP_CACHE = new Map();
        this.PROMISE_CACHE = new Map();
        this.DEDUP_TIME = 5000;
        this.debugMode = debugMode;
    }
    DataLayer.prototype.errorHandling = function (e) {
        if (this.debugMode) {
            console.log(e);
        }
    };
    /**
     * Makes sure every same request only happens once in a certain timespan.
     *  @param key - a unique key for each different request.
     */
    DataLayer.prototype.dedupRequest = function (key, reqFn, force) {
        if (force === void 0) { force = false; }
        var req;
        // DEDUP
        var lastRequest = this.TIMESTAMP_CACHE.get(key);
        var lastPromise = this.PROMISE_CACHE.get(key);
        var now = Date.now();
        if (!force &&
            lastPromise &&
            lastRequest &&
            now - lastRequest < this.DEDUP_TIME) {
            req = lastPromise;
        }
        else {
            req = reqFn().catch(function (error) {
                throw error;
            });
            this.TIMESTAMP_CACHE.set(key, Date.now());
            this.PROMISE_CACHE.set(key, req);
            // Can clear after 2 seconds
        }
        return req;
    };
    DataLayer.prototype.requestApi = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dedupRequest(hash([options.endpoint, options.headers]), function () {
                                return instance({
                                    method: options.method,
                                    url: options.endpoint,
                                    params: options.data,
                                    headers: options.headers,
                                });
                            }, options.forceNoDedup)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        // Throw fieldErrors on POST and PUT?
                        this.errorHandling(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* TODO */
    DataLayer.prototype.getFromCatch = function (key, id) {
        if (!key)
            return;
    };
    return DataLayer;
}());
export var dataLayerObj = new DataLayer(true);
//# sourceMappingURL=index.js.map