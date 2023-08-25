import "./styles.css";
function Cup({ guest }) {
  return <h1> Tea cup for #{guest}</h1>;
}
export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
