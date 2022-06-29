import InfoPost from "../components/InfoPost";
import Link from 'next/link';

export default function FeaturedPost(){
    return(
        <article>
            <div className="h-15 w-60 bg-red-800 mb-4">
                <span className="text-white text-4xl font-bold  px-4 py-2">Hot News</span>
            </div>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <Link href="/detail"><a>
                    <img src="/joan-laporta.png" className="rounded-xl w-full mb-4 md:md-0" />
                    </a></Link>
                </div>
                <div className="lg:w-4/12 w-full md:w-5/12 px-4">
                    <InfoPost
                        category            = "News"
                        date                = "28 Juni 2020"
                        title               = "Barcelona sedang krisis keuangan, jadi susah ingin rekrut pemain. Dikarenakan terganjal aturan Laliga"
                        shortDescription    = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                        authorName          = "Clara Lorensia"
                        authorJob           = "Penulis Konten"
                        authorAvatar        = "/author-1.png"
                    />
                </div>
            </div>
    
            <div className="h-15 w-60 bg-blue-800 mb-4 mt-5">
                <span className="text-white text-4xl font-bold  px-4 py-2">Latest News</span>
            </div>
        </article>
    );

}