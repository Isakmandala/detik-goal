import Container from "../components/Container";
import Layout from "../components/Layout";
import CardPost from "../components/CardPost";
import mockPosts from "../utils/posts.json";
import { useState } from 'react';
import SectionHeader from "../components/SectionHeader";
import Head from "next/head";

export default function Posts(){
    const [posts, setPosts] = useState(mockPosts);
    return(
        <Layout >
            <Head>
        <title>Posts &mdash; Detik Goal</title>
      </Head>
            <Container>
                <SectionHeader>Berita Transfer</SectionHeader>
                {!posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-6xl sm:text-2xl w-full">Berita tidak ditemukan.</h2>
                        <p className="text-2xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">Kami tidak dapat menemukan `HAHAHA` di dalam mesin pencarian.</p>
                    </div>
                ) : (
    <div className="flex -mx-4 flex-wrap mt-6 ">
          {posts.map(post => (
          <div key={post.Id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
          </div>
          ))}
    </div>
        )}
            </Container>
        </Layout>
    );
}