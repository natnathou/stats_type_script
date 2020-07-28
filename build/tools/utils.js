"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = void 0;
exports.dataStringToDate = function (dateString) {
    var dataParse = dateString.split('/').map(function (data) {
        return parseInt(data);
    });
    return new Date(dataParse[2], dataParse[1] - 1, dataParse[0]);
};
