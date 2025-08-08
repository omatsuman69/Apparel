import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, ShoppingBag, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "秋冬コート",
    price: 24800,
    originalPrice: 32000,
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500"
    ],
    category: "アウター",
    description: "上質なウール素材を使用した、エレガントな秋冬コート。シンプルなデザインながらも洗練されたシルエットで、どんなスタイルにも合わせやすい一着です。",
    features: [
      "100%ウール素材",
      "裏地付き",
      "ドライクリーニング対応",
      "日本製"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["ブラック", "ネイビー", "キャメル"],
    rating: 4.5,
    reviews: 128,
    isNew: true,
    isSale: true,
    stock: 15
  },
  {
    id: 2,
    name: "ニットセーター",
    price: 8900,
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500"
    ],
    category: "トップス",
    description: "柔らかなカシミア混のニットセーター。着心地の良さと暖かさを兼ね備えた、秋冬の定番アイテムです。",
    features: [
      "カシミア30%混",
      "手洗い可能",
      "防縮加工",
      "韓国製"
    ],
    sizes: ["S", "M", "L"],
    colors: ["ホワイト", "グレー", "ベージュ"],
    rating: 4.3,
    reviews: 89,
    isNew: true,
    isSale: false,
    stock: 8
  }
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0
    }).format(price)
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              FASHION STORE
            </Link>
            <div className="flex items-center space-x-4">
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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            商品一覧に戻る
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={600}
                className="w-full rounded-lg"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">NEW</Badge>
                )}
                {product.isSale && (
                  <Badge variant="destructive">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Thumbnail images */}
            <div className="flex gap-2">
              {product.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 2}`}
                  width={100}
                  height={120}
                  className="rounded border cursor-pointer hover:border-primary"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews}件のレビュー)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">商品説明</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-2">特徴</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-2">サイズ</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" size="sm">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-2">カラー</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" size="sm">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="text-sm text-muted-foreground">
              残り{product.stock}点
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <ShoppingBag className="h-5 w-5 mr-2" />
                カートに追加
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="h-5 w-5 mr-2" />
                  お気に入り
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="h-5 w-5 mr-2" />
                  シェア
                </Button>
              </div>
            </div>

            <Separator />

            {/* Service Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span>全国送料無料（5,000円以上）</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <span>30日間返品・交換保証</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span>品質保証付き</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
