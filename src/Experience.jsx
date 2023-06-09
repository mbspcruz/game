import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { useControls } from "leva";
import { Physics, Debug } from "@react-three/rapier";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.jsx";
import Effects from "./Effects.jsx";

export default function Experience() {
  //   const {} = useControls();
  const blocksCount = useGame((state) => {
    return state.blocksCount;
  });
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      <color args={["#252731"]} attach="background" />
      <Physics>
        <Lights />

        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      <Effects />
    </>
  );
}
