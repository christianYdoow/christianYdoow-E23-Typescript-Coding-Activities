"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const endZeros = (a) => {
    let count = 0;
    while (a > 0 && a % 10 === 0) {
        count++;
        a = Math.floor(a / 10);
    }
    return count;
};
console.log(endZeros(10));
assert_1.default.strictEqual(endZeros(1), 0);
assert_1.default.strictEqual(endZeros(0), 1);
assert_1.default.strictEqual(endZeros(10), 1);
assert_1.default.strictEqual(endZeros(100), 2);
assert_1.default.strictEqual(endZeros(1000), 3);
