import React, { FunctionComponent } from "react";
import BlurImage from "./BlurImage";

interface Props {
  alt_description: string
  url: string
}

const ImageItem: FunctionComponent<Props> = ({alt_description, url}) => {
  return (
    <div className="flex flex-col gap-4 relative group">
      <BlurImage alt={alt_description} src={url} />
    </div>
  );
};

export default ImageItem;
