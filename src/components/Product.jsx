import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  Flex,
} from "@chakra-ui/react";

const Product = ({ imageSrc, title, category, price, gender }) => (
  <Stack boxShadow={"2xl"} rounded={"lg"} p={6} data-cy="product">
    <Image
      rounded={"lg"}
      height={230}
      objectFit={"cover"}
      src={imageSrc}
      data-cy="product-image"
    />

    <Flex justifyContent={"space-between"}>
      <Text
        color="teal.600"
        textTransform="uppercase"
        data-cy="product-category"
      >
        {category}
      </Text>
      {gender && (
        <Tag
          size="sm"
          variant="subtle"
          colorScheme="cyan"
          data-cy="product-gender"
        >
          <TagLabel textTransform="uppercase">{gender}</TagLabel>
        </Tag>
      )}
    </Flex>

    <Heading
      color="teal.300"
      size="md"
      textTransform="capitalize"
      data-cy="product-title"
    >
      {title}
    </Heading>
    <Box data-cy="product-price">
      {"Rs. "}
      {price}
      <Box as="span" color="gray.600" fontSize="sm">
        / unit
      </Box>
    </Box>
  </Stack>
);

export default Product;