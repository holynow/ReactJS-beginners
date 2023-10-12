import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  return <div>{loading ? <h1>Loading...</h1> : <h1>Detail</h1>}</div>;
}

export default Detail;
