import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCamperList } from "../../redux/campers/selectors.js";

export default function Reviews() {
  const { id } = useParams();
  const campers = useSelector(selectCamperList);
  const camperData = campers.find((camper) => camper.id === id);
  const reviews= camperData.reviews;
  console.log(reviews);
  return (
    <section>
     
      <div>
        <h2>First review - 4.6/5</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum
          architecto sapiente corporis, voluptatem quas voluptatibus fugiat
          nulla commodi quidem, dolorem distinctio inventore blanditiis illo
          tenetur aut enim ex laborum!
        </p>
      </div>
      <div>
        <h2>Second review - 4.8/5</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nihil ea, eaque fugit amet possimus officiis asperiores aperiam facere
          et?
        </p>
      </div>
    </section>
  );
}
