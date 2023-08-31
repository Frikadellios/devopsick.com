import type Article from "./article";
import type Tag from "./tag";

export default interface Category {
    id: number;
    attributes: {
        name: string;
        slug: string;
        description: string | null;
        createdAt: string;
        updatedAt: string;
        locale: string;
        articles: {
            data: Article[];
        };
        tags: {
            data: Tag[];
        }
    };
}