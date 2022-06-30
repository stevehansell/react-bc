import {useEffect, useState} from "react";
import {Comment} from "./App";

function Post(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            async function fetchComments(id) {
                console.log('Fetching')
                const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                return result.json();
            }

            const comments = await fetchComments(props.postId);
            setComments(comments);
        })();
    }, [props.postId])

    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <p>User id: {props.userId}</p>
            <p>Post id: {props.postId}</p>

            <h4>Comments</h4>

            {
                comments.map(comment => <Comment key={comment.id} body={comment.body} /> )
            }
        </>
    )
}

export default Post;