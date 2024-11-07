var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
var columns = [
    { field: 'Title', headerName: 'Title', width: 150 },
    {
        field: 'Created',
        headerName: 'Created On',
        width: 175,
        valueGetter: function (value, row) { return "".concat(new Date(row.Created).toDateString() || ''); }
    },
    { field: 'Modified', headerName: 'Modified On', width: 175, sortable: false,
        valueGetter: function (value, row) { return "".concat(new Date(row.Modified).toDateString() || ''); }
    }
];
var rows;
var paginationModel = { page: 0, pageSize: 5 };
function getRowId(row) {
    return row.Id;
}
export function DataTable() {
    return (React.createElement("div", null,
        React.createElement("h1", { style: { color: "green" } }, "SharePoint Sample List Data"),
        React.createElement(Box, { sx: { height: 400, width: 1 } },
            React.createElement(DataGrid, { getRowId: getRowId, rows: rows, columns: columns, initialState: { pagination: { paginationModel: paginationModel } }, pageSizeOptions: [5, 9], sx: { border: 0 }, disableColumnFilter: true, disableColumnSelector: true, disableDensitySelector: true, slots: { toolbar: GridToolbar }, slotProps: {
                    toolbar: {
                        showQuickFilter: true,
                        printOptions: { disableToolbarButton: true },
                        csvOptions: { disableToolbarButton: true },
                    },
                } }))));
}
var ListConnector = /** @class */ (function (_super) {
    __extends(ListConnector, _super);
    function ListConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListConnector.prototype.render = function () {
        rows = this.props.listItems;
        return (React.createElement(DataTable, null));
    };
    return ListConnector;
}(React.Component));
export default ListConnector;
//# sourceMappingURL=ListConnector.js.map