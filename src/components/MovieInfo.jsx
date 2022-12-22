import { useParams } from "react-router";

export default function ProductInfo() {
    const { movieId } = useParams();

    return <div>This is the info page from movie {movieId}</div>;
}
