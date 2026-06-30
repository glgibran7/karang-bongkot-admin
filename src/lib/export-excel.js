import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportExcel(data, fileName) {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer]);

  saveAs(blob, `${fileName}.xlsx`);
}
