// type
import PostOnListType from "@/types/PostOnListType";
// repository
import RepositoryFactory from "@/repositories/RepositoryFactory";

class PostService {
    static async getList(): Promise<PostOnListType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
	        // ↓　型指定することでわざわざ全項目書かないといけなくなるが、変更があった時エラーを出してくれるので便利
                const post: PostOnListType = {
                    id: data.node.id,
                    title: data.node.title,
                    slug: data.node.slug,
                    date: data.node.date,
                    excerpt: data.node.excerpt,
                    featuredImage: {
                        url: data.node.featuredImage.node.sourceUrl
                    },
                    category: {
                        slug: data.node.categories.edges[0].node.slug,
                        name: data.node.categories.edges[0].node.name
                    }
                }
                return post
            })
        } catch {
            return []
        }
    }

    // slugから記事単体を取得
    static async getOne({ id }: {
        id: string
    }): Promise<PostOnListType | null> { // エラーがあればnullを返す
        try {
            const res = await RepositoryFactory.post.getOne({ id }) // idを引数に取る
            const data = res.data.data.post
            const post: PostOnListType = {
                id: data.id,
                title: data.title,
                slug: data.slug,
                date: data.date,
                // content: data.content,
                excerpt: data.excerpt,
                featuredImage: {
                    url: data.featuredImage.node.sourceUrl
                },
                category: {
                    slug: data.categories.edges[0].node.slug,
                    name: data.categories.edges[0].node.name
                }
            }
            return post // 配列ではなくPostOnListTypeを返す
        } catch {
            return null // エラーがあればnullを返す
        }
    }

    // 全記事のslugを取得
    static async getAllSlugList(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.post.getAllSlugList()
            return res.data.data.posts.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }
}

export default PostService