export function nameFile() {
	const inputFile = document.querySelector('input');
	const fileNameElement = document.getElementById('fileName');

	// add event handlers for change
	inputFile.addEventListener('change', () => {
		// get the input value (along with the file path)
		const fileName = inputFile.value;
		// divide the path into parts (considering backslashes in the path)
		const fileNameParts = fileName.split('\\');
		// take the last part as the file name
		const displayFileName = fileNameParts[fileNameParts.length - 1];
		// assign/swap 'displayFileName' to 'fileNameElement'
		fileNameElement.textContent = displayFileName;
	});
}
