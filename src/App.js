import Login from "./components/organisms/Login";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import "./index.css";
import SpotifyWebApi from "spotify-web-api-js";
import MusicPlayer from "./components/organisms/MusicPlayer";

const s = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);

      s.setAccessToken(_token);

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getPlaylist("53oNdOPUouKmbmBzvvmMgV").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

    console.log(token);
    console.log(s);
  }, []);
  return (
    <div className="App">
      <div className="flex">
        {token ? <MusicPlayer spotify={s} /> : <Login />}
      </div>
    </div>
  );
}

export default App;
