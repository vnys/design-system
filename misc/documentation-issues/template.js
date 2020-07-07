const fs = require('fs')

const components = [
  'Accordion',
  'Buttons',
  'Buttons Toggle',
  'Cards',
  'Chips',
  'Date Picker',
  'Divider',
  'Links',
  'Lists',
  'Menu',
  'Navigation App launcher',
  'Navigation Breadcrumbs',
  'Navigation Navigation drawer',
  'Navigation Pagination',
  'Navigation Table of contents',
  'Navigation Tabs',
  'Navigation Top bar',
  'Notification Banner',
  'Notification Dialog',
  'Notification Snackbar',
  'Popovers',
  'Progress indicators',
  'Search',
  'Selection controls',
  'Scrim',
  'Side sheet',
  'Slider',
  'Stepper',
  'Table',
  'Text fields',
  'Tooltip',
  'Typography',
  'Icon',
]

const issue = (component) => ({
  title: `Create documentation for ${component}`,
  labels: ['documentation', 'react'],
  milestone: 6,
  body: `Write documentation for [${component}](https://eds.equinor.com/components/${component
    .toLowerCase()
    .replace(' ', '-')}/)

**Sub tasks**

- [ ] Write documentation
- [ ] Create examples
- [ ] Add props-table
- [ ] Add live preview`,
})

const createJSON = (arr) => {
  const data = arr.map(issue)
  return data
}

const writeFileToDisk = (json) => {
  const data = JSON.stringify(json, null, 2)
  try {
    fs.writeFileSync('issues.json', data)
  } catch (err) {
    console.error(err)
  }
}

writeFileToDisk(createJSON(components))
