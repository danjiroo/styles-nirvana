const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)

// after npm publish, update package.json and push to git

const main = async () => {
  //   const resolved_name = `${baseDir}/${application}/${name}`
  //   const { stdout: clone_result } = await execAsync(`git clone ${templates[template]} ${resolved_name}`)
  //   console.log(`Creating ${templates[template]} ${resolved_name}`, clone_result)

  //   await execAsync(`rm -rf ${resolved_name}/.git`)
  //   console.log(`Done`)

  const { stdout: publishedPckgVersion } = await execAsync(
    `npm v @pando-styles/nirvana version`
  )
  const { stdout: localPckgVersion } = await execAsync(`npm pkg get version`)

  const [majorRelease, minorRelease, patchRelease] =
    publishedPckgVersion.split('.')

  const newPatch = Number(patchRelease) + 1

  const newVersion = `${majorRelease}.${minorRelease}.${newPatch}`

  console.log('Local Version', localPckgVersion)
  console.log('Published Version:', publishedPckgVersion)
  console.log('New Version:', newVersion)
}

main()
