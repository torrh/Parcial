"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    goToUrl(url) {
        browser.url(url);
    }
    scroll() {
        browser.scroll(0, 400);
    }
    findByClass(elementClass) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible("." + elementClass, 10000);
            browser.waitForEnabled("." + elementClass, 10000);
            return yield browser.element("." + elementClass);
        });
    }
    findByName(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible('[name="' + elementName + '"]', 10000);
            browser.waitForEnabled('[name="' + elementName + '"]', 10000);
            return yield browser.element('[name="' + elementName + '"]');
        });
    }
    pause(time) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.pause(time);
        });
    }
    findByAttribute(attribute, value) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible('[' + attribute + '="' + value + '"]', 10000);
            browser.waitForEnabled('[' + attribute + '="' + value + '"]', 10000);
            return yield browser.element('[' + attribute + '="' + value + '"]');
        });
    }
    findElementInsideParent(element, parent) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible("." + parent, 10000);
            browser.waitForEnabled("." + parent, 10000);
            return yield yield browser.element("." + parent).element('input[name="' + element + '"]');
        });
    }
    findElementClassInsideParent(element, parent) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible("." + parent, 10000);
            browser.waitForEnabled("." + parent, 10000);
            return yield yield browser.element("." + parent).element("." + element);
        });
    }
    findBasicElementNameInsideParent(element, parent) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible("." + parent, 10000);
            browser.waitForEnabled("." + parent, 10000);
            return yield yield browser.element("." + parent).element('[name="' + element + '"]');
        });
    }
    findByContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitForVisible('span=' + content, 10000);
            browser.waitForEnabled('span=' + content, 10000);
            return yield browser.element('span=' + content);
        });
    }
}
exports.Page = Page;
