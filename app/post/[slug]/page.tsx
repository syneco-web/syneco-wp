import { NextPage } from "next"
// type
import PostType from "@/types/PostType"
// service
import PostService from "@/services/PostService"
// hooks
// import usePostSwr from "@/hooks/swr/usePostSwr"
// component
import CommImage from "@/components/atoms/image/CommImage"
import Layout from "@/components/templates/Layout"
import CategoryLabel from "@/components/atoms/label/CategoryLabel"
import DateText from "@/components/atoms/text/DateText"
import PostHeading from "@/components/atoms/text/PostHeading"
import Link from "next/link"

interface PostPageProps {
    params: {
      slug: string
    }
  }

const Post = async ({ params }: PostPageProps) => {
      
    const slug = decodeURIComponent(params.slug);

    const staticPost = await PostService.getOne({ id: slug })
    const post = staticPost

    return (
        <div className="w-main mx-auto">

            <article>
                <div className="mb-4">
                    <CommImage
                        src={post!.featuredImage.url}
                        alt=""
                        className="w-full h-96" />
                </div>
                <div className="flex mb-4">
                    <div className="mr-3">
                    <Link href={`/category/${post!.category.slug}`}>
                            <CategoryLabel>{post!.category.name}</CategoryLabel>
                        </Link>
                    </div>
                    <DateText>{post!.date}</DateText>
                </div>
                <div className="mb-6">
                    <PostHeading>{post!.title}</PostHeading>
                </div>
                <div dangerouslySetInnerHTML={{__html: post!.content}}></div>
            </article>
        </div>
    )
}

export default Post

export const revalidate = 10