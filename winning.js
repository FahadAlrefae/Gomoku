
function winning(table, elem)
{
  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0; j < table.rows.length; j++)
    {

      if(((elem.innerText) == (table.rows[i].cells[j].innerText)))
      {//checking horizontally
        if(j+1 < table.rows.length && j+2 < table.rows.length && j+3 < table.rows.length && j+4< table.rows.length)
        {
          if((((table.rows[i].cells[j].innerText) == (table.rows[i].cells[j+1].innerText))&&
            ((table.rows[i].cells[j].innerText) == (table.rows[i].cells[j+2].innerText))&&
            ((table.rows[i].cells[j].innerText) == (table.rows[i].cells[j+3].innerText))&&
            ((table.rows[i].cells[j].innerText) == (table.rows[i].cells[j+4].innerText))))
            {
                    return true;
            }
        }

        if(i+1 < table.rows.length && i+2 < table.rows.length && i+3 < table.rows.length && i+4< table.rows.length)
        {
          if((((table.rows[i].cells[j].innerText) == (table.rows[i+1].cells[j].innerText))&&
          ((table.rows[i].cells[j].innerText) == (table.rows[i+2].cells[j].innerText))&&
          (table.rows[i].cells[j].innerText) == (table.rows[i+3].cells[j].innerText))&&
          ((table.rows[i].cells[j].innerText) == (table.rows[i+4].cells[j].innerText)))
            {
                    return true;
            }
        }
            //checking diagonally to the right
          if(i+1 < table.rows.length && i+2 < table.rows.length && i+3 < table.rows.length && i+4< table.rows.length&&
            j+1 < table.rows.length && j+2 < table.rows.length && j+3 < table.rows.length && j+4< table.rows.length)
          {
            if(((table.rows[i].cells[j].innerText) == (table.rows[i+1].cells[j+1].innerText))&&
                ((table.rows[i].cells[j].innerText) == (table.rows[i+2].cells[j+2].innerText))&&
                ((table.rows[i].cells[j].innerText) == (table.rows[i+3].cells[j+3].innerText))&&
                ((table.rows[i].cells[j].innerText) == (table.rows[i+4].cells[j+4].innerText)))
                {
                  return true;
                }
          }
          //checking diagonally to the left
          if(i+1 < table.rows.length && i+2 < table.rows.length && i+3 < table.rows.length && i+4< table.rows.length&&
            j-1 >=0 && j-2 >=0 && j-3 >=0 && j-4 >=0)
          {
            if(((table.rows[i].cells[j].innerText) == (table.rows[i+1].cells[j-1].innerText))&&
              ((table.rows[i+1].cells[j-1].innerText) == (table.rows[i+2].cells[j-2].innerText))&&
              ((table.rows[i+2].cells[j-2].innerText) == (table.rows[i+3].cells[j-3].innerText))&&
              ((table.rows[i+3].cells[j-3].innerText) == (table.rows[i+4].cells[j-4].innerText)))
              {
                return true;
              }
          }

        }

      }
    }
    return false;
}




