export type BookStatus = 'reading' | 'to-read' | 'finished' | 'dropped'

export type Book = {
  title: string
  author: string
  cover: string
  status: BookStatus
}

export const books = {
  academic: [
    {
      title: 'Introduction to Algorithms',
      author: 'Cormen, Leiserson, Rivest, Stein',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'reading',
    },
    {
      title: 'Operating Systems: Three Easy Pieces',
      author: 'Remzi H. Arpaci-Dusseau',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'to-read',
    },
    {
      title: 'Computer Networking: A Top-Down Approach',
      author: 'Kurose & Ross',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'finished',
    },
    {
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Russell & Norvig',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'dropped',
    },
  ],

  fiction: [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'reading',
    },
    {
      title: '1984',
      author: 'George Orwell',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'finished',
    },
    {
      title: 'Neuromancer',
      author: 'William Gibson',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: 'to-read',
    },
  ],
}
