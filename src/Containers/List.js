import React, { useEffect, useState } from "react";
import { GetData } from "../Peticiones/actions";
import { url } from "../helpers/url";
import { Button, Card, Modal } from "antd";
import Details from "../Components/Details";
const List = () => {
  const [data, setData] = useState();
  const [movieActual, setMovieActual] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (movie) => {
    setIsModalOpen(true);  
    setMovieActual(movie);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function Cargar() {
      const resp = await GetData(url);
      setData(resp);
    }
    Cargar();
  }, []);

  return (
    <div>
      {data?.map((d) => (
        <Card
          key={d?.id}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={d?.Poster} />}
        >
          <h1>{d?.Title}</h1>
          <p>{d?.Description}</p>
          <Button type="primary" onClick={() => showModal(d)}>
            Ver Más
          </Button>
        </Card>
      ))}
      <Modal
        title={movieActual?.Title}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Details movie={movieActual} />
      </Modal>
    </div>
  );
};

export default List;
