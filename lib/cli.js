#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const os = require('os')
const dotenv = require('dotenv').config()

/**
 * @return {String}
 */
function getHostname() {
  return process.env.HOSTNAME || os.hostname()
}

/**
 * @param {String} directory
 * @return {Object}
 */
function getTreeDirectory(directory) {
  // @see https://nodejs.org/api/fs.html#fs_fs_lstatsync_path_options
  const stats = fs.lstatSync(directory)
  let info = {}

  // @see https://nodejs.org/api/fs.html#fs_stats_isdirectory
  if (stats.isDirectory()) {
    // Get directory from stats
    // @see https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
    info[path.basename(directory)] = fs
      .readdirSync(directory)
      .map(child => getTreeDirectory(`${directory}/${child}`))
  }

  // @see https://nodejs.org/api/fs.html#fs_stats_isfile
  if (stats.isFile()) {
    if (path.extname(directory) === '.txt') {
      // @see https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
      const readFiles = fs.readFileSync(directory, 'utf8')
      info.text = readFiles
        .split('\n')
        .map(file => file.split('='))
        .reduce((acc, files) => {
          acc[files[0]] = files[1]
          return acc
        }, {})
    } else {
      info.path = `${getHostname()}/${directory}`
    }
  }

  return info
}

/**
 * @param {String} log
 * @return {Void|String}
 */
function printLog(log) {
  console.log()
  console.log(log)
  console.log()
}

/**
 * Handle convert data to json
 * @param {Object} data
 * @param {String} filename filename should be have extensions json
 * @return {Void}
 */
async function createFileJSON(data, filename) {
  try {
    // Convert data JSON to string
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    const dataToString = JSON.stringify(data, null, 2)
    // Create filename
    // @see https://nodejs.org/api/fs.html#fs_class_fs_readstream
    await fs.WriteStream(filename)
    // Insert dataToString to filename
    // @see https://nodejs.org/api/fs.html#fs_fs_appendfilesync_path_data_options
    fs.appendFileSync(filename, dataToString)
    printLog(`Yey, success created file ${filename} ✅`)
  } catch (error) {
    console.error(error)
  }
}

const directory = getTreeDirectory(process.argv[2])
const fileJSON = process.argv[3]
createFileJSON(directory, fileJSON)
