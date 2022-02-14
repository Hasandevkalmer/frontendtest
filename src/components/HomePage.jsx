import Banner from './Banner'
import Keunggulan from './Keunggulan'
import HomeCard from './HomeCard'
import HomeArticle from './HomeArticle'

import CardData from '../assets/dumb-data/cards.json'
import Banner1 from '../assets/img/img-banner2-1.jpg'
import Banner2 from '../assets/img/img-banner2-2.jpg'
import Mitra1 from '../assets/img/img-mitra-1.png'
import Mitra2 from '../assets/img/img-mitra-2.png'
import Mitra3 from '../assets/img/img-mitra-3.png'
import Mitra4 from '../assets/img/img-mitra-4.png'
import Mitra5 from '../assets/img/img-mitra-5.png'
import Coverage1 from '../assets/img/img-media-coverage-1.png'
import Coverage2 from '../assets/img/img-media-coverage-2.png'
import Coverage3 from '../assets/img/img-media-coverage-3.png'
import Coverage4 from '../assets/img/img-media-coverage-4.png'
import Coverage5 from '../assets/img/img-media-coverage-5.png'
import Coverage6 from '../assets/img/img-media-coverage-6.png'
import Coverage7 from '../assets/img/img-media-coverage-7.png'
import Coverage8 from '../assets/img/img-media-coverage-8.png'
import Coverage9 from '../assets/img/img-media-coverage-9.png'
import Coverage10 from '../assets/img/img-media-coverage-10.png'
import Coverage11 from '../assets/img/img-media-coverage-11.png'
import Coverage12 from '../assets/img/img-media-coverage-12.png'
import Post1 from '../assets/img/img-post-1.jpg'

function HomePage({logo, socialMedia}) {
    const keunggulan = [
        "Jaminan harga terbaik",
        "Layanan home service",
        "Cicilan 4x dengan bunga 0%",
        "Pesan dan hasil online"
    ]
    const mitra = [Mitra1, Mitra2, Mitra3, Mitra4, Mitra5]
    const coverages = [Coverage1, Coverage2, Coverage3, Coverage4, Coverage5, Coverage6, Coverage7, Coverage8, Coverage9, Coverage10, Coverage11, Coverage12]
    const posts = [
        {
            thumbnail: Post1,
            judul: "Rapidtest Covid-19 Sekarang, Bayar dengan EMPATKALI"
        },
        {
            thumbnail: Post1,
            judul: "Apa itu Meningitis? Semua yang anda Perlu Tahu"
        },
        {
            thumbnail: Post1,
            judul: "Telat Haid: Gejala, Penyebab, dan Cara Mengatasi"
        },
        {
            thumbnail: Post1,
            judul: "Ingin Sukses? Ketahui 6 Tips Malam Pertama Ini"
        }

    ]

    return (
        <div className="HomePage">
            <Banner />
            <Keunggulan keunggulan={keunggulan} />

            <div className="mx-20">
                <div className="text-center py-16 text-blue-900">
                    <h2 className="text-2xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="mb-16 flex justify-center items-center gap-4 h-60">
                    {CardData.map(item => <HomeCard key={item.id} img={item.thumbnail} title={item.title} harga={item.harga} terpotong={item.terpotong} />)}
                </div>
                <div className="my-16 flex justify-center items-center gap-4">
                    <div className="flex-1">
                        <img src={Banner1} alt="banner 1" className="w-full"/>
                    </div>
                    <div className="flex-1">
                        <img src={Banner2} alt="banner 2" className="w-full"/>
                    </div>
                </div>
            </div>

            <div className="px-20 bg-blue-50">
                <div className="text-center py-16 text-blue-900">
                    <h2 className="text-2xl font-bold mb-6">Mitra Laboratorium Terbaik di Indonesia</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="pb-16 flex justify-center items-center gap-8">
                    {mitra.map((item, index) => <img src={item} alt="mitra" key={index}/>)}
                </div>
            </div>

            <div className="mx-20">
                <div className="text-center py-16 text-blue-900">
                    <h2 className="text-2xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="mb-12 flex justify-center items-center gap-4">
                    {posts.map((post, index) => <HomeArticle key={index} thumbnail={post.thumbnail} title={post.judul} />)}
                </div>
            </div>

            <div className="px-20 flex flex-col items-center">
                <div className="text-center py-16 pb-8 text-gray-900">
                    <h2 className="text-2xl font-bold mb-6">Media Coverage</h2>
                </div>
                <div className="pb-16 flex flex-wrap justify-center items-center gap-4 w-[80%]">
                    {coverages.map((item, index) => <img className="w-[85px]" src={item} alt="Media Coverage" key={index}/>)}
                </div>
            </div>

            <div className="px-20 py-4 flex flex-col justify-center items-center">
                <div className="w-full h-[1.5px] bg-gray-400 rounded mb-10"></div>
                <div className="text-xs mx-24 my-2">
                    <h4 className="font-bold text-xs text-gray-700 my-1 w-full">Toko Furniture Online Terpercaya di Indonesia</h4>
                    <p className="text-xs w-full text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
                <div className="text-xs mx-24 my-2">
                    <h4 className="font-bold text-xs text-gray-700 my-1 w-full">Toko Furniture Online Terpercaya di Indonesia</h4>
                    <p className="text-xs w-full text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
                <div className="text-xs mx-24 my-2">
                    <h4 className="font-bold text-xs text-gray-700 my-1 w-full">Toko Furniture Online Terpercaya di Indonesia</h4>
                    <p className="text-xs w-full text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
                <div className="text-xs mx-24 my-2">
                    <h4 className="font-bold text-xs text-gray-700 my-1 w-full">Toko Furniture Online Terpercaya di Indonesia</h4>
                    <p className="text-xs w-full text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
                <div className="text-xs mx-24 my-2">
                    <h4 className="font-bold text-xs text-gray-700 my-1 w-full">Toko Furniture Online Terpercaya di Indonesia</h4>
                    <p className="text-xs w-full text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
            </div>

            <div className="px-20 py-8 mt-16 bg-blue-600 flex justify-center items-center">
                <div className="flex-1 text-base font-bold text-white text-center">
                    Penawaran newsletter spesial promo dan penawaran terbaik
                </div>
                <div className="flex bg-white rounded w-[40%] overflow-hidden text-sm">
                    <input type="email" className="w-full h-full border-none outline-none p-4" placeholder="Masukan email anda"/>
                    <button type="submit" className="px-4 py-4 bg-orange-500 text-white text-sm font-bold
                        hover:bg-orange-700 active:bg-orange-800">Berlangganan</button>
                </div>
            </div>

            <div className="h-64 px-20 py-8 bg-[#0A315F] flex justify-center items-center text-gray-300 text-sm gap-16">
                <div className="flex-1 h-full">
                    <img src={logo} alt="logo" className="mb-4" />
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.
                    </p>
                </div>
                <div className="flex-1 h-full">
                    <h4 className="mb-4 font-bold text-sm text-white">Lainnya</h4>
                    <ul className="flex flex-col gap-2">
                        <li><a href="/">Syarat & Ketentuan</a></li>
                        <li><a href="/">Karier</a></li>
                        <li><a href="/">Kebijakan Privasi</a></li>
                        <li><a href="/">Cara Kerja</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className="flex-1 h-full">
                    <h4 className="mb-4 font-bold text-sm text-white">Hubungi kami</h4>
                    <ul className="flex flex-col gap-2">
                        <li><a href="mailto:cs@triasse.com" target="_blank">cs@triasse.com</a></li>
                        <li><a href="/">021-1231-124</a></li>
                        <li><a href="/">08-8237-8341</a></li>
                        <li>Senin - Jumat</li>
                        <li>(09.00 - 18.00 WIB)</li>
                    </ul>
                </div>
                <div className="flex-1 h-full">
                    <h4 className="mb-4 font-bold text-sm text-white">Alamat</h4>
                    <ul className="flex flex-col gap-2">
                        <li>Gedung Perkantoran Madison Park,</li>
                        <li>Lantai 6 Unit B. No. 02 Jl. Letjen S. Parman</li>
                        <li>Kav 28, Jakarta 11470</li>
                    </ul>
                </div>
                <div className="flex-1 h-full">
                    <h4 className="mb-4 font-bold text-sm text-white">Media sosial</h4>
                    <ul className="flex flex-row flex-wrap gap-4">
                        {socialMedia.map((sosmed, index) => <li key={index}><a href="/"><img src={sosmed} alt="icons"/></a></li>)}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage