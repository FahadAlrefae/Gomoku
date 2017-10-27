var turn = 2; // This button will determine which palyer shuold play next
var OpColor = 'green';
var PlayerColor = 'Red';
var OpNumber = 0;
var PlayerNumber = 0;
var totalPlays = 0;



function generateAI(size)
{
  generatetableAI(size);
}

function generatetableAI(x)// this will generate a table of size x
{
  var table = document.createElement('table');
  table.setAttribute("id", "maintable");
  var td1;
  for (var i = 0; i < x; i++)
  {
      var tr = document.createElement('tr');
        for (var j = 0; j < x; j++)
        {
             td1 = document.createElement('td');
             tr.appendChild(td1);
             table.appendChild(tr);
        }
  }

  document.getElementById("btn0").onclick = function()
  { //disable the button after clicking
      //disable
      this.disabled = true;
  }

    userInputAI(table, OpColor, PlayerColor); // to enter input
  }

function userInputAI(table, OpColor, PlayerColor)
{
  document.body.appendChild(table);

  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0; j < table.rows.length; j++)
    {
      var x = table.rows[i].cells[j];

      x.onclick = function ()
      {
        if(turn == 2) //the first play for player 'x' which also starts the time
        {
          document.getElementById("currentTurn").innerHTML = "Player 'o'";
          start(); //start timer
          turn = 0; //give the turn to player 'o'
          totalPlays++;
          document.getElementById("total").innerHTML = totalPlays;
          PlayerNumber++;//update number of plays
          document.getElementById("x").innerHTML = PlayerNumber;
          createText(this, PlayerColor);
        }
        else if(turn == 1) //if it's player A's turn
        {
          document.getElementById("currentTurn").innerHTML = "Player 'o'";
          turn = 0;// this will move the turn to the player 'o'
          totalPlays++;
          document.getElementById("total").innerHTML = totalPlays;
          PlayerNumber++;//update number of plays
          document.getElementById("x").innerHTML = PlayerNumber;
          createText(this, PlayerColor);

          if(winning(table, this))
          {
            stop();
            alert("Player 'x' won in " + $time.innerHTML+ "!");
            return;
          }
        }
        else
        {

        }

        document.getElementById("currentTurn").innerHTML = "Player 'x'";
        turn = 1;// this will move the turn to the player 'x'
        totalPlays++;
        document.getElementById("total").innerHTML = totalPlays;
        OpNumber = OpNumber+1; //update number of plays
        document.getElementById("o").innerHTML = OpNumber;
        block(table, OpColor);
        if(winning(table, this))
        {
          stop();
          alert("Player B has won in "  + $time.innerHTML + "!");
        }
      }
    }
  }
}


function createText(elem, color) // First player input
{

    elem.style.background = color;
    var text = document.createTextNode('x');
      elem.appendChild(text);
      elem.style.pointerEvents = 'none';
      changePlayerColor(PlayerColor);

}


function addAIText(table, color) // Second player input
{
  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0 ; j < table.rows.length; j++)
    {
      var cell = table.rows[i].cells[j];
      if(cell.innerText != 'x' && cell.innerText != 'o'  )
      {
        cell.innerText = 'o';
        cell.style.background = color;
        cell.style.pointerEvents = 'none';
        if(winning(table,cell))
        {
          stop();
          alert("Player B has won in "  + $time.innerHTML + "!");
        }
        changeOponentColor(OpColor);
        return;
      }
    }
  }
}



function block(table, color) // Second player input
{
  let row;
  let cell;
  var direction = almostWinning(table);
  if(direction[0] == '0' || direction[0] == '000')
  {
      row = direction[1];
      cell = direction[2];
      if(cell < table.rows.length)
      {
        table.rows[row].cells[cell+3].innerText = 'o';
        table.rows[row].cells[cell+3].style.background = color;
        table.rows[row].cells[cell+3].style.pointerEvents = 'none';
        return;
      }
  }
  if (direction[0] == '00')
  {
    row = direction[1];
    cell = direction[2];
    if(cell-1 >= 0)
    {
      table.rows[row].cells[cell-1].innerText = 'o';
      table.rows[row].cells[cell-1].style.background = color;
      table.rows[row].cells[cell-1].style.pointerEvents = 'none';
      return;
    }
  }


  ///////////////// block vertical possibility ////////


  if(direction[0] == '1' || direction[0] == '111')
  {
      row = direction[1];
      cell = direction[2];
      if(row < table.rows.length)
      {
        table.rows[row+3].cells[cell].innerText = 'o';
        table.rows[row+3].cells[cell].style.background = color;
        table.rows[row+3].cells[cell].style.pointerEvents = 'none';
        return;
      }
  }

  if (direction[0] == '11')
  {
    row = direction[1];
    cell = direction[2];
    if(row-1 >= 0)
    {
      table.rows[row-1].cells[cell].innerText = 'o';
      table.rows[row-1].cells[cell].style.background = color;
      table.rows[row-1].cells[cell].style.pointerEvents = 'none';
      return;
    }
  }

  ///////////////// block diagonal to the right possibility ////////


  if(direction[0] == '2' || direction[0] == '222')
  {
      row = direction[1];
      cell = direction[2];
      if(row < table.rows.length && cell < table.rows.length)
      {
        table.rows[row+3].cells[cell+3].innerText = 'o';
        table.rows[row+3].cells[cell+3].style.background = color;
        table.rows[row+3].cells[cell+3].style.pointerEvents = 'none';
        return;
      }
  }
  if (direction[0] == '22')
  {
    row = direction[1];
    cell = direction[2];
    if(row-1 >= 0 && cells - 1 >= 0)
    {
      table.rows[row-1].cells[cell-1].innerText = 'o';
      table.rows[row-1].cells[cell-1].style.background = color;
      table.rows[row-1].cells[cell-1].style.pointerEvents = 'none';
      return;
    }
  }

  //////////////// diagonal to the left possibility ///
  if(direction[0] == '3' || direction[0] == '333')
  {
      row = direction[1];
      cell = direction[2];
      if(row < table.rows.length && cell >= 0)
      {
        table.rows[row+3].cells[cell-3].innerText = 'o';
        table.rows[row+3].cells[cell-3].style.background = color;
        table.rows[row+3].cells[cell-3].style.pointerEvents = 'none';
        return;
      }
  }
  if (direction[0] == '33')
  {
    row = direction[1];
    cell = direction[2];
    if(row-1 >= 0 && cell -1)
    {
      table.rows[row-1].cells[cell-1].innerText = 'o';
      table.rows[row-1].cells[cell-1].style.background = color;
      table.rows[row-1].cells[cell-1].style.pointerEvents = 'none';
      return;
    }
  }
  addAIText(table, color);
}
