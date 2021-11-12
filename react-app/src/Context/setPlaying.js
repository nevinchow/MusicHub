import { createContext, useState, useContext } from 'react';

export const PlayContext = createContext();
export const usePlay=()=>useContext(PlayContext)

export default function PlayProvider(props) {
  const [play, setPlay] = useState(false);

  return (
    <PlayContext.Provider
      value={{
        play,
        setPlay
      }}
    >
      {props.children}
    </PlayContext.Provider>
  )
}