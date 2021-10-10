import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable, { MTableToolbar } from 'material-table';
import { RiShoppingBag2Line, RiShoppingBag2Fill } from 'react-icons/ri';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { Modal, ModalInner, CloseButton } from 'components';
import { tableIcons, Filter, BeerDetail } from './Secitons';
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
  const [cartState, setCartState] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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
                ? '데이터 로딩중...'
                : '데이터가 없습니다',
            },
          }}
        />
      </div>
      <Modal toggleModal={toggleModal} open={open}>
        <ModalInner
          title="맥주 상세 정보"
          closeButton={<CloseButton toggleModal={toggleModal} />}
        >
          <BeerDetail selectedBeer={selectedRow} />
        </ModalInner>
      </Modal>
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

export default BeerList;
