import type Author from "./autor";
import type { Media, Quote, RichText, Slider } from "./block";
import type Category from "./category";
import type Tag from "./tag";
import type Image from "./image";

export default interface Article {
    id: number;
    attributes: {
        slug: string;
        title: string;
        excerpt: string;
        content: string;
        readingTime: string;
        visibility: boolean;
        locale: string;
        cover: {
            data: Image | null;
        };
        authorsBio: Author[];
        categories: {
            data: Category[];
        };
        tags: {
            data: Tag[];
        };
        seo: {     
            data: Seo[];
        }
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        blocks: (Media | Slider | RichText | Quote)[] | null;
    };
}

export interface meta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}