# POC Demo of the aXe Accessibility Engine

[Accessibility_POC_aXe_Google_Chrome_md.md](https://myfrontline.slack.com/files/U1HKCG92Q/FG120QHHR/Accessibility_POC_aXe_Google_Chrome_md.md)

aXe-core engine has a full open ruleset library and several 
 interfaces as well as larger following and support structure. 
 aXe-core provides all the necessary components to parse raw HTML 
 and evaluate its validity against a set of compliance rules.  The 
 interfaces include aXe-cli, aXe-webdriver, axe-crawler and other open 
 derrivations.  The command line interface combined with a headless 
 Google Chrome browser appears to be the simpelist methode to 
 demonstrate the aXe engine. 
 
## Configuration

Install Node.js https://nodejs.org/en/ and packages: 

```bash
npm -v
npm install axe-cli -g
npm install selenium-webdriver
```

c9/linux install google chrome

```bash
sudo apt-get update
sudo apt-get install -y xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic
wget -q -O -   https://dl-ssl.google.com/linux/linux_signing_key.pub   | sudo apt-key add - 
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main"  \
>> /etc/apt/sources.list.d/google-chrome.list'
sudo apt-get update
sudo apt-get install -y google-chrome-stable
```

(Dependancies like ChromeDriver are included with axe-cli package)

## Example commandline

```Bash
axe https://www.prettyvulgar.com/ --save
```

## Two Outputs:

#### STDOUT

```bash
Running axe-core 3.1.2 in chrome-headless

Testing https://www.prettyvulgar.com/ ... please wait, this may take a minute.
Thu, 07 Feb 2019 15:41:13 GMT axe-webdriverjs deprecated Error must be handled as the first argument of axe.analyze. See: #83 at ..\AppData\Roaming\npm\node_modules\axe-cli\lib\axe-test-urls.js:85:8

  Violation of "aria-required-attr" with 1 occurrences!
    Ensures elements with ARIA roles have all required ARIA attributes. Correct invalid elements at:
     - #search
    For details, see: https://dequeuniversity.com/rules/axe/3.1/aria-required-attr

  Violation of "color-contrast" with 4 occurrences!
    Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds. Correct invalid elements at:
     - .frontPageProductWidget.mobileOnly > .productWidget > .block-products-list.widget.grid > .block-content > .products-grid.grid > ol > .product-item:nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link[title="Early\ Bird"]
     - .frontPageProductWidget.mobileOnly > .productWidget > .block-products-list.widget.grid > .block-content > .products-grid.grid > ol > .product-item:nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link[title="Pretty\ Birdie"]
     - .frontPageProductWidget.mobileOnly > .productWidget > .block-products-list.widget.grid > .block-content > .products-grid.grid > ol > .product-item:nth-child(3) > .product-item-info > .product-item-details > .product-item-name > .product-item-link[title="Vixen\ Glimmer"]
     - .frontPageProductWidget.mobileOnly > .productWidget > .block-products-list.widget.grid > .block-content > .products-grid.grid > ol > .product-item:nth-child(4) > .product-item-info > .product-item-details > .product-item-name > .product-item-link[title="Detox\ and\ Chill"]
    For details, see: https://dequeuniversity.com/rules/axe/3.1/color-contrast

...

  Violation of "region" with 1 occurrences!
    Ensures all page content is contained by landmarks. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.1/region

69 Accessibility issues detected.

Saved file at C:\Users\eberg\repo\axe-results-1549554075011.json

Please note that only 20% to 50% of all accessibility issues can automatically be detected.
Manual testing is always required. For more information see:
https://dequeuniversity.com/curriculum/courses/testingmethods

```

#### axe-results-1549554075011.json

```javascript
[
  {
    "inapplicable": [
...
    ],
    "incomplete": [
...
    ],
    "passes": [
...
    ],
    "timestamp": "2019-02-07T15:41:14.850Z",
    "url": "https://www.prettyvulgar.com/",
    "violations": [
      {
        "description": "Ensures elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-required-attr?application=webdriverjs",
        "id": "aria-required-attr",
        "impact": "critical",
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": [
                  "aria-expanded"
                ],
                "id": "aria-required-attr",
                "impact": "critical",
                "message": "Required ARIA attribute not present: aria-expanded",
                "relatedNodes": []
              }
            ],
            "failureSummary": "Fix any of the following:\n  Required ARIA attribute not present: aria-expanded",
            "html": "<input id=\"search\" type=\"text\" name=\"q\" value=\"\" placeholder=\"Search\" class=\"input-text\" maxlength=\"128\" role=\"combobox\" aria-haspopup=\"false\" aria-autocomplete=\"both\" autocomplete=\"off\">",
            "impact": "critical",
            "none": [],
            "target": [
              "#search"
            ]
          }
        ],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
...
    ]
  }
]
```