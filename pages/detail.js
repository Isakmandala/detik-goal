import Container from "../components/Container";
import Layout from "../components/Layout";
import PostMetaTitle from "../components/PostMetaTitle";
import PostAuthor from "../components/PostAuthor";
import Head from "next/head";

export default function Detail(){
    return(
        <Layout>
            <Head>
        <title>Detail &mdash; Detik Goal</title>
      </Head>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle 
                    category="News"
                    date="28 Juni 2022"
                    title="Barcelona sedang krisis keuangan, jadi susah ingin rekrut pemain. Dikarenakan terganjal aturan Laliga"
                    center
                    />
                    <PostAuthor 
                    authorName="Clara Florensia"
                    authorJob="Penulis Konten"
                    authorAvatar="/author-1.png"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/joan-laporta.png" className="w-full rounded-lg" />
                </div>
                <div className="md:w-8/12 w-full mx-auto leading-relaxed">
                    <p className="text-3xl mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="mb-4 text-2xl">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p className="text-2xl mb-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <p className="text-2xl">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Container>
        </Layout>
    );
}