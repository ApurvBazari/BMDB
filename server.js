const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  const server = express()

  server.get('/favourites', (req, res) => {
    return app.render(req, res, '/favourites', req.query)
  })

  server.get('/homepage', (req, res) => {
    return app.render(req, res, '/homepage', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})