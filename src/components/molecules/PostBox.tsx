// type
import PostOnListType from "@/types/PostOnListType"
// component
import CommImage from "@/components/atoms/image/CommImage"
import CategoryLabel from "@/components/atoms/label/CategoryLabel"
import ArticleOnListHeading from "@/components/atoms/text/ArticleOnListHeading"
import DateText from "@/components/atoms/text/DateText"
import Link from "next/link"

const PostBox = ({ post }: {
    post: PostOnListType
}) => {
    return (
        <article className='shadow-sm shadow-gray-200'>
            <div>
                <Link href={`/post/${post.slug}`}>
                    <a>
                        <CommImage 
                            src={post.featuredImage.url}
                            alt=""
                            className="w-full h-56" />
                    </a>
                </Link>
            </div>
            <div className='py-4 px-5'>
                <div className="flex mb-2">
                    <div className="mr-2">
                        <Link href={`/category/${post.category.slug}`}>

                           <a>
                                <CategoryLabel>{post.category.name}</CategoryLabel>
                            </a>
                        </Link>
                    </div>
                    <DateText>{post.date}</DateText>
                </div>
                <div className="mb-2">
                    <Link href={`/post/${post.slug}`}>
                        <a>
                            <ArticleOnListHeading>{post.title}</ArticleOnListHeading>
                        </a>
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
            </div>
        </article>
    );
}

export default PostBox