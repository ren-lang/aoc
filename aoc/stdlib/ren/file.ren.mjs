import * as Fs from 'fs'

//
export function open(path) {
    return ({ sync = false }) => {
        if (sync) {
            try {
                return ['#ok', Fs.readFileSync(path, { encoding: 'utf8' })]
            } catch (e) {
                return ['#err', e]
            }
        }

        return Fs.promises.readFile(path, { encoding: 'utf8' })
    }
}