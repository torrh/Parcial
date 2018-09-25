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
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const page_object_1 = require("../page-object/page-object");
let page = new page_object_1.Page();
let element;
cucumber_1.Given("I go to website {string}", (url) => {
    page.goToUrl(url);
});
cucumber_1.Given("I get element with class {string}", (elementClass) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findByClass(elementClass);
}));
cucumber_1.Given("I get element with name {string}", (elementName) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findByName(elementName);
}));
cucumber_1.Given("I send text {string}", (text) => __awaiter(this, void 0, void 0, function* () {
    yield element.setValue(text);
}));
cucumber_1.Given("I keys {string}", (text) => __awaiter(this, void 0, void 0, function* () {
    yield element.keys(text);
}));
cucumber_1.Given("I click", () => {
    element.click();
});
cucumber_1.Given("I pause {int}", (time) => __awaiter(this, void 0, void 0, function* () {
    yield page.pause(time);
}));
cucumber_1.Given("I get element with {string} and value {string}", (attribute, value) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findByAttribute(attribute, value);
}));
cucumber_1.Given("I get element with name {string} inside {string}", (elementName, parentName) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findElementInsideParent(elementName, parentName);
}));
cucumber_1.Given("I get element with class {string} inside {string}", (elementName, parentName) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findElementClassInsideParent(elementName, parentName);
}));
cucumber_1.Given("I get basic element with name {string} inside {string}", (elementName, parentName) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findBasicElementNameInsideParent(elementName, parentName);
}));
cucumber_1.Given("I select {string}", (value) => __awaiter(this, void 0, void 0, function* () {
    element.selectByVisibleText(value);
}));
cucumber_1.Then("I expect alert with title {string}", (title) => {
    var alertText = element.getText();
    chai_1.expect(alertText).to.be.eql(title);
});
cucumber_1.Given("I get element with content {string}", (content) => __awaiter(this, void 0, void 0, function* () {
    element = yield page.findByContent(content);
}));
