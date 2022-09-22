import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../store/actions/GetPost';
const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (error === null) {
    <p>Hubo un error</p>;
  }
  return (
    <>
      <h1>Este es un componente que va a traer los posts</h1>
      {loading ? (
        <p>Cargando</p>
      ) : (
        posts.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Posts;
