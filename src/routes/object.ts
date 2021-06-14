import express from 'express'
import { v4 as uuidv4 } from 'uuid'

import { indexer } from '..'

const router = express.Router()

/**
 * Batch write operations
 * https://www.algolia.com/doc/rest-api/search #batch-write-operations
 * Batch write operations (multiple indices)
 * https://www.algolia.com/doc/rest-api/search/#batch-write-operations-multiple-indices
 */
router.post(`/:indexName/batch`, function (req, res) {
  const {
    params,
    body: { requests },
  } = req

  try {
    const objectIDs = []

    requests.forEach((request) => {
      const { action, indexName: requesIndexName, body } = request

      const indexName = requesIndexName || params.indexName
      const index = indexer.getIndex(indexName)

      const tempID = uuidv4()

      switch (action) {
        case `addObject`:
          index.add({ objectID: body.objectID || tempID, ...body })
          objectIDs.push(tempID)
          break

        case `updateObject`:
          if (!body.objectID) throw new Error(`Missing objectID`)

          index.add(body)
          objectIDs.push(body.objectID)
          break

        case `partialUpdateObject`:
          if (!body.objectID) throw new Error(`Missing objectID`)

          index.update({ ...index.get(body.objectID), ...body })
          objectIDs.push(body.objectID)
          break

        case `partialUpdateObjectNoCreate`:
          if (!body.objectID) throw new Error(`Missing objectID`)
          if (!indexer.objectIDExists(indexName, body.objectID)) {
            throw new Error(`objectID not found`)
          }

          index.update({ ...index.get(body.objectID), ...body })
          objectIDs.push(body.objectID)
          break

        case `deleteObject`:
          if (!body.objectID) throw new Error(`Missing objectID`)

          index.remove(body.objectID)
          break

        default:
          throw new Error(`Unknown request type`)
      }
    })

    res.json({ objectIDs })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

/**
 * Clear objects
 * https://www.algolia.com/doc/rest-api/search/#clear-objects
 */
router.post(`/:indexName/clear`, function (req, res) {
  const {
    params: { indexName },
  } = req

  const index = indexer.getIndex(indexName)
  index.store = {}

  res.json({ updatedAt: new Date(Date.now()) })
})

/**
 * Get object
 * https://www.algolia.com/doc/rest-api/search/#get-object
 */
router.get(`/:indexName/:objectID`, function (req, res) {
  const {
    params: { indexName, objectID },
  } = req

  try {
    if (!indexer.objectIDExists(indexName, objectID)) {
      throw new Error(`objectID not found`)
    }

    const index = indexer.getIndex(indexName)
    const result = index.get(objectID)

    res.json(result)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

/**
 * Get objects
 * https://www.algolia.com/doc/rest-api/search/#get-objects
 */
router.post(`/*/objects`, function (req, res) {
  const {
    body: { requests },
  } = req

  try {
    const results = []

    requests.forEach((request) => {
      const { indexName, objectID } = request

      if (!indexer.objectIDExists(indexName, objectID)) {
        throw new Error(`objectID not found`)
      }

      const index = indexer.getIndex(indexName)
      const document = index.get(objectID)
      results.push(document)
    })

    res.json({ results })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

export default router
