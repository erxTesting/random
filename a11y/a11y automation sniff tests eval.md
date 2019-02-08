# UX/UI	A11y Audit Engines

[a11y automation sniff tests eval.md](https://myfrontline.slack.com/files/U1HKCG92Q/FFY2WE6TF/a11y_automation_sniff_tests_eval_md.md)

## Tasks

* Evaluate a project path and tools
* Pick a process
  * code, functional, auto, CI flow, etc.
* Pick an audit tool
  * aXe (JS/npm), SiteImprove, Tenon, WAVE, Lighthouse, Tanaguru, SonarQube, VS, etc.
* Pick a functional automated tool to drive audit
  * Selenium (C#, Java, etc.), Cypress (JS/npm), Jasmine (JS/npm), Mocha, etc.
* Gather test output into a repository
  * [ELK Stack](https://kevinmarsh.com/2014/10/23/using-jq-to-import-json-into-elasticsearch.html),
  [Hygieia](https://github.com/Hygieia/Hygieia), etc.
* Present the output (likely dependent on the storage)
  * [axe-reports](https://www.npmjs.com/package/axe-reports)
* Alert on the output

###	Audit Tools

#### What are others doing?

* [Which accessibility testing tool should you use?](https://medium.com/pulsar/which-accessibility-testing-tool-should-you-use-e5990e6ef0a)
* [Top 21 Accessibility Testing Tools for Automation](https://www.joecolantonio.com/accessibility-testing-tools-automation/)
* [Writing Automated Tests for Accessibility](https://www.24a11y.com/2017/writing-automated-tests-accessibility/)
* [Accessibility Testing Tools Market Size, Growth Trends, Top Players, Application Potential and Forecast to 2025](http://news.marketsizeforecasters.com/accessibility-testing-tools-market-size)

#### Code level a11y tools

* SonarQube
  * Home https://www.sonarqube.org/
  * Rules https://rules.sonarsource.com/html/tag/accessibility
  * Expansion https://github.com/Asqatasun/Asqatasun-Sonar-Plugin
* VS (WCAG Level A/WCAG Level AA/Section 508/Other best practices)
  * https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebAccessibilityChecker
  * https://docs.microsoft.com/en-us/windows/desktop/WinAuto/entry-uiauto-win32
* Android
  * Accessibility Test Framework for Android https://github.com/google/Accessibility-Test-Framework-for-Android
  * AccessibilityChecks https://developer.android.com/reference/android/support/test/espresso/accessibility/AccessibilityChecks

#### Functional testing a11y tools

* aXe
  * Home https://www.deque.com/axe/
  * Docs https://www.deque.com/axe/documentation/api-documentation/
  * Rules https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
  * aXe API https://github.com/dequelabs/axe-core/blob/master/doc/API.md
  * Dev tools https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/
  * Demo https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US
  * Config
    * https://marcysutton.github.io/a11y-testing-with-axe/#/
    * https://www.sitepoint.com/automated-accessibility-checking-with-axe/
  * Installs https://www.npmjs.com/package/axe-core
* SiteImprove Accessibility Checker
* Tenon.io https://tenon.io/
  * https://tenon.io/getcode.php
* WAVE Web Accessibility Evaluation Tool
  * https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh
* Lighthouse
* WCAG Accessibility Audit Developer UI
* Tanaguru
  * Rules https://tanaguru.readthedocs.io/en/develop/userdoc-4-audits/
  * 	http://rgaa.tanaguru.com/en/criteres.html
  * Install https://github.com/Tanaguru/Tanaguru
* HTML_CodeSniffer http://squizlabs.github.io/HTML_CodeSniffer/
  * Rules (Criteria) http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/
* GoogleChrome Accessibility Developer Tools https://github.com/GoogleChrome/accessibility-developer-tools
  * Rules https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules\
* Color Contrast Analyzer https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll
* Color Oracle http://colororacle.org/
* Color Contrast Tester https://www.joedolson.com/tools/color-contrast.php
* Convert pixel-point-em-rem-percent https://websemantics.uk/tools/convert-pixel-point-em-rem-percent/
* ChromeVox https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn
* Functional Accessibility Evaluator (FAE) https://fae.disability.illinois.edu/anonymous/?Anonymous%20Report=/
  * Rules https://fae.disability.illinois.edu/rulesets/

#### Functional automation testing a11y tools

* Selenium
  * Demo https://github.com/marcysutton/axe-webdriverjs-demo/
  * Installs
    * https://www.npmjs.com/package/axe-webdriverjs
    * https://github.com/dequelabs/axe-selenium-java
* Cypress
* Jasmine
  * https://github.com/marcysutton/axe-jasmine-unit
  * https://www.npmjs.com/package/jasmine
* Mocha
  * https://www.npmjs.com/package/mocha
* VS https://docs.microsoft.com/en-us/windows/desktop/WinAuto/entry-uiauto-win32
* AATT (wrapper for HTML CodeSniffer, Axe and Chrome developer tool) https://github.com/paypal/AATT
* Nemo (HTML CodeSniffer, Axe and Chrome developer tool) https://github.com/paypal/nemo-accessibility
* Protractor Accessibility Plugin (Chrome Accessibility Developer Tools, aXe, Tenon)
  * https://www.npmjs.com/package/protractor-accessibility-plugin
  * https://marcysutton.com/angular-protractor-accessibility-plugin
* Pa11y (CLI/Dashboard/Webservice/CI)
  * http://pa11y.org/
  * https://bitsofco.de/pa11y/
  * https://cruft.io/posts/automated-accessibility-testing-node-travis-ci-pa11y/
  * https://cruft.io/posts/accessibility-testing-with-pa11y/
  * https://24ways.org/2017/automating-your-accessibility-tests

#### Crawler a11y tools

* aXe
  * https://www.npmjs.com/package/axe-crawler
* A11y Machine
  * Home https://www.liip.ch/en
  * install https://github.com/liip/TheA11yMachine
* Tanaguru
  * Rules https://tanaguru.readthedocs.io/en/develop/userdoc-4-audits/
  * Install https://github.com/Tanaguru/Tanaguru
