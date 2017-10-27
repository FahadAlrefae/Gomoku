function changeOptionColor(x, color)
{

  x.style.background = color;
}

function changeTableColor(color) //to change the color of the grid
{
  document.getElementById("maintable").style.background = color;
}

function changeOponentColor (color)
{
  let table = document.getElementById("maintable");

  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0; j < table.rows.length; j++)
    {
      let x = table.rows[i].cells[j];
      if(x.innerText =='o'){
        x.style.background = color;
        OpColor = color;
      }
      }
    }
  }

function changePlayerColor(color)
{
  let table = document.getElementById("maintable");

  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0; j < table.rows.length; j++)
    {
      let x = table.rows[i].cells[j];
      if(x.innerText =='x'){
        x.style.background = color;
        PlayerColor = color;
      }
      }
    }
}
