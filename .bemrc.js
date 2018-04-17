module.exports = {
  levels: [
    {
      layer: 'blocks',
      path: 'src/blocks',
      scheme: 'nested',
      schemeOptions: 'react',
      naming: 'react'
    },
    {
      layer: 'tablet',
      path: 'src/tablet',
      scheme: 'nested',
      schemeOptions: 'react',
      naming: 'react'
    },
    {
      layer: 'desktop',
      path: 'src/desktop',
      scheme: 'nested',
      schemeOptions: 'react',
      naming: 'react'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    mobile: 'blocks',
    tablet: 'blocks tablet',
    desktop: 'blocks tablet desktop'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/desktop': { default: true }
          },
          techs: ['js', 'scss'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
