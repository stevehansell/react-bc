import './App.css';

import React, {Component, useEffect, useState} from 'react';
import Post from "./Post";

export class Comment extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        // make a change to state
    }

    componentDidMount() {
        // Put anything here that needs to happen on component loading
    }

    componentWillUnmount() {
        //
    }

    render() {
        return (
            <div style={{borderTop: "1px solid #999", "margin": "4rem"}}>
                {this.props.body}
            </div>
        );
    }
}

function App() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            const allPosts = await fetchPosts();
            setPosts(allPosts);
        })();
    }, [])

    async function fetchPosts() {
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        return posts.json();
    }

  return (
    <div className="App">
      <header className="App-header">
          <ul>
              { posts.map(post => <li key={post.id}><span onClick={() => setPost(post)}>{post.title}</span></li>)}
          </ul>

          <div style={{backgroundColor: "#fff", color: "#999", width: "100%"}}>
              { post ? <Post key={post.id} title={post.title} body={post.body} postId={post.id} userId={post.userId} /> : null}
          </div>
      </header>
    </div>
  );
}

export default App;
