export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1
          className="text-4xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 text-center
        "
        >
          Welcome to Pals
        </h1>
        <p className="text-lg">
          Pals is an app for pals to share their blogs, photos, and more.
        </p>
      </div>
    </>
  );
}
