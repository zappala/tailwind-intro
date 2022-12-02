import uintas from './scott-osborn-iuRrwjMJZJ4-unsplash.jpg'

function App() {
  return (
    // mobile first styles:
    // bg-slate-100 rounded-xl p-8 

    // responsive styles:
    // md:flex md:p-0 

    // dark mode styles:
    // dark:bg-slate-800

    <figure className="bg-slate-100 rounded-xl p-8 md:flex md:p-0 dark:bg-slate-800">
      {
        // mobile first styles:
        // w-24 h-24 rounded-full mx-auto

        // responsive styles:
        // md:w-48 md:h-auto md:rounded-none
      }
      <img className="w-24 h-24 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none" src={uintas} alt="woman hiking in the Uinta Mountains" width="384" height="512" />
      {
        // mobile styles:
        // pt-6 text-center space-y-4

        // responsive styles:
        // md:p-8 
      }
      <div className="pt-6 text-center space-y-4 md:p-8 ">
        <blockquote>
          {
            // mobile styles:
            // text-lg font-medium

            // dark mode styles:
            // dark:text-gray-200
          }
          <p className="text-lg font-medium dark:text-gray-200">
            Everyone should hike in the Uinta Mountains someday. It's one of the great unspoiled wilderness areas of our country.
          </p>
        </blockquote>
        {
          // mobile styles:
          // font-medium
        }
        <figcaption className="font-medium">
          {
            // mobile styles:
            // text-sky-500

            // dark mode styles:
            // dark:text-sky-400
          }
          <div className="text-sky-500 dark:text-sky-400">
            Photo by <a href="https://unsplash.com/@scottosbornphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Scott Osborn</a> on <a href="https://unsplash.com/s/photos/uintas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

          </div>
        </figcaption>
      </div>
    </figure >
  );
}

export default App;
