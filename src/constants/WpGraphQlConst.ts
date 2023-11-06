export class WpGraphQlPostConst {
    static list = `query PostListQuery {
      posts {
        edges {
          node {
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            slug
            title
          }
        }
      }
    }`

    // slugから記事単体を持ってくる
    static one = `query PostQuery($id: ID!) {
      post(id: $id, idType: SLUG) {
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
        title
      }
    }`

    // 全記事のslugを持ってくる
    static allSlugList = `query PostAllSlugListQuery {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }`
    
}
