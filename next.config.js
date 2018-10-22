module.exports = {
  exportPathMap: function() {
    return {
      '/': {page: '/index'},
      '/404/': {page: '/_error'},
      '/faq/': {page: '/faq'},
      '/privacy/': {page: '/privacy'},
      '/updates/': {page: '/updates'},
      '/progress/': {page: '/progress'},
      '/wallpapers/': {page: '/wallpapers'}
    }
  }
}
