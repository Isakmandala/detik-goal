import PostMetaTitle from "../components/PostMetaTitle";
import PostAuthor from "../components/PostAuthor";

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}){
    return(
<>
        <PostMetaTitle 
        category={category}
        title={title}
        date={date}
        />
        <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
        <PostAuthor 
        authorName={authorName}
        authorJob={authorJob}
        authorAvatar={authorAvatar}
        />
</>
);
}