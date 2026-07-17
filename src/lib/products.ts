export type Product = {
  id: string
  name: string
  arabic?: string
  family: string
  description: string
  notes: string[]
  price: string
  color: string
  colorDeep: string
  image: string
}

export const products: Product[] = [
  {
    id: 'oud-noir',
    name: 'Oud Pour Klassik',
    family: 'Boisé · Fumé',
    description:
      "L'oud sombre s'ouvre lentement sur la braise, adouci par le cacao noir et une touche de rose.",
    notes: ['Cambodian Oud', 'Smoked Cardamom', 'Dark Rose'],
    price: '25.000 FCFA',
    color: '#8a5a3a',
    colorDeep: '#4a2f1c',
    image: 'src/assets/products/oud.jpeg',
  },
  {
    id: 'sapphire-veil',
    name: 'Fresh Sugar',
    family: 'Aquatique · Ambre',
    description:
      'L\'air marin se mêle à l\'ambre chaud, comme un voile bleu porté à la lumière du matin.',
    notes: ['Bergamot', 'Sea Salt', 'White Amber'],
    price: '15.000 FCFA',
    color: '#3f6f9e',
    colorDeep: '#1e3c57',
    image: 'src/assets/products/fresh.jpeg',
  },
  {
    id: 'golden-hour',
    name: 'Hayaati',
    family: 'Ambre · Miel',
    description:
      'Safran, datte miellée et santal chaleureux — une douceur lumineuse au cœur d\'une première lumière.',
    notes: ['Saffron', 'Date Nectar', 'Sandalwood'],
    price: '10.000 FCFA',
    color: '#d9a13c',
    colorDeep: '#7a5417',
    image: 'src/assets/products/hayati.jpeg',
  },
  {
    id: 'blush-mirage',
    name: 'Mousuf',
    family: 'Floral · Musc',
    description:
      'Pivoine rose et litchi suspendus dans un musc soyeux, comme une brume de désert au crépuscule.',
    notes: ['Peony', 'Lychee', 'White Musk'],
    price: '8.500 FCFA',
    color: '#d98fa0',
    colorDeep: '#7a3f4c',
    image: 'src/assets/products/mawsouf.jpeg',
  },
  {
    id: 'velvet-orchid',
    name: 'Dhilal Al Ward',
    family: 'Floral · Oud',
    description:
      'Orchidée noire et prune enveloppées d\'un oud velouté et d\'une vanille fondante.',
    notes: ['Black Orchid', 'Plum', 'Vanilla Oud'],
    price: '15.000 FCFA',
    color: '#7a4f8c',
    colorDeep: '#3f2650',
    image: 'src/assets/products/ward.jpeg',
  },
]
