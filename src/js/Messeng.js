export function messeng(excelDataDiv) {
	const table = excelDataDiv.querySelector('table');
	const rows = table.querySelectorAll('tr');
	let selectedRow = null;

	const firstRowHeaders = Array.from(rows[0].querySelectorAll('td')).map(
		(td) => td.textContent
	);

	const toggle = (row) => {
		if (!row.classList.contains('first-row')) {
			if (selectedRow === row) {
				row.classList.remove('selected-row');
				selectedRow = null;
			} else {
				if (selectedRow) {
					selectedRow.classList.remove('selected-row');
				}
				row.classList.add('selected-row');
				selectedRow = row;

				updateModalData(row, firstRowHeaders);
			}
		}
	};

	rows.forEach((row, index) => {
		if (index === 0) {
			row.classList.add('first-row');
		}

		row.addEventListener('click', () => {
			toggle(row);
		});
	});

	const updateModalData = (row, headers) => {
		const modalDataContainer = document.querySelector('[data-modalMesseng]');
		modalDataContainer.innerHTML = '';

		const rowData = Array.from(row.querySelectorAll('td'));

		rowData.forEach((td, index) => {
			const dataElement = document.createElement('p');
			const headerText = headers[index];

			if (td.textContent.trim() === '') {
				dataElement.innerHTML = `${headerText}: -`;
			} else {
				dataElement.innerHTML = `${headerText}: ${td.textContent}`;
			}
			modalDataContainer.appendChild(dataElement);
		});

		showModal();
	};

	const showModal = () => {
		const modal = document.querySelector('[data-modal]');
		modal.style.display = 'flex';

		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				closeModal();
			}
		});

		const closeBtn = document.querySelector('[data-modalCloseButton]');
		closeBtn.addEventListener('click', () => {
			closeModal();
		});

		const copyButton = document.querySelector('[data-modalContentCopyButton]');
		copyButton.addEventListener('click', () => {
			copyMessage();
		});
	};

	const copyMessage = () => {
		const modalDataContainer = document.querySelector('[data-modalMesseng]');
		const rowDataElements = modalDataContainer.querySelectorAll('p');

		let message = '';
		rowDataElements.forEach((dataElement) => {
			message += dataElement.textContent + '\n';
		});

		const tempTextarea = document.createElement('textarea');
		tempTextarea.value = message;
		document.body.appendChild(tempTextarea);

		tempTextarea.select();
		document.execCommand('copy');

		document.body.removeChild(tempTextarea);

		showCopyToast();
	};

	const showCopyToast = () => {
		const toast = document.querySelector('[data-modalToast]');
		toast.style.display = 'block';

		setTimeout(() => {
			toast.style.display = 'none';
		}, 3000);
	};

	const closeModal = () => {
		const modal = document.querySelector('[data-modal]');
		modal.style.display = 'none';
	};
}
