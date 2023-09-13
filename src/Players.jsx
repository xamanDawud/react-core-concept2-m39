import { useState } from "react";

export default function Players() {
  let [player, setPlayer] = useState(0);

  let addHndler = () => {
    let increse = player + 1;
    setPlayer(increse);
  };

  let reducePlayer = () => {
    let reduce = player - 1;
    setPlayer(reduce);
  };

  return (
    <div
      style={{
        border: "2px solid purple",
        padding: "20px",
        background: "aquamarine",
      }}
    >
      <h3>Players: {player}</h3>
      <button onClick={addHndler}>Add</button>
      <button onClick={reducePlayer}>Reduce</button>
    </div>
  );
}
