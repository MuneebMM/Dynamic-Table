// Function to update the state of the delete buttons
function updateButtons() {
    // Get the number of rows and columns in the table
    let rowCount = document.getElementById("dynamicTable").rows.length;
    let columnCount = document.getElementById("dynamicTable").rows[0].cells.length;

    // Disable the "Delete Row" button if there are 2 or fewer rows
    document.getElementById("deleteRowBtn").disabled = rowCount <= 2;

    // Disable the "Delete Column" button if there is only 1 column
    document.getElementById("deleteColumnBtn").disabled = columnCount <= 1;
}

// Function to add a new row to the table
function addRow() {
    // Get the table element and its current row and column counts
    let table = document.getElementById("dynamicTable");
    let rowCount = table.rows.length;
    let columnCount = table.rows[0].cells.length;

    // Insert a new row at the end of the table
    let newRow = table.insertRow(rowCount);

    // Loop through each column to create a new cell in the new row
    for (let i = 0; i < columnCount; i++) {
        let newCell = newRow.insertCell(i);
        
        // Set the content of the new cell
        newCell.innerHTML = `Row ${rowCount}, Col ${i + 1}`;
        
        // Apply Tailwind CSS classes for styling
        newCell.className = "py-2 px-4 border border-gray-300";
    }

    // Update the state of the delete buttons
    updateButtons();
}

// Function to delete the last row of the table
function deleteRow() {
    // Get the table element and its current row count
    let table = document.getElementById("dynamicTable");
    let rowCount = table.rows.length;

    // Check if there are more than 2 rows
    if (rowCount > 2) { 
        // Delete the last row of the table
        table.deleteRow(rowCount - 1);
    } else {
        // Show an alert if the user tries to delete the last row
        alert("You can't delete the last row!");
    }

    // Update the state of the delete buttons
    updateButtons();
}

// Function to add a new column to the table
function addColumn() {
    // Get the table element and its current row count
    let table = document.getElementById("dynamicTable");
    let rowCount = table.rows.length;

    // Loop through each row to add a new cell
    for (let i = 0; i < rowCount; i++) {
        let newCell = table.rows[i].insertCell(-1);
        
        // Set the content of the new cell
        newCell.innerHTML = i === 0 ? `Header ${table.rows[i].cells.length}` : `Row ${i}, Col ${table.rows[i].cells.length}`;
        
        // Apply Tailwind CSS classes for styling
        newCell.className = "py-2 px-4 border border-gray-300";
    }

    // Update the state of the delete buttons
    updateButtons();
}

// Function to delete the last column of the table
function deleteColumn() {
    // Get the table element and its current row and column counts
    let table = document.getElementById("dynamicTable");
    let rowCount = table.rows.length;
    let columnCount = table.rows[0].cells.length;

    // Check if there is more than 1 column
    if (columnCount > 1) { 
        // Loop through each row to delete the last cell in that row
        for (let i = 0; i < rowCount; i++) {
            table.rows[i].deleteCell(columnCount - 1);
        }
    } else {
        // Show an alert if the user tries to delete the last column
        alert("You can't delete the last column!");
    }

    // Update the state of the delete buttons
    updateButtons();
}

// Initial call to update the state of the delete buttons when the page loads
updateButtons();
