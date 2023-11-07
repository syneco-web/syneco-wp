import Repository from "./Repository";
import { WpGraphQlPostConst } from "@/constants/WpGraphQlConst";


class PostRepository {
    static getList() {
        return Repository(WpGraphQlPostConst.list).getWp()
    }

    // slugから記事単体を取得

    static getOne({ id }: { // idを引数にとる
        id: string
    }) {
        return Repository(
            WpGraphQlPostConst.one,
            { variables: { id } } // ココが今までと違う！
        ).getWp()
    }

    // 全記事のslugを取得
    static getAllSlugList() {
        return Repository(WpGraphQlPostConst.allSlugList).getWp()
    }
    
}

export default PostRepository