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
      title: "Black Hat Rust",
      author: "Sylvian Kerkour",
      cover: "https://raw.githubusercontent.com/skerkour/black-hat-rust/refs/heads/main/black_hat_rust_cover.png",
      status: "reading",
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      author: "Remzi H. Arpaci-Dusseau, Andrea C. Arpaci-Dusseau",
      cover: "https://assets.lulu.com/cover_thumbs/1/5/15gjeeky-front-shortedge-384.jpg",
      status: "reading",
    },
    {
      title: "Real-World Bug Hunting",
      author: "Peter Yaworski",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562033029i/35545851.jpg",
      status: "to-read",
    },
    {
      title: "Calculus: Early Transcendentals (8th Edition)",
      author: "James Stewart",
      cover: "/books/calc_james.png",
      status: "reading",
    },
  ],

  fiction: [
    {
      title: "The Three Body Problem",
      author: "Cixin Liu",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg",
      status: "reading",
    },
    {
      title: "Not Quite a Ghost",
      author: "Anne Ursu",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688837638i/134221625.jpg",
      status: "reading",
    },
    {
      title: "The Electric State",
      author: "Simon Stålenhag",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1512342315i/36836025.jpg",
      status: "finished",
    },
    {
      title: "Foucault's Pendulum",
      author: "Umbert Eco",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1396645125i/17841.jpg",
      status: "to-read",
    },
    {
      title: "The Dark Forest",
      author: "Cixin Liu",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1412064931i/23168817.jpg",
      status: "to-read",
    },
    {
      title: "Death's End",
      author: "Cixin Liu",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1430330507i/25451264.jpg",
      status: "to-read",
    },
    {
      title: "Tales from the Loop",
      author: "Simon Stålenhag",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686718960i/27404461.jpg",
      status: "finished",
    },
    {
      title: "Things from the Flood",
      author: "Simon Stålenhag",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1468380755i/31094296.jpg",
      status: "finished",
    },
    {
      title: "The Labyrinth",
      author: "Simon Stålenhag",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1607931640i/55818839.jpg",
      status: "finished",
    },
    // {
    //   title: "Europa Mekano",
    //   author: "Simon Stålenhag",
    //   cover: "https://simonstalenhag.se/new/bilderbig/ark_euromek_big.jpg",
    //   status: "to-read",
    // },
  ],
}
