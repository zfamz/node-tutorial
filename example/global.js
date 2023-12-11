import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

// Buffer
const buf = Buffer.alloc(10)
const buf1 = Buffer.from('hello, world!')
const buf2 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
console.log(buf, ':', buf.toString())
console.log(buf1, ':', buf1.toString())
console.log(buf2, ':', buf2.toString())
buf.write('hello ')
buf.write('world', 6)
console.log(buf.toString())
// console.log(buf1.slice(0, 6).toString())
console.log(buf1.subarray(0, 6).toString())

process.exit()

// filename dirname
const fileUrl = import.meta.url
console.log('import.meta.url: ', fileUrl)

const __filename = fileURLToPath(fileUrl)
const __dirname = dirname(__filename)
console.log('filename: ', __filename)
console.log('dirname: ', __dirname)

const require = createRequire(fileUrl)
console.log('name: ', require('../package.json').name)

// process
console.log(process.argv)
// console.log(process.env)
console.log(process.pid)
console.log(process.platform)
console.log(process.arch)

// process.stdout process.stdin
process.stdout.write('hello')
process.stdout.write(' ')
process.stdout.write('world')
process.stdout.write('\n')

process.stdin.on('data', (data) => {
  console.log(`User input: ${data}`)
})
