// Remove enzyme setup since we're migrating to @testing-library/react
const context = require.context('./src', true, /\.spec\.js$/)
context.keys().forEach(context)
