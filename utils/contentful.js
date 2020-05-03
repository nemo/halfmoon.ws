import * as contentful from 'contentful';

const client = contentful.createClient({
  space: "p1r59w2hmg1q",
  accessToken: "4mdi24P8M3Tkc04Isplh8o69TS93c4SOKxtkTd8oLDY"
})

const clientDraft = contentful.createClient({
  defaultHostname: 'preview.contentful.com',
  space: "4dk8sid91dce",
  accessToken: 'MO9pJBJpr6yKUpHlmodiQmmlv2Q03MUEMw4O08zxdQs'
})

export const processResponse = (results) => {
  const items = (results && results.items) || [results]

  return items.map(entry => ({
    ...entry.fields,
    id: entry.sys.id
  }))
}

export default client
