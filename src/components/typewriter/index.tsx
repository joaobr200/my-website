import React from "react";

interface ITypeWriter {
  text?: string;
}

const TypeWriter = ({ text }: ITypeWriter) => {
  const [words, setWords] = React.useState("");
  const textSplited: string[] = text.split("");

  React.useEffect(() => {
    setWords("");
    textSplited.forEach((word, index) => {
      setTimeout(() => {
        setWords((oldWord) => oldWord + word);
      }, 75 * index);
    });
  }, []);

  return <>{words}</>;
};

export default TypeWriter;
