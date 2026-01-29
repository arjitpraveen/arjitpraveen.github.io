export type BookStatus =
  | 'reading'
  | 'to-read'
  | 'finished'
  | 'dropped'

export type Book = {
  title: string
  author: string
  cover: string
  status: BookStatus
}

export const books: {
  academic: Book[]
  fiction: Book[]
} = {
  academic: [
    {
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, Stein",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
      status: "reading",
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      author: "Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau",
      cover: "https://imgs.search.brave.com/k9mnyUM7norSlMVWawjCbH9mq6I-2j_ooZ0V-fuFlB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFsVHNELUxHb0wu/anBn",
      status: "to-read",
    },
    {
      title: "Computer Networking: A Top-Down Approach",
      author: "Kurose & Ross",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51x5NY1kE+L._SX396_BO1,204,203,200_.jpg",
      status: "finished",
    },
  ],

  fiction: [
    {
      title: "1984",
      author: "George Orwell",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41KD2-7-PNL._SX324_BO1,204,203,200_.jpg",
      status: "finished",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51aEhwAtYaL._SX320_BO1,204,203,200_.jpg",
      status: "to-read",
    },
  ],
}
