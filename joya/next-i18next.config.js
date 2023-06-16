/** @type {import('next-i18next').UserConfig} */

const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
    localePath: path.resolve('./public/locales')
  },
  fallbackLng: {
    default: ['vi'],
    'vi-VN': ['vi'],
    'en-US': ['en'],
  },
  domains: [
    {
      domain: 'joyatravel.vn',
      defaultLocale: 'vi'
    }
  ]
}