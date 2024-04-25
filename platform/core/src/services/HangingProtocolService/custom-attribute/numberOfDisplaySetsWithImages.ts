export default (study, extraData) => {
  const ret = extraData?.displaySets?.filter(ds => ds.numImageFrames > 0)?.length;
  return ret;
};
