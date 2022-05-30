import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";


const Pagination = ({ pageFilter, setPageFilter }) => {
  const { pageNumber, limit, totalCount } = pageFilter;

  const updatePageFilter = (change) => {
    setPageFilter({
      ...pageFilter,
      ...change,
    });
  };
  return (
    <ButtonGroup size="md" isAttached variant="outline" mt={12}>
      <Button
        disabled={pageNumber === 1}
        onClick={() => updatePageFilter({ pageNumber: 1 })}
        data-cy="pagination-first-button"
      >
        First
      </Button>
      <Button
        disabled={pageNumber === 1}
        onClick={() => updatePageFilter({ pageNumber: pageNumber - 1 })}
        data-cy="pagination-previous-button"
      >
        Previous
      </Button>
      <Select
        width="fit-content"
        value={limit}
        onChange={({ target }) => updatePageFilter({ limit: target.value })}
        data-cy="pagination-limit-select"
      >
        <option data-cy="pagination-limit-3" value="3">
          3
        </option>
        <option data-cy="pagination-limit-6" value="6">
          6
        </option>
        <option data-cy="pagination-limit-9" value="9">
          9
        </option>
      </Select>
      <Button
        disabled={pageNumber * limit > totalCount}
        onClick={() => updatePageFilter({ pageNumber: pageNumber + 1 })}
        data-cy="pagination-next-button"
      >
        Next
      </Button>
      <Button
        disabled={pageNumber * limit > totalCount}
        onClick={() =>
          updatePageFilter({ pageNumber: Math.ceil(totalCount / limit) })
        }
        data-cy="pagination-last-button"
      >
        Last
      </Button>
    </ButtonGroup>
  );
};
export default Pagination;