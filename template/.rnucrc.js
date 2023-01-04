const fs = require("fs");

module.exports = {
  on_env: async function (env) {
    // patch android/app/proguard-rules.pro
    const filename = 'android/app/proguard-rules.pro'
    const bundleId = typeof env.APP_BUNDLE_ID === 'string' ? env.APP_BUNDLE_ID : env.APP_BUNDLE_ID.android

    const content = fs.readFileSync(filename, 'utf-8').replace(
      /\-keepclassmembers class .*.BuildConfig \{ # keep env unchanged/, 
      `-keepclassmembers class ${bundleId}.BuildConfig { # keep env unchanged`
    )

    fs.writeFileSync(filename, content, 'utf-8')
  },
};