import { Document } from 'flexsearch'
import { config } from '..'

class Indexer {
  indices = {}

  indexExists = (indexName: string): boolean => {
    return !!this.indices[indexName]
  }

  getIndex = (indexName: string): any => {
    if (!this.indexExists(indexName)) {
      this.setIndex(indexName)
    }
    return this.indices[indexName]
  }

  setIndex = (indexName: string): void => {
    this.indices[indexName] = new Document({
      id: `objectID`,
      index: config.searchableAttributes,
      store: true,
    })
  }

  objectIDExists = (indexName: string, objectID: string): boolean => {
    const result = this.getIndex(indexName).get(objectID)
    return !!result
  }
}

export default Indexer