function almostWinning(table) //return which winning direction, rows and cells that are compromised
{
  for(i = 0; i < table.rows.length; i++)
  {
    for(j = 0; j < table.rows.length; j++)
    {
      var x =  table.rows[i].cells[j];
      if(x.innerText =='x')
      {//checking horizontally
        if(j+1 < table.rows.length && j+2 < table.rows.length) //checking limit for horizontal line
        {
          if((((table.rows[i].cells[j].innerText) == (table.rows[i].cells[j+1].innerText))&&
            ((table.rows[i].cells[j+1].innerText) == (table.rows[i].cells[j+2].innerText))))
            {
              if(j+3 < table.rows.length && j - 1 >= 0 )
              {
                if((table.rows[i].cells[j+3].innerText != 'o' && table.rows[i].cells[j+3].innerText != 'x') &&
                (table.rows[i].cells[j-1].innerText != 'o' && table.rows[i].cells[j-1].innerText != 'x'))
                {
                  return ['0', i, j];
                }
                if((table.rows[i].cells[j+2].innerText) == (table.rows[i].cells[j+3].innerText))//if there is four in a row
                {
                  if(table.rows[i].cells[j-1].innerText != 'o' && table.rows[i].cells[j-1].innerText != 'x')//is empty
                  {
                    return ['00', i, j];
                  }
                  else if(j + 4 < table.rows[i].cells)
                  {
                    if([j+4].innerText != 'o' && table.rows[i].cells[j+4].innerText!= 'x')//is empty
                    {
                        return ['000', i, j];//almsot winning horizontally to the right
                    }
                  }
                }


                }
            }
          }

          //////////////////////////////////////// checking limit for vertical line ///////////
        if(i+1 < table.rows.length && i+2 < table.rows.length)
        {
          if((((table.rows[i].cells[j].innerText) == (table.rows[i+1].cells[j].innerText))&&
            ((table.rows[i+1].cells[j].innerText) == (table.rows[i+2].cells[j].innerText))))
            {
              if(i+3 < table.rows.length && i - 1 >= 0 )
              {
                if((table.rows[i+3].cells[j].innerText != 'o' && table.rows[i+3].cells[j].innerText != 'x') &&
                (table.rows[i-1].cells[j].innerText != 'o' && table.rows[i-1].cells[j].innerText != 'x'))
                {
                  return ['1', i, j];
                }
                if((table.rows[i+2].cells[j].innerText) == (table.rows[i+3].cells[j].innerText))//if there is four in a row
                {
                  if(table.rows[i-1].cells[j].innerText != 'o' && table.rows[i-1].cells[j].innerText != 'x')//is empty
                  {
                    return ['11', i, j];
                  }
                  else if(i + 4 < table.rows[i].cells)
                  {
                    if(table.row[i+4].cells[j].innerText != 'o' && table.rows[i+4].cells[j].innerText!= 'x')//is empty
                    {
                        return ['111', i, j];
                    }
                  }
                }

                }
            }
        }
        //////////// checking diagonally to the right ////
        if(i+1 < table.rows.length && i+2 < table.rows.length && j+1 < table.rows.length && j+2 < table.rows.length)
        {
            if((table.rows[i].cells[j]) == (table.rows[i+1].cells[j+1])&&
            (tables.rows[i+1].cells[j+1]) == (table.rows[i+2].cells[j+2]))
            {
              if(i+3 <table.rows.length && i - 1 >= 0 && j + 3 < table.rows.length && j - 1 >= 0)
              {
                if((table.rows[i+3].cells[j+3].innerText != 'o') && (table.rows[i+3].cells[j+3].innerText != 'x') &&//is next empty
                (table.rows[i-1].cells[j-1].innerText != 'o') && (table.rows[i-1].cells[j-1].innerText != 'x'))
                {
                  return['2', i, j];
                }
                if((table.rows[i+2].cells[j+2].innerText) == (table.rows[i+3].cells[j+3].innerText))
                {
                  if(table.rows[i-1].cells[j-1].innerText != 'o' && (table.rows[j-1].cells[j-1].innerText))
                  {
                    return ['22', i, j];
                  }
                  else if(i + 4 < table.rows.length && j + 4 < table.rows.length)
                  {
                    if(table.row[i+4].cells[j+4].innerText != 'o' && table.rows[i+4].cells[j+4].innerText!= 'x')
                    {
                      return ['222', i, j];
                    }
                  }
                }
              }
            }
        }


/*
          //////////// checking diagonally to the left ////

          if(i+1 < table.row.length && i+2 < table.row.length && j-1 >= 0 && j-2 >= 0)
          {
            (((table.rows[i].cells[j].innerText) == (table.rows[i+1].cells[j-1].innerText))&&
              ((table.rows[i+1].cells[j-1].innerText) == (table.rows[i+2].cells[j-2].innerText)))
              {
                if(i+3 < table.rows.length && i - 1 >= 0 && j-3 >= 0 && j - 1 >=0  )
                {
                  if((table.rows[i+3].cells[j-3].innerText != 'o' && table.rows[i+3].cells[j-3].innerText != 'x') && // is next empty
                  (table.rows[i-1].cells[j-1].innerText != 'o' && table.rows[i-1].cells[j-1].innerText != 'x'))
                  {
                    return ['3', i, j];
                  }
                  if((table.rows[i+2].cells[j-2].innerText) == (table.rows[i+3].cells[j-3].innerText))//if there is four in a row
                  {
                    if(table.rows[i-1].cells[j-1].innerText != 'o' && table.rows[i-1].cells[j-1].innerText != 'x')//is empty
                    {
                      return ['33', i, j];
                    }
                    else if(i + 4 < table.rows[i].cells && j-4 >= 0)
                    {
                      if(table.row[i+4].cells[j-4].innerText != 'o' && table.rows[i+4].cells[j-4].innerText!= 'x')//is empty
                      {
                          return ['111', i, j];//almsot winning diagonally to the left
                      }
                    }
                  }

                  }
              }
          }
    */
      }
    }

  }

  return ['-1', null, null]; //no one is close to winning
}
