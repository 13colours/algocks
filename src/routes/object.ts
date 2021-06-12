import express from 'express'
const router = express.Router()

/**
 * Batch write operations
 * https://www.algolia.com/doc/rest-api/search #batch-write-operations
 * Batch write operations (multiple indices)
 * https://www.algolia.com/doc/rest-api/search/#batch-write-operations-multiple-indices
 */
router.post(`/:indexName/batch`, function (req, res) {
  const batchOperation = req.params.indexName === `*`
  res.json({
    message: `Batch write operations ${
      batchOperation ? `(multiple indices)` : ``
    }`,
  })
})

/**
 * Clear objects
 * https://www.algolia.com/doc/rest-api/search/#clear-objects
 */
router.post(`/:indexName/clear`, function (req, res) {
  res.json({ message: `Clear objects` })
})

/**
 * Get object
 * https://www.algolia.com/doc/rest-api/search/#get-object
 */
router.get(`/:indexName/:objectID`, function (req, res) {
  res.json({ message: `Get object` })
})

/**
 * Get objects
 * https://www.algolia.com/doc/rest-api/search/#get-objects
 */
router.post(`/*/objects`, function (req, res) {
  res.json({ message: `Get objects` })
})

export default router
