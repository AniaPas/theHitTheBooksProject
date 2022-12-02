export interface BookInterface {
    id: number,
    title: string,
    author: string,
    desc: string,
    years: number,
    rating: number[]
}

export interface AuthorInterface {
    name: string,
    books: string[],
}

export type GlobalStateInterface = {
    globalBooks: BookInterface[],
    globalAuthors: AuthorInterface[],
    globalGetBooks: (data: BookInterface[]) => void
    globalGetAuthors: (data: AuthorInterface[]) => void
}

export interface GlobalStoreInterface {
    children : JSX.Element | JSX.Element[]
}