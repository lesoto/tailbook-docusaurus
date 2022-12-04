const puppeteer = require("puppeteer")

puppeteer.launch().then(async (browser) => {
  const page = await browser.newPage()
  const navigationPromise = page.waitForNavigation()

  await page.goto("http://localhost:3000/")

  await page.setViewport({ width: 1440, height: 764 })

  await page.waitForSelector("#__docusaurus > .navbar > .navbar__inner > .navbar__items > .navbar__item:nth-child(3)")
  await page.click("#__docusaurus > .navbar > .navbar__inner > .navbar__items > .navbar__item:nth-child(3)")
  await page.screenshot({ path: "screenshots/1.png", fullPage: true })
  await navigationPromise

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/2.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/3.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/4.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/5.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/6.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/7.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/8.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/9.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/10.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/11.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/12.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/13.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/14.png", fullPage: true })

  await page.waitForSelector(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/15.png", fullPage: true })

  await page.click(
    ".col > .docItemContainer_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module > .pagination-nav > .pagination-nav__link--next > .pagination-nav__label"
  )
  await page.screenshot({ path: "screenshots/16.png", fullPage: true })

  await page.waitForSelector(".row > .col:nth-child(1) > .footer__items > .footer__item > .footer__link-item")
  await page.click(".row > .col:nth-child(1) > .footer__items > .footer__item > .footer__link-item")
  await page.screenshot({ path: "screenshots/17.png", fullPage: true })

  await page.waitForSelector("#__docusaurus > .navbar > .navbar__inner > .navbar__items > .navbar__item:nth-child(4)")
  await page.click("#__docusaurus > .navbar > .navbar__inner > .navbar__items > .navbar__item:nth-child(4)")
  await page.screenshot({ path: "screenshots/18.png", fullPage: true })
  await navigationPromise

  await page.waitForSelector(
    ".navbar__inner > .navbar__items > .toggle_node_modules-\\@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module > .clean-btn > .darkToggleIcon_node_modules-\\@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module"
  )
  await page.click(
    ".navbar__inner > .navbar__items > .toggle_node_modules-\\@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module > .clean-btn > .darkToggleIcon_node_modules-\\@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module"
  )
  await page.screenshot({ path: "screenshots/19.png", fullPage: true })

  await page.waitForSelector(".navbar > .navbar__inner > .navbar__items > .navbar__brand > .navbar__title")
  await page.click(".navbar > .navbar__inner > .navbar__items > .navbar__brand > .navbar__title")
  await page.screenshot({ path: "screenshots/20.png", fullPage: true })

  await browser.close()
})
