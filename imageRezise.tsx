import { Box } from "@chakra-ui/react";

export interface iData {
  image: string;
  xPosition: string | number;
  yPosition: string | number;
  scale: string | number;
  width: string;
  height: string;
}

export const ImageScale: React.FC<iData> = ({
  image,
  xPosition,
  yPosition,
  scale,
  width,
  height,
}) => {
  return (
    <>
      <Box
        width={width}
        height={height}
        overflow="hidden"
        padding="0"
        borderRadius="50%"
        border="0px solid #000"
        bg="#fff"
      >
        <Box>
          <img src={image} className="img" />
        </Box>
      </Box>
      <style jsx>{`
        .img {
          margin: 0;
          transform: translate(${`${xPosition}px`}, ${`${yPosition}px`})
            scale(${`${scale}`});
        }
      `}</style>
    </>
  );
};

export const ImageScale2 = () => {
  console.log("sds");
};

// localStorage.setItem("xPosition", String(xPosition));
// localStorage.setItem("yPosition", String(yPosition));
// localStorage.setItem("scale", String(scale));
