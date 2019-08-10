import express from 'express'

const app = express()

app.listen(3000, () =>
  console.log('Weather service listening in port 3000'),
);