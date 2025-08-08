import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, User, Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "秋冬コート",
    price: 24800,
    originalPrice: 32000,
    image: "/placeholder.svg?height=400&width=300",
    category: "アウター",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "ニットセーター",
    price: 8900,
    image: "/placeholder.svg?height=400&width=300",
    category: "トップス",
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "ウールスカート",
    price: 12600,
    image: "/placeholder.svg?height=400&width=300",
    category: "ボトムス",
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "レザーブーツ",
    price: 18900,
    originalPrice: 22000,
    image: "/placeholder.svg?height=400&width=300",
    category: "シューズ",
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "カシミアマフラー",
    price: 15800,
    image: "/placeholder.svg?height=400&width=300",
    category: "アクセサリー",
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "デニムジャケット",
    price: 11200,
    image: "/placeholder.svg?height=400&width=300",
    category: "アウター",
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: "シルクブラウス",
    price: 16800,
    originalPrice: 19800,
    image: "/placeholder.svg?height=400&width=300",
    category: "トップス",
    isNew: true,
    isSale: true
  },
  {
    id: 8,
    name: "ハイウエストパンツ",
    price: 9800,
    image: "/placeholder.svg?height=400&width=300",
    category: "ボトムス",
    isNew: false,
    isSale: false
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              FASHION STORE
            </Link>
            
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="商品を検索..." className="pl-10" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            秋冬コレクション
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            最新のトレンドアイテムで、あなたのスタイルを完成させよう
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            コレクションを見る
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">最新アイテム</h2>
            <Button variant="outline">
              すべて見る
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FASHION STORE</h3>
              <p className="text-slate-300">
                最高品質のファッションアイテムをお届けします。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">カテゴリー</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="#" className="hover:text-white">アウター</Link></li>
                <li><Link href="#" className="hover:text-white">トップス</Link></li>
                <li><Link href="#" className="hover:text-white">ボトムス</Link></li>
                <li><Link href="#" className="hover:text-white">シューズ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="#" className="hover:text-white">お問い合わせ</Link></li>
                <li><Link href="#" className="hover:text-white">配送について</Link></li>
                <li><Link href="#" className="hover:text-white">返品・交換</Link></li>
                <li><Link href="#" className="hover:text-white">サイズガイド</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">フォローする</h4>
              <p className="text-slate-300 mb-4">
                最新情報をお届けします
              </p>
              <div className="flex space-x-2">
                <Input placeholder="メールアドレス" className="bg-slate-800 border-slate-700" />
                <Button>登録</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 FASHION STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
