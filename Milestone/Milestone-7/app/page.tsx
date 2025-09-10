// import Image from "next/image"
// import Link from "next/link"
// import { Search, ShoppingCart, User, X } from "lucide-react"

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Announcement Bar */}
//       <div className="bg-black text-white py-3 px-4 flex justify-center items-center relative">
//         <p className="text-sm">
//           Sign up and get 20% off to your first order.{" "}
//           <Link href="#" className="underline font-medium">
//             Sign Up Now
//           </Link>
//         </p>
//         <button className="absolute right-4">
//           <X className="h-4 w-4" />
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
//         <Link href="/" className="text-3xl font-black tracking-tighter">
//           FAKESTORE
//         </Link>

//         <div className="hidden md:flex items-center space-x-8">
//           <div className="relative group">
//             <Link href="#" className="font-medium">
//               Shop
//             </Link>
//             <span className="ml-1">▼</span>
//           </div>
//           <Link href="#" className="font-medium">
//             On Sale
//           </Link>
//           <Link href="#" className="font-medium">
//             New Arrivals
//           </Link>
//           <Link href="#" className="font-medium">
//             Brands
//           </Link>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <div className="flex items-center bg-[#f0f0f0] rounded-full px-4 py-2 w-[300px]">
//               <Search className="h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="bg-transparent border-none outline-none ml-2 w-full"
//               />
//             </div>
//           </div>
//           <Link href="#" aria-label="Shopping cart">
//             <ShoppingCart className="h-6 w-6" />
//           </Link>
//           <Link href="#" aria-label="Account">
//             <User className="h-6 w-6" />
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-[#f2f0f1] relative overflow-hidden">
//         <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 z-10">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
//               FIND CLOTHES
//               <br />
//               THAT MATCH YOUR
//               <br />
//               STYLE PERFECTLY
//             </h1>
//             <p className="text-gray-600 mb-8 max-w-lg">
//               Browse through our diverse range of meticulously crafted garments, designed to bring out your
//               individuality and cater to your sense of style.
//             </p>
//             <Link href="#" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium">
//               Shop Now
//             </Link>

//             <div className="flex flex-wrap mt-16 border-t border-gray-300 pt-8">
//               <div className="pr-12 border-r border-gray-300">
//                 <h3 className="text-4xl font-bold">200+</h3>
//                 <p className="text-gray-600">International Brands</p>
//               </div>
//               <div className="px-12 border-r border-gray-300">
//                 <h3 className="text-4xl font-bold">2,000+</h3>
//                 <p className="text-gray-600">High-Quality Products</p>
//               </div>
//               <div className="pl-12">
//                 <h3 className="text-4xl font-bold">30,000+</h3>
//                 <p className="text-gray-600">Happy Customers</p>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 mt-12 md:mt-0">
//             <Image
//               src="/placeholder.svg?height=600&width=600"
//               alt="Fashion models wearing stylish clothing"
//               width={600}
//               height={600}
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* Brand Showcase */}
//       <section className="bg-black py-12">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-around items-center">
//             <div className="text-white text-4xl font-light">ZARA</div>
//             <div className="text-white text-4xl font-bold">GUCCI</div>
//             <div className="text-white text-4xl font-bold">PRADA</div>
//           </div>
//         </div>
//       </section>

//       {/* New Arrivals Section Header */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black tracking-tighter text-center">NEW ARRIVALS</h2>
//           {/* Product grid would go here */}
//         </div>
//       </section>
//     </main>
//   )
// }
