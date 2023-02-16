#!/usr/bin/env node

import CryptoJS from 'crypto-js'
import minimist from 'minimist'
import { wordlists } from 'bip39'

if (minimist(process.argv.slice(2)).h) {
    const text = [
        '',
        '---------------------------------------------------------------------------------',
        '                           USAGE INFORMATION:',
        '---------------------------------------------------------------------------------',
        '',
        '--build INPUTSTRING        Pass the input string; REQUIRED; no default value.',
        '--sep SEPARATORSTRING      Specify the separator; OPTIONAL; defaults to "-".',
        '--len WORDCOUNTNUMBER      Specify the number of words; OPTIONAL; defaults to 2.',
        ''
    ]
    console.info(text.join('\n'))
    process.exit()
}

const Len = minimist(process.argv.slice(2)).len || 2
const Sep = minimist(process.argv.slice(2)).sep || '-'

const oliveoil = (input, opts = { len: Len, sep: Sep }) => {
    const output = []
    const len = opts.len || len
    const sep = opts.sep || sep
    const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex)
    for (let i = 0; i < len; i++) output.push(wordlists.english[parseInt(hash.substr(i, 2), 16) % wordlists.english.length])
    return output.join(sep)
}

const raw = String(minimist(process.argv.slice(2)).build)

if (typeof raw === 'string' && raw !== "undefined" && raw.length > 0) console.log(oliveoil(raw))

export default oliveoil