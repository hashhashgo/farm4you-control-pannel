import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import config from '../../vue.config'

import themeArray from './themeArray'

export const global = {
  changeTheme: function(themeValue) {
    var cssArray = themeArray
    if (themeValue === 'green') {
      for (let i = 0, len = cssArray.length; i < len; i++) {
        var itemPathRemove = config.assetsDir + '/theme/' + 'blue' + '/' + cssArray[i].toLowerCase() + '.css'
        removeCss(itemPathRemove)
        var itemPath = config.assetsDir + '/theme/' + themeValue + '/' + cssArray[i].toLowerCase() + '.css'
        loadCss(itemPath)
      }
    } else {
      for (let i = 0, len = cssArray.length; i < len; i++) {
        var itemPathRemove1 = config.assetsDir + '/theme/' + 'green' + '/' + cssArray[i].toLowerCase() + '.css'
        removeCss(itemPathRemove1)
        var itemPath1 = config.assetsDir + '/theme/' + themeValue + '/' + cssArray[i].toLowerCase() + '.css'
        loadCss(itemPath1)
      }
    }
    localStorage.setItem('themeValue', themeValue)

    function loadCss(path) {
      var head = document.getElementsByTagName('head')[0]
      var link = document.createElement('link')
      link.href = path
      link.rel = 'stylesheet'
      link.type = 'text/css'
      head.appendChild(link)
    }

    function removeCss(href) {
      var targetelement = 'link'
      var targetattr = 'href'
      var allsuspects = document.getElementsByTagName(targetelement)
      for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(href) !== -1) {
          allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
      }
    }
  }
}
