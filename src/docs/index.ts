/**
 * 获取所有文档
 */
const modulesFiles = import.meta.glob('./*.md', { eager: true })

const list: string[] = []

const modules = Object.keys(modulesFiles).reduce(
  (modules: { [key: string]: any }, path: string) => {
    const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
    list.push(moduleName)
    modules[moduleName] = modulesFiles[path]
    return modules
  },
  {}
)

export default {
  modules,
  list,
}
