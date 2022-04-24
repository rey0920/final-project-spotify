export default function SideBar() {
  return (
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-white mb-10 mt-14">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            className="w-32 mx-auto"
          />
        </h2>

        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a
                  className="flex items-center px-4 py-2 text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center px-4 py-2 mt-5 text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">Search</span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center px-4 py-2 mt-5 text-gray-200"
                  href="#"
                >
                  <span className="mx-4 font-medium">Your Library</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
