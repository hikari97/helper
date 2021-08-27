import * as CU from "@chakra-ui/react";

interface IFunction {
  prev: Function;
  next: Function;
  page: number;
}

export const PageButton: React.FC<IFunction> = ({ prev, next, page }) => {
  return (
    <CU.Box
      maxW="100px"
      position="absolute"
      right="80px"
      mt="10px"
      mr="20px"
      pb={{ base: "20px", lg: "0px" }}
    >
      <CU.Flex>
        <CU.Box
          as="button"
          onClick={() => prev()}
          border="1px solid #D5D4D4"
          style={{
            cursor: "pointer",
            padding: "2px 15px",
            marginRight: 5,
            borderRadius: 6,
            fontWeight: 500,
            fontSize: 18,
          }}
          _hover={{
            backgroundColor: "rgba(255,95, 95,0.9)",
            color: "#fff",
            transitionDuration: "1s",
          }}
          color="#707070"
        >
          Prev
        </CU.Box>
        <CU.Spacer />
        <CU.Box p="5px 15px 5px 10px" fontSize="20px">
          {page}
        </CU.Box>
        <CU.Spacer />
        <CU.Box
          as="button"
          onClick={() => next()}
          border="1px solid #D5D4D4"
          style={{
            cursor: "pointer",
            padding: "2px 15px",
            borderRadius: 6,
            fontWeight: 500,
            fontSize: 18,
          }}
          _hover={{
            backgroundColor: "rgba(255,95, 95,0.9)",
            color: "#fff",
            transitionDuration: "1s",
          }}
          color="#707070"
        >
          Next
        </CU.Box>
      </CU.Flex>
    </CU.Box>
  );
};
