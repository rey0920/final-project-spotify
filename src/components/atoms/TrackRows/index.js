export default function TrackRows({ track }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {track.artists.map((artist) => artist.name).join(", ")} -{" "}
        {track.album.name}
      </td>
      <td className="px-6 py-4">{track.popularity}</td>
    </tr>
  );
}
