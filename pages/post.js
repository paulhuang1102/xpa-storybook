import Head from 'next/head';

const Post = props => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
             <h1>
                {props.title}
            </h1>
        </div>
    ) 
}

Post.getInitialProps = async (req) => {
    return {
        title: req.query.title
    }
}

export default Post;

