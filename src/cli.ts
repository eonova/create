import cac from 'cac'
import consola from 'consola'
import { edit, run } from '.'
import { version } from '../package.json'
import { fromTemplate } from './from'

const cli = cac('@eonova/create')

cli
  .command('[projectPath]', 'create a project')
  .action((projectPath?: string) => {
    run({ projectPath }).catch(error => error && consola.error(error))
  })
cli
  .command('from <template>', 'create a project from a template')
  .action((template) => {
    fromTemplate(template).catch(error => consola.error(error))
  })
cli
  .command('edit')
  .alias('config')
  .action(() => edit().catch(error => consola.error(error)))

cli.help().version(version).parse()
