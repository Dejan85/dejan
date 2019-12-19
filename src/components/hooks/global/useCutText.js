const useCutText = (string, num) => {
  let text = string.slice(0, num);
  return text.padEnd(text.length + 3, ".");
};

export default useCutText;
