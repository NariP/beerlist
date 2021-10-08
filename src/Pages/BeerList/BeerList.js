import { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import {
  RiShoppingBag2Line,
  RiShoppingBag2Fill,
  RiFilter2Fill,
} from 'react-icons/ri';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { tableIcons } from './Secitons';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentColumns, setOrder } from 'Modules/slices/cardHeader';

const BeerList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentColumns = useSelector(getCurrentColumns);
  const [cartState, setCartState] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const onColumnDraggedHandler = (sourceIndex, destinationIndex) => {
    const columnList = [...currentColumns];
    let temp = columnList[sourceIndex];
    columnList[sourceIndex] = columnList[destinationIndex];
    columnList[destinationIndex] = temp;
    dispatch(setOrder(columnList));
  };

  return (
    <Wrapper>
      <h1>BeerList</h1>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={currentColumns.map(current => ({ ...current }))}
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => {
                // alert('You saved ' + rowData.name);
                setCartState(!cartState);
              },
            },
          ]}
          components={{
            Action: props => (
              <IconButton
                onClick={event => props.action.onClick(event, props.data)}
              >
                {/* fixme: 해당 데이터에 맡게 보이게 고치기*/}
                {cartState ? <RiShoppingBag2Fill /> : <RiShoppingBag2Line />}
              </IconButton>
            ),
            Toolbar: props => (
              <ToolBar>
                <MTableToolbar {...props} />
                <IconButton>
                  <RiFilter2Fill />
                </IconButton>
              </ToolBar>
            ),
          }}
          data={fake}
          icons={tableIcons}
          onRowClick={(evt, selectedRow) =>
            setSelectedRow(selectedRow.tableData.id)
          }
          onColumnDragged={onColumnDraggedHandler}
          //---------- table info
          title="맥주 정보"
          style={{
            padding: '0 1em',
            background: theme.color.bgColor,
            color: theme.color.textColor,
          }}
          options={{
            sorting: false,
            search: false,
            actionsColumnIndex: -1,
            paginationType: 'stepped',
            headerStyle: {
              backgroundColor: theme.color.secondaryBgColor,
              color: theme.color.textColor,
            },
            rowStyle: rowData => ({
              backgroundColor:
                selectedRow === rowData.tableData.id
                  ? theme.color.secondaryBgColor
                  : theme.color.bgColor,
            }),
          }}
          localization={{
            header: {
              actions: 'Cart',
            },
            body: {
              emptyDataSourceMessage: '데이터가 없습니다',
            },
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  '& table > tfoot > tr > td': {
    color: theme.color.textColor,
    '& span,svg': {
      color: theme.color.textColor,
    },
  },
}));

const IconButton = styled.button(({ theme }) => ({
  border: 'none',
  backgroundColor: theme.color.bgColor,
  color: theme.color.textColor,
  '&:hover': {
    color: theme.color.primary,
  },
}));
const ToolBar = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  div: {
    overflow: 'visible',
  },
  h6: {
    color: theme.color.textColor,
  },
}));

const fake = [
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
  {
    name: 'Punk IPA 2007 - 2010',
    abv: 5.5,
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    description: 'PosSpiky. Tropical. Hoppy. Tropical. Hoppy....',
  },
  {
    name: '둔켈',
    abv: 6.0,
    tagline: 'Baran',
    description: '음 맛있을걸?',
  },
];
export default BeerList;
