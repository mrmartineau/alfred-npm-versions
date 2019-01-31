const alfy = require('alfy')
const pkgVersions = require('pkg-versions')

pkgVersions(alfy.input).then(versions => {
  const latestVersions = Array.from(versions)
    .sort()
    .slice(-15)
    .sort((one, two) => -one.localeCompare(two))
    .map(x => ({
      title: x,
    }))
  alfy.output(latestVersions)
})
