import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";


function App() {







  const { count, title,posts } = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts:state.posts
  }),shallow);

  const {increment,getPosts,clearStore,multiply} = useCounterStore()

useEffect(() => {
  getPosts()

}, [])


  return (
    <>
     <div className="infoState"> <h2>Counter: {count}</h2>
      <h2>Title: {title}</h2></div>
      <div className="buttons">
      <button onClick={()=>increment(10)}>Increment by 10</button>
      <button onClick={()=>multiply(2)}>multiply by 2</button>
      <button onClick={clearStore}>Clear</button>

      </div>

      <hr/>
        <h1>Cards</h1>
      <div className="posts">
        {/* {JSON.stringify(posts)} */}
        {
          posts?.map((post=>(
            <div className="post" key={post.id} >
            <h3>{post.id}</h3>
            <p>{post.title}</p>
           </div>
          )))
        }
      </div>
    </>
  );
}

export default App;
