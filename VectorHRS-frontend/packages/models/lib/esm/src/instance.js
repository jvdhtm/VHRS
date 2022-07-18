import { __awaiter, __generator } from "tslib";
import axios from "axios";
import hash, { hid } from "./hash";
export var instance = axios.create();
var ResourceInternalCache = /** @class */ (function () {
    function ResourceInternalCache() {
        var _this = this;
        this.items = {};
        this.getAll = function () {
            return _this.items;
        };
        this.get = function (resource, id) {
            if (!_this.items[resource.name]) {
                _this.items[resource.name] = new Map();
            }
            if (id) {
                return _this.items[resource.name].get(id);
            }
            else {
                var tempid = hid(resource);
                return _this.items[resource.name].get(tempid);
            }
        };
        this.getList = function (resource) {
            if (!_this.items[resource.name]) {
                _this.items[resource.name] = new Map();
            }
            return _this.items[resource.name];
        };
        this.delete = function (resource, id) {
            if (!_this.items[resource.name]) {
                return false;
            }
            else if (_this.items[resource.name].get(id)) {
                return _this.items[resource.name].delete(id);
            }
            else {
                return false;
            }
        };
        this.set = function (resource, item, id) {
            if (!_this.items[resource.name]) {
                _this.items[resource.name] = new Map();
            }
            if (id) {
                _this.items[resource.name].set(id, item);
            }
            else {
                var tempid = hid(resource);
                _this.items[resource.name].set(tempid, item);
            }
        };
        this.items = {};
    }
    return ResourceInternalCache;
}());
export { ResourceInternalCache };
var DataLayer = /** @class */ (function () {
    function DataLayer(debugMode) {
        if (debugMode === void 0) { debugMode = false; }
        this.TIMESTAMP_CACHE = new Map();
        this.PROMISE_CACHE = new Map();
        this.RESOURCE_CACHE = new ResourceInternalCache();
        this.DEDUP_TIME = 5000;
        this.debugMode = debugMode;
    }
    /**
    * Loging errors.
    *  @param resourceName - a unique name for each different resoruce.
    *  @param e - AxiosError.
    */
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
    DataLayer.prototype.requestApi = function (Request, headers, force, data) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dedupRequest(hash([Request.endpoint, headers]), function () {
                                return instance({
                                    method: Request.verb,
                                    url: Request.endpoint,
                                    params: data ? data.query : {},
                                    headers: headers,
                                });
                            }, force)];
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
//# sourceMappingURL=instance.js.map