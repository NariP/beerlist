import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable, { MTableToolbar } from 'material-table';
import { RiShoppingBag2Line, RiShoppingBag2Fill } from 'react-icons/ri';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { Modal, ModalInner, CloseButton } from 'components';
import {
  tableIcons,
  Filter,
  BeerDetail,
  setLocalItemList,
  findLocalItemById,
  deleteLocalItemById,
} from './Secitons';
import { getCurrentColumns, setOrder } from 'Modules/slices/cardHeader';
import {
  beersRequest,
  getBeers,
  getBeerRequestState,
} from 'Modules/slices/Beers';

const BeerList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentColumns = useSelector(getCurrentColumns);
  const beersInfo = useSelector(getBeers);
  const beerRequestState = useSelector(getBeerRequestState);
  const [open, setOpen] = useState(false);
  const [abvRange, setAbvRange] = useState({ start: 0, end: 20 });
  const [selectedRow, setSelectedRow] = useState(null);
  const [cartState, setCartState] = useState(false);

  const beersInfoSimple = beersInfo
    ?.filter(
      ({ abv }) => Number(abv) >= abvRange.start && Number(abv) < abvRange.end,
    )
    .map(ele => ({ ...ele }));

  const columnDraggedHandler = (sourceIndex, destinationIndex) => {
    const columnList = [...currentColumns];
    let temp = columnList[sourceIndex];
    columnList[sourceIndex] = columnList[destinationIndex];
    columnList[destinationIndex] = temp;
    dispatch(setOrder(columnList));
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getBeerData = () => {
      dispatch(beersRequest());
    };
    getBeerData();
  }, [dispatch]);

  return (
    <Wrapper>
      <PageName>BeerList</PageName>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={currentColumns.map(current => ({ ...current }))}
          actions={[
            {
              icon: 'save',
              tooltip: '???????????? ??????',
              onClick: (event, rowData) => {
                event.stopPropagation();
                if (!findLocalItemById(rowData.id)) {
                  alert(`${rowData.name} ????????? ??????????????? ?????????????????????.`);
                  setLocalItemList(rowData);
                } else {
                  alert(`${rowData.name} ????????? ?????????????????? ?????????????????????.`);
                  deleteLocalItemById(rowData.id);
                }
                setCartState(!cartState);
              },
            },
          ]}
          components={{
            Action: ({ action, data }) => (
              <IconButton onClick={event => action.onClick(event, data)}>
                {findLocalItemById(data.id) ? (
                  <RiShoppingBag2Fill />
                ) : (
                  <RiShoppingBag2Line />
                )}
              </IconButton>
            ),
            Toolbar: props => (
              <ToolBar>
                <MTableToolbar {...props} />
                <Filter abvRange={abvRange} setAbvRange={setAbvRange} />
              </ToolBar>
            ),
          }}
          data={beersInfoSimple}
          icons={tableIcons}
          onRowClick={(evt, selectedRow) => {
            setSelectedRow(selectedRow);
            toggleModal();
          }}
          onColumnDragged={columnDraggedHandler}
          //---------- table info
          title="?????? ??????"
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
                selectedRow?.tableData.id === rowData.tableData.id
                  ? theme.color.secondaryBgColor
                  : theme.color.bgColor,
            }),
          }}
          localization={{
            header: {
              actions: 'Cart',
            },
            body: {
              emptyDataSourceMessage: beerRequestState
                ? '????????? ?????????...'
                : '???????????? ????????????',
            },
          }}
        />
      </div>
      <Modal toggleModal={toggleModal} open={open}>
        <ModalInner
          title="?????? ?????? ??????"
          closeButton={<CloseButton toggleModal={toggleModal} />}
        >
          <BeerDetail selectedBeer={selectedRow} />
        </ModalInner>
      </Modal>
    </Wrapper>
  );
};

const PageName = styled.h2(({ theme }) => ({
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: theme.color.textColor,
}));
const Wrapper = styled.div(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  '& table > tfoot > tr > td': {
    color: theme.color.textColor,
    '& span,svg': {
      color: theme.color.textColor,
    },
  },
}));

const IconButton = styled.button(({ theme }) => ({
  border: 'none',
  backgroundColor: 'rgba(0,0,0,0)',
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

export default BeerList;
