import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Albums() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://albums-collection-service.herokuapp.com/albums").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>album_id</th>
            <th>title</th>
            <th>artist</th>
            <th>genre</th>
            <th>label</th>
            <th>songs</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item?.album_id}</td>
                <td>{item?.title}</td>
                <td>{item?.artist}</td>
                <td>{item?.genre}</td>
                <td>{item?.label}</td>
                <td>{item?.songs}</td>
                <td>{item?.year}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  );
}

export default Albums;