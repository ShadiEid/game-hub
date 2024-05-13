import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((platform) => platform.id === platformId);
};

export default usePlatform;
