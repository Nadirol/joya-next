/** @type {import('next-i18next').UserConfig} */

const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localePath: path.resolve('./public/locales'),
    localeDetection: false
  },
  fallbackLng: {
    default: ['en'],
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