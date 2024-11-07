import * as React from 'react';
//import styles from './ListConnector.module.scss';
import type { IListConnectorProps } from './IListConnectorProps';

import { DataGrid, GridColDef,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
  { field: 'Title', headerName: 'Title', width: 150 },
  { 
    field: 'Created', 
    headerName: 'Created On', 
    width: 175, 
    valueGetter: (value, row) => `${new Date(row.Created).toDateString() || ''}`
    }, 
  { field: 'Modified', headerName: 'Modified On', width: 175, sortable:false,
    valueGetter: (value, row) => `${new Date(row.Modified).toDateString() || ''}`
   }
];

var rows:any;

const paginationModel = { page: 0, pageSize: 5 };

function getRowId(row:any) {
  return row.Id;
}

export function DataTable() {
  return (
    <div>
      <h1 style={{ color: "green" }}>SharePoint Sample List Data</h1>
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        getRowId={getRowId} 
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 9]}
        sx={{ border: 0 }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
      />
      </Box>
      </div>
  );
}

export default class ListConnector extends React.Component<IListConnectorProps> {  

  public render(): React.ReactElement<IListConnectorProps> {
    rows = this.props.listItems;

    return (
      <DataTable></DataTable>
    );
  }
}
