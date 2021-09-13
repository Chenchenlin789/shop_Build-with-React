import books from "../img/01-Books.png";
import "./Section.css";

const Section = () => {
  return (
    <section>
      <img src={books} alt=""></img>
      {/* <img src="../img/46-Home_bm.png" alt=""></img> */}
      <p>Vifa Copenhagen 2.0 Loudspeaker</p>
      <p>$799.00 </p>
    </section>
  );
};

export default Section;
