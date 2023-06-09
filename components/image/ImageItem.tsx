import React, { FunctionComponent } from "react";
import BlurImage from "./BlurImage";

interface Props {
  id: number,
  alt_description: string
  urls: any
}

const ImageItem: FunctionComponent<Props> = ({id, alt_description, urls}) => {
  return (
    <div key={id} className="flex flex-col gap-4 relative group">
      <BlurImage alt={alt_description} src={urls.small} />
    </div>
  );
};

export default ImageItem;
