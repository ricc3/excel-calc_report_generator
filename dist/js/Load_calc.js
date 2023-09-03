import { messeng } from './Messeng.js'
export function loadCalc() {
	// run the script once load website
	// window.onload = () => {
	// get the file from the field input
	const input = document.getElementById('excel-file');
	// function call handleFile
	const handleFile = () => {
		// retrieves the first file from the list of selected files and assigns it to the variable
		const file = input.files[0];
		// if a file is selected, read it
		if (file) {
			// create a new FileReader object
			const reader = new FileReader();
			// event will be triggered when the file reading operation is completed
			reader.onload = (e) => {
				// creates an object based on the result of the read operation (file contents) and assigns it to the variable
				const data = new Uint8Array(e.target.result);
				// uses the 'XLSX' library to read data from an Excel file. Parses the data from 'data' as a byte array and creates a 'workbook' object
				const workbook = XLSX.read(data, { type: 'array' });
				// takes the name of the first sheet in the workbook and assigns it to the variable
				const sheetName = workbook.SheetNames[0];
				// retrieves a reference to this sheet and assigns it to the variable
				const worksheet = workbook.Sheets[sheetName];
				// takes a reference to an HTML element and assigns it to a variable
				const excelDataDiv = document.getElementById('excel-data');
				// convert the content of the sheet to HTML and set it inside the element 'excelDataDiv'
				excelDataDiv.innerHTML = XLSX.utils.sheet_to_html(worksheet);
				// display the element and set its style to 'block'
				excelDataDiv.style.display = 'block';

				messeng(excelDataDiv);
			};
			// operation reads a file as an array of bytes
			reader.readAsArrayBuffer(file);
		}
	};
	// adds a listen for the 'change' event for the 'input' element, which will be triggered when the user selects a file
	input.addEventListener('change', handleFile);
	// };
}
