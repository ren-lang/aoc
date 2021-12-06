import { Elm } from './elm/Main.elm'

import * as Fs from 'fs'
import * as Path from 'path'
import * as Process from 'process'

const entry = Path.resolve(Process.cwd(), 'aoc')
const stdlib = Path.join(entry, 'stdlib')

const compiler = Elm.Main.init({
    flags: {
        argv: Process.argv.slice(2),
        stdlib: stdlib
    }
})

const paths = (function gatherSourceFiles(dir) {
    return Fs
        .readdirSync(dir, { withFileTypes: true })
        .flatMap(entry => {
            const path = Path.resolve(dir, entry.name)
            return entry.isDirectory() ? gatherSourceFiles(path) : path
        })
        .filter(path => Path.extname(path) === '.ren')
})(entry)


compiler.ports.fromFs.send({
    $: 'GotProject',
    0: Object.fromEntries(
        paths.map(path => [path, Fs.readFileSync(path, { encoding: 'utf8' })])
    )
})

compiler.ports.toFs.subscribe(({ $, ...data }) => {
    const [year, day] = Process.argv.slice(2)

    switch ($) {
        case 'WriteFiles': {
            const { files } = data

            let filesToRun = []
            let hasError = false

            Object.entries(files).forEach(([path, { $, ...data }]) => {
                switch ($) {
                    case 'Ok': {
                        const name = `${path}.mjs`
                        Fs.writeFileSync(name, data.src, { encoding: 'utf8' })

                        if (name.includes(`${year}/${day}`)) filesToRun.push(name)

                        break
                    }

                    case 'Err': {
                        hasError = true

                        console.error(`Error while compiling ${path}:`)
                        console.error(data.err, '\n')
                    }
                }
            })

            if (!hasError) filesToRun.forEach(name => {
                import(name).then(({ main }) => {
                    Process.chdir(Path.dirname(name))

                    main && console.log(typeof main === 'function'
                        ? main(Process.argv.slice(2))
                        : main
                    )
                })
            })
        }
    }
})