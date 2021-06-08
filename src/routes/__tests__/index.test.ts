import supertest from 'supertest'
import app from '../..'

const request = supertest(app)

describe(`Routes tests`, () => {
  it(`Gets the root route`, async () => {
    const res = await request.get(`/`)
    expect(res.status).toBe(200)
    expect(res.body.message).toBe(`Welcome to Algocks!`)
  })
})
