import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';
import { SensorContext } from '../../contexts/SensorContext';
import { UserDeviceData } from '../../interfaces/ProximityData.interface';

interface Column {
  id: 'deviceId' | 'deviceAlias' | 'd1' | 'd2' | 'd3';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'deviceId', label: 'Device ID', minWidth: 100, align: 'center' },
  { id: 'deviceAlias', label: 'Device alias', minWidth: 170, align: 'center' },
  {
    id: 'd1',
    label: 'Distance from Sensor 1 (meters)',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'd2',
    label: 'Distance from Sensor 2 (meters)',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'd3',
    label: 'Distance from Sensor-3 (meters)',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

function createTableData(
  deviceId: string,
  deviceAlias: string,
  d1: string,
  d2: string,
  d3: string,
): UserDeviceData {
  return { deviceId, deviceAlias, d1, d2, d3 };
}

/**
 * Device proximity page
 * Displays proximity-related information based on RSSI values
 * @returns {JSX.Element} - The DeviceProximityPage JSX element.
 */
const DeviceProximityPage = (): JSX.Element => {
  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { selectedSensor } = selectedSensorContext;

  const [mockData, setMockData] = useState<UserDeviceData[] | []>([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof UserDeviceData>('deviceId');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof UserDeviceData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    // Clear previous data
    setMockData([]);

    if (selectedSensor !== '') {
      // Utilise abort signal to immediately stop any fetching once the sensor is switched
      const fetchData = async (signal: AbortSignal) => {
        try {
          const response = await fetch(
            `http://localhost:5173/api/v1/proximity/${selectedSensor}`,
            { signal },
          );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();

          const tempRowElement = data.userDevices.map(
            (dataElement: UserDeviceData) => {
              return createTableData(
                dataElement.deviceId,
                dataElement.deviceAlias,
                dataElement.d1,
                dataElement.d2,
                dataElement.d3,
              );
            },
          );

          setMockData(tempRowElement);
        } catch (err) {
          // Do nothing
        }
      };

      const controller = new AbortController();
      const signal = controller.signal;

      // Initial fetch
      fetchData(signal);

      // Set up interval to fetch data every 5 seconds
      const interval = setInterval(() => fetchData(signal), 5000);

      // Clean up: abort fetch and clear interval on component unmount or if selectedSensor changes
      return () => {
        controller.abort();
        clearInterval(interval);
      };
    }
  }, [selectedSensor]);

  const sortedData = mockData.sort((a, b) => {
    if (orderBy === 'd1' || orderBy === 'd2' || orderBy === 'd3') {
      const aValue = parseFloat(a[orderBy]);
      const bValue = parseFloat(b[orderBy]);

      const aIsEmpty = isNaN(aValue) || a[orderBy] === '';
      const bIsEmpty = isNaN(bValue) || b[orderBy] === '';

      if (aIsEmpty && !bIsEmpty) return 1;
      if (!aIsEmpty && bIsEmpty) return -1;
      if (aIsEmpty && bIsEmpty) return 0;

      return order === 'asc' ? aValue - bValue : bValue - aValue;
    } else {
      return order === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    }
  });

  return (
    <PageTemplateComponent pageTitle='Device Proximity Calculation'>
      {!selectedSensor || selectedSensor == '' ? (
        <Typography alignContent={'center'} textAlign={'inherit'} width='100%'>
          Please select a sensor to continue
        </Typography>
      ) : !mockData || mockData.length == 0 ? (
        // TODO: Add a spinner or something
        <Typography alignContent={'center'} textAlign={'inherit'} width='100%'>
          Sensor data loading...
        </Typography>
      ) : (
        <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: '600' }}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : 'asc'}
                        onClick={(event) => handleRequestSort(event, column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={mockData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
    </PageTemplateComponent>
  );
};

export default DeviceProximityPage;
