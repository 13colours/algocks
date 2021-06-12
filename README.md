# Algocks

A mock server for Algolia, primarily for testing purposes.

## Algolia REST API

### Search Endpoints

| Verb | Path                                                | Method                                                                                          | Supported |
| ---- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------- |
| POST | /1/indexes/`{indexName}`/query                      | [Search index (POST)](https://www.algolia.com/doc/rest-api/search/#search-index-post)           | No        |
| GET  | /1/indexes/`{indexName}`                            | [Search index (GET)](https://www.algolia.com/doc/rest-api/search/#search-index-get)             | No        |
| POST | /1/indexes/\*/queries                               | [Search multiple indices](https://www.algolia.com/doc/rest-api/search/#search-multiple-indices) | No        |
| POST | /1/indexes/`{indexName}`/facets/`{facetName}`/query | [Search for facet values](https://www.algolia.com/doc/rest-api/search/#search-for-facet-values) | No        |
| POST | /1/indexes/`{indexName}`/browse                     | [Browser index (POST)](https://www.algolia.com/doc/rest-api/search/#browse-index-post)          | No        |
| GET  | /1/indexes/`{indexName}`/browse                     | [Browser index (GET)](https://www.algolia.com/doc/rest-api/search/#browse-index-get)            | No        |

### Object Endpoints

| Verb   | Path                                          | Method                                                                                                                            | Supported |
| ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| POST   | /1/indexes/`{indexName}`                      | [Add object (without ID)](https://www.algolia.com/doc/rest-api/search/#add-object-without-id)                                     | No        |
| PUT    | /1/indexes/`{indexName}`/`{objectID}`         | [Add/update object (with ID)](https://www.algolia.com/doc/rest-api/search/#addupdate-object-with-id)                              | No        |
| DELETE | /1/indexes/`{indexName}`/`{objectID}`         | [Delete object](https://www.algolia.com/doc/rest-api/search/#delete-object)                                                       | No        |
| POST   | /1/indexes/`{indexName}`/deleteByQuery        | [Delete by](https://www.algolia.com/doc/rest-api/search/#delete-by)                                                               | No        |
| POST   | /1/indexes/`{indexName}`/clear                | [Clear objects](https://www.algolia.com/doc/rest-api/search/#clear-objects)                                                       | No        |
| POST   | /1/indexes/`{indexName}`/`{objectID}`/partial | [Partially update object](https://www.algolia.com/doc/rest-api/search/#partially-update-object)                                   | No        |
| POST   | /1/indexes/`{indexName}`/batch                | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)                                     | No        |
| POST   | /1/indexes/\*/batch                           | [Batch write operations (multiple indices)](https://www.algolia.com/doc/rest-api/search/#batch-write-operations-multiple-indices) | No        |
| POST   | /1/indexes/\*/objects                         | [Get objects](https://www.algolia.com/doc/rest-api/search/#get-objects)                                                           | No        |
| GET    | /1/indexes/`{indexName}`/`{objectID}`         | [Get object](https://www.algolia.com/doc/rest-api/search/#get-object)                                                             | No        |

### JavaScript API Client

Map of the "JavaScript API Client" to the "REST API Endpoints"

| Method Name              | Method                     | API Method                                                                                      | API Endpoint                                        |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Search**               |                            |                                                                                                 |                                                     |
| Search Index             | index.search               | [Search index (POST)](https://www.algolia.com/doc/rest-api/search/#search-index-post)           | /1/indexes/`{indexName}`/query                      |
| Search for Facet Values  | index.searchForFacetValues | [Search for facet values](https://www.algolia.com/doc/rest-api/search/#search-for-facet-values) | /1/indexes/`{indexName}`/facets/`{facetName}`/query |
| Find Object              | index.findObject           | [Search index (POST)](https://www.algolia.com/doc/rest-api/search/#search-index-post)           | /1/indexes/`{indexName}`/query                      |
| **Indexing**             |                            |                                                                                                 |                                                     |
| Add / Save an Object     | index.saveObject           | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Add / Save Objects       | index.saveObjects          | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Partial Update an Object | index.partialUpdateObject  | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Partial Update Objects   | index.partialUpdateObjects | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Delete an Object         | index.deleteObject         | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Delete Objects           | index.deleteObjects        | [Batch write operations](https://www.algolia.com/doc/rest-api/search/#batch-write-operations)   | /1/indexes/`{indexName}`/batch                      |
| Delete By                | index.deleteBy             | [Delete by](https://www.algolia.com/doc/rest-api/search/#delete-by)                             | /1/indexes/`{indexName}`/deleteByQuery              |
| Clear Objects            | index.clearObjects         | [Clear objects](https://www.algolia.com/doc/rest-api/search/#clear-objects)                     | /1/indexes/`{indexName}`/clear                      |
| Get an Object            | index.getObject            | [Get object](https://www.algolia.com/doc/rest-api/search/#get-object)                           | /1/indexes/`{indexName}`/`{objectID}`               |
| Get Objects              | index.getObjects           | [Get objects](https://www.algolia.com/doc/rest-api/search/#get-objects)                         | /1/indexes/\*/objects                               |
