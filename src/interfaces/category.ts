import type Article from "./article";
import type Tag from "./tag";
import type Image from "./image";

export default interface Category {
    id: number;
    attributes: {
        name: string;
        slug: string;
        description: string | null;
        createdAt: string;
        updatedAt: string;
        locale: string;
        slugy: string;
        cover: {
            data: Image | null;
        };
        articles: {
            data: Article[];
        };
        tags: {
            data: Tag[];
        }
    };
}

