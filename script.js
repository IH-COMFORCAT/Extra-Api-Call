const baseUrl = "http://localhost:8080";
getDataFromApi();


async function getDataFromApi() {
    const response = await fetch(baseUrl + "/get-all-tasks");
    var data = await response.json();
    showContentsTable(data);
}


function showContentsTable(data) {

    let table = `
    <tr>
    <th>id</th>
    <th>Due Date</th>
    <th>Title</th>
    <th>Description</th>
    </tr>`;
    
    for (let task of data) {
        table += `
        <tr>
            <td>${task.id}</td>
            <td>${task.dueDate}</td>
            <td>${task.taskTitle}</td>
            <td>${task.taskDescription}</td>
        </tr>
        `;

        document.getElementById("tasks").innerHTML = table;


    }




}