import SideBar from "../../molecules/SideBar";
import { useStateValue } from "../../../StateProvider";
import TrackRows from "../../atoms/TrackRows";

export default function MusicPlayer({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  console.log(spotify);

  return (
    <>
      <SideBar />

      <div className="w-full h-full mx-10 overflow-y-auto">
        <div className="flex mb-10">
          <img src={discover_weekly?.images[0].url} alt="" className="w-64" />
          <div className="ml-4 mt-24">
            <strong>PLAYLIST</strong>
            <h1 className="text-6xl font-bold">Discover Weekly</h1>
            <p className="text-gray-400">{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody>
              {discover_weekly?.tracks.items.map((item) => (
                <TrackRows key={item.id} track={item.track} />
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex items-center justify-center">Content...</div> */}
      </div>
    </>
  );
}
