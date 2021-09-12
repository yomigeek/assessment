import React from 'react';
import styled from 'styled-components';

const FilterForm = styled.div`
  display: flex;
  padding: 20px;
  background: #fdf4ee;
  color: #f26351;
  border: 2px solid #fdf4ee;
  font-size: 12px;
  justify-content: flex-start;
`;

const FilterSelect = styled.select`
  border-radius: 12px;
  height: 40px;
  position: relative;
  top: -12px;
  background: #fff;
  color: #0c3e5d;
  padding: 10px;
  border: none;
`;

const FilterTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const ClearFilter = styled.div`
  font-weight: bold;
  margin-left: 30px;
  cursor: pointer;
`;

const Filter = ({
  title,
  options,
  value,
  onChangeHandler,
  filterTotal,
  clearFilterHandler
}) => {
  return (
    <FilterForm>
      <FilterTitle>{title}</FilterTitle>
      <FilterSelect defaultValue={value?.toLowerCase()} onChange={onChangeHandler}>
        <option value='select'>Select a Category</option>
        {options.map((optionTitle) => {
          return (
            <option value={optionTitle?.toLowerCase()} key={optionTitle}>
              {optionTitle}
            </option>
          );
        })}
      </FilterSelect>
      {filterTotal > 0 ? (
        <ClearFilter onClick={clearFilterHandler}>Clear Filter [x]</ClearFilter>
      ) : (
        ''
      )}
    </FilterForm>
  );
};

export default Filter;
