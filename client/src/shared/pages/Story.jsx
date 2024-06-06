import React from "react";
import Story from "../../features/StoryPage/components/Story";
import { useParams } from "react-router-dom";
import { getStory } from "../../api/story";
import Spinner from "../../features/common/Spinner";

const StoryPage = () => {
  const { slug } = useParams();

  const [story, setStory] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const res = await getStory(slug);

      setStory(res.data);
      setIsLoading(false);
    };

    getData();
  }, [slug]);

  if (isLoading) return Spinner();

  if (!story.name) return <div className=" text-center text-6xl p-10">The story do not exist</div>;
  else 
    return (
      <div className="py-10">
        <Story storyData={story} />
      </div>
    );
};

export default StoryPage;
