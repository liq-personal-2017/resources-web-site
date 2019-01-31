const express = require('express')
const port = 2401
const chalk = require('chalk')
const app = express()
const path = require('path')
const fs = require('fs')
const globby = require('globby')
// const softwareDir = path.join(__dirname, '../softwares')
const configfilepath = path.join(__dirname, '.paths')
const paths = fs.readFileSync(configfilepath, 'utf8').split('\n')
for (let p of paths) {
    app.use(express.static(p))
}
app.use(express.static(path.join(__dirname, 'src')))
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery')))
app.use('/lodash', express.static(path.join(__dirname, 'node_modules/lodash')))
const router = new express.Router()
const allfiles = []
router.get('/update', function(req, res) {
    allfiles.length = 0
    res.redirect('/')
})
router.get('/exit', function(req, res) {
    res.end('done')
    process.exit(0)
})
router.get('/softwares', async function(req, res) {
    if (allfiles.length == 0) {
        await files()
    }
    res.end(JSON.stringify(allfiles))
})
app.use(router)
app.listen(port)
console.log(chalk.green(`now server is running on port [${port}]`))

async function files() {
    for (let p of paths) {
        const files = await globby(p + '**/*')
        allfiles.push(...files.map(file => file.replace(p, '')))
    }
}
