import * as auth from "../../../spotify";

export default function Login() {
  let accessUrl = auth.accessUrl;
  // const AUTH_URL =
  //   "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <div className="text-center">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        className="w-1/3 mx-auto mt-32 mb-32"
      />
      <a href={accessUrl} className="btn-green px-24 py-4">
        Login Spotify
      </a>
    </div>
  );
}
