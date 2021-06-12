import express from 'express'
const router = express.Router()

/**
 * Search Index (POST)
 * https://www.algolia.com/doc/rest-api/search/#search-index-post
 */
router.post(`/:indexName/query`, function (req, res) {
  res.json({ message: `Search Index (POST)` })
})

/**
 * Search Multiple Indices
 * https://www.algolia.com/doc/rest-api/search/#search-multiple-indices
 */
router.post(`/*/queries`, function (req, res) {
  res.json({ message: `Search Multiple Indices` })
})

export default router
