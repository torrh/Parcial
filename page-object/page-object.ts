export class Page {
  public goToUrl(url: string) {
    browser.url(url);
  }

  public scroll() {
    browser.scroll(0, 400);
  }

  public async findByClass(elementClass: string) {
    browser.waitForVisible("." + elementClass, 10000);
    browser.waitForEnabled("." + elementClass, 10000);
    return await browser.element("." + elementClass);
  }

  public async findByName(elementName: string) {
    browser.waitForVisible('[name="' + elementName + '"]', 10000);
    browser.waitForEnabled('[name="' + elementName + '"]', 10000);
    return await browser.element('[name="' + elementName + '"]');
  }

  public async pause(time: number) {
    browser.pause(time);
  }

  public async findByAttribute(attribute: string, value: string) {
    browser.waitForVisible('['+ attribute + '="' + value + '"]', 10000);
    browser.waitForEnabled('['+ attribute + '="' + value + '"]', 10000);
    return await browser.element('['+ attribute + '="' + value + '"]');
  }

  public async findElementInsideParent(element: string, parent: string) {
    browser.waitForVisible("." + parent, 10000);
    browser.waitForEnabled("." + parent, 10000);
    return await await browser.element("." + parent).element('input[name="' + element + '"]');
  }

  public async findElementClassInsideParent(element: string, parent: string) {
    browser.waitForVisible("." + parent, 10000);
    browser.waitForEnabled("." + parent, 10000);
    return await await browser.element("." + parent).element("." + element);
  }

  public async findBasicElementNameInsideParent(element: string, parent: string) {
    browser.waitForVisible("." + parent, 10000);
    browser.waitForEnabled("." + parent, 10000);
    return await await browser.element("." + parent).element('[name="' + element + '"]');
  }

  public async findByContent(content: string) {
    browser.waitForVisible('span='+content, 10000);
    browser.waitForEnabled('span='+content, 10000);
    return await browser.element('span='+content);
  }
}
