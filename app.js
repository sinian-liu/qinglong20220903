"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const logger_1 = __importDefault(require("./logger"));
const initData_1 = __importDefault(require("./initData"));
const deps_1 = __importDefault(require("./deps"));
exports.default = async ({ expressApp }) => {
    await dependencyInjector_1.default({
        models: [],
    });
    logger_1.default.info('✌️ Dependency Injector loaded');
    await express_1.default({ app: expressApp });
    logger_1.default.info('✌️ Express loaded');
    await initData_1.default();
    logger_1.default.info('✌️ init data loaded');
    await deps_1.default();
    logger_1.default.info('✌️ link deps');
};
//# sourceMappingURL=app.js.map