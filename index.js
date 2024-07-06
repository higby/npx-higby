#!/usr/bin/env node

import boxen from 'boxen'
import chalk from 'chalk'

let higby = [
  {
    title: 'www',
    href: '      https://www.higby.io'
  },
  {
    title: 'email',
    href: '    mailto:hi@higby.io'
  },
  {
    title: 'mastodon',
    href: ' https://front-end.social/@higby'
  }
]

console.log(
  boxen(higby.map(link => `${chalk.bold(link.title)} ${link.href}`).join('\n'), {
    padding: 1,
    title: 'higby',
    titleAlignment: 'left'
  })
)
