// import books from "../img/01-Books.png";
import "./Section.css";
// const Section = () => {
//   return (
//     <figure>
//       <img src={books} alt=""></img>

//       <figcaption>
//         <section>
//           {/* <img src="../img/46-Home_bm.png" alt=""></img> */}
//           <h4>Vifa Copenhagen 2.0 Loudspeaker</h4>
//           <p>$799.00 </p>
//         </section>
//       </figcaption>
//     </figure>
//   );
// };

const Section = (props) => {
  return (
    <figure>
      <img src={props.imgUrl} alt="Movie"></img>
      <figcaption>
        <section>
          <h4>{props.itemName}</h4>
          <p>{props.itemPrice} </p>
        </section>
      </figcaption>
    </figure>
  );
};

export default Section;
