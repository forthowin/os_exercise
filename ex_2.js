// jQuery library used

function insertData(firstName, lastName, status) {
  var row, nameCell, statusCell;
  var flag = true;
  var fullName = lastName + ", " + firstName;
  var tBody = $("tbody")[0];

  $.ajax({
    url: "/member/save",
    type: "POST",
    dataType: 'json',
    data: {
      firstName: firstName,
      lastName: lastName,
      status: status
    }
  });

  for(i = 0; i < tBody.rows.length; i++) {
    if(fullName.localeCompare(tBody.rows[i].cells[0].innerHTML) < 0) {
      row = tBody.insertRow(i);
      nameCell = row.insertCell(0);
      statusCell = row.insertCell(1);
      nameCell.innerHTML = fullName;
      statusCell.innerHTML = status;
      flag = false;
      break;
    }
  }
  
  if(flag) {
    row = tBody.insertRow(tBody.rows.length);
    nameCell = row.insertCell(0);
    statusCell = row.insertCell(1);
    nameCell.innerHTML = fullName;
    statusCell.innerHTML = status;
  }
}