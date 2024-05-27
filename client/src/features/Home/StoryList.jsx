import React from "react";
import { getStories } from "../../api/story";

export default function StoryList() {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const data = await getStories();

      if (data.status === "success") {
        setStories(data.data.stories);
      }
    };

    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-6 p-5 px-10">
      <div>
        <img
          className="rounded-xl"
          src="https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2Fhot.png?alt=media&token=d478baab-c6d5-4ad4-8226-f31ec7281325"
          alt=""
        />
      </div>
      {stories && (
        <>
          <h1>each stories...</h1>
        </>
      )}
    </div>
  );
}
