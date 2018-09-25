import { expect } from "chai";
import { Given, Then } from "cucumber";
import { Page } from "../page-object/page-object";

let page = new Page();
let element;

Given("I go to website {string}", (url) => {
    page.goToUrl(url);
});

Given("I get element with class {string}", async (elementClass) => {
    element = await page.findByClass(elementClass);
});

Given("I get element with name {string}", async (elementName) => {
    element = await page.findByName(elementName);
});

Given("I send text {string}", async (text:string) => {
    await element.setValue(text);
});

Given("I keys {string}", async (text:string) => {
    await element.keys(text);
});

Given("I click", () => {
    element.click();
});

Given("I pause {int}", async (time:number) => {
    await page.pause(time);
});

Given("I get element with {string} and value {string}", async (attribute,value) => {
    element = await page.findByAttribute(attribute,value);
});

Given("I get element with name {string} inside {string}", async (elementName, parentName) => {
    element = await page.findElementInsideParent(elementName,parentName)
});

Given("I get element with class {string} inside {string}", async (elementName, parentName) => {
    element = await page.findElementClassInsideParent(elementName,parentName)
});

Given("I get basic element with name {string} inside {string}", async (elementName, parentName) => {
    element = await page.findBasicElementNameInsideParent(elementName,parentName)
});

Given("I select {string}", async (value) => {
    element.selectByVisibleText(value);
});

Then("I expect alert with title {string}", (title) => {
    var alertText = element.getText()
    expect(alertText).to.be.eql(title);
});

Given("I get element with content {string}", async (content:string) => {
    element = await page.findByContent(content);
});
