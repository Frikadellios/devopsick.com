import type Article from "./article";
import type Category from "./category";

export default interface Tag {
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
        categories: {
            data: Category[];
        }
    };
}