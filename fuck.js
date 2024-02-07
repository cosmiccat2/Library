var myLibrary = [
    ['Born a Crime', 'Trevor Noah' , 'Read'],
    ['The Martian', 'Andy Weir', 'Read']
];

function Book() {
    var table = document.getElementById("myTable");
    var tbody = table.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    for (var i = 0; i < myLibrary.length; i++) {
        var row = tbody.insertRow(i);

        for (var j = 0; j < myLibrary[i].length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = myLibrary[i][j];
        }

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";

        deleteButton.onclick = (function (index) {
            return function (){
                deleteRow(index);
            };
        })(i);
        row.insertCell(myLibrary[i].length).appendChild(deleteButton);
    }

    function deleteRow(index) {
        myLibrary.splice(index, 1);
        Book();
    }

    var inputRow = tbody.insertRow(myLibrary.length);

    var bookNameCell = inputRow.insertCell(0);
    bookNameCell.innerHTML = '<input type="text" id="bookName" placeholder="Enter book name">';

    var authorCell = inputRow.insertCell(1);
    authorCell.innerHTML = '<input type="text" id="author" placeholder="Enter author name">';

    var statusCell = inputRow.insertCell(2); 
    statusCell.innerHTML = '<input type="text" id="status" placeholder="Enter status">';

    var addButtonCell = inputRow.insertCell(3);
    var addButton = document.createElement("button");
    addButton.innerHTML = "add";
    addButton.onclick = function () {
        addBook();
    };
    addButtonCell.appendChild(addButton);

    function addBook(){
        var bookName = document.getElementById("bookName").value;
        var author = document.getElementById("author").value;
        var status = document.getElementById("status").value;

        if (bookName && author && status) {
            myLibrary.push([bookName, author, status]);

            Book();
        } else {
            alert("Please fill in all fields correctly");
        }
    }
}

Book();
