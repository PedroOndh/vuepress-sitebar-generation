const fs = require('fs')
const path = require('path')


const iterations = 0
const sidebarItems = []

fs.readdirSync('src/').forEach((section) => {
  if (!section.includes('.') && section.charAt(0) !== '_') {
    sidebarItems.push(createSubGroups('/', section, iterations))
  }
})

const str = JSON.stringify(sidebarItems, null, 4); // (Optional) beautiful indented output.
console.log(str);

function createSubGroups(currentLink, currentEntry, iterations) {
  if (iterations < 7) {
    iterations++
    const title = currentEntry.replace(/-/g, ' ')
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const sidebarSubGroups = {
      title: capitalizedTitle,
      collapsable: true,
      children: []
    }
    fs.readdirSync(path.join(`src${currentLink}${currentEntry}`))

      .forEach(
      (entry) => {
        if (entry.includes('.md')) {
          const link = entry.includes('README')
            ? `${currentLink}${currentEntry}/`
            : `${currentLink}${currentEntry}/${entry.slice(0, -3)}`
          sidebarSubGroups['children'].push(link)
        } else if (!entry.includes('.')) {
          sidebarSubGroups['children'].push(
            createSubGroups(`${currentLink}${currentEntry}/`, entry, iterations)
          )
        }
      }
    )
    return sidebarSubGroups
  }
}
