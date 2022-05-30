import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const AddProduct = ({ add }) => {
  const [form, setForm] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const handeOnChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    add({ ...form, imageSrc: "https://picsum.photos/seed/picsum2/421/261" });
    onClose();
  };

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                name="title"
                data-cy="add-product-title"
                onChange={handeOnChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Category"
                name="category"
                data-cy="add-product-category"
                onChange={handeOnChange}
              >
                <option value="shirt" data-cy="add-product-category-shirt">
                  Shirt
                </option>
                <option value="pant" data-cy="add-product-category-pant">
                  Pant
                </option>
                <option value="jeans" data-cy="add-product-category-jeans">
                  jeans
                </option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup name="gender" data-cy="add-product-gender">
                <Stack direction="row">
                  <Radio
                    value="male"
                    data-cy="add-product-gender-male"
                    onChange={handeOnChange}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="female"
                    data-cy="add-product-gender-female"
                    onChange={handeOnChange}
                  >
                    Female
                  </Radio>
                  <Radio
                    value="unisex"
                    data-cy="add-product-gender-unisex"
                    onChange={handeOnChange}
                  >
                    Unisex
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children="Rs." />
                <Input
                  type="number"
                  placeholder="Price"
                  name="price"
                  data-cy="add-product-price"
                  onChange={handeOnChange}
                />
              </InputGroup>
            </FormControl>
            <Flex flexDirection="row-reverse">
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                data-cy="add-product-submit-button"
                onClick={handleOnSubmit}
              >
                Create
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;