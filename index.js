function distanceFromHqInBlocks (blocknumber) 
{
  if (blocknumber > 42)
  {
    return blocknumber - 42;
  }
 else {
   return 42- blocknumber;
 }
  
}


function distanceFromHqInFeet (feet) 
{
 return distanceFromHqInBlocks(feet)* 264;
  
}

function distanceTravelledInFeet(pa1, pa2)
{
  if(pa2>pa1)
  {
    return (pa2 - pa1) *264 ;
  }
  else 
  {
    return (pa1-pa2)*264;
  }   
}

function calculatesFarePrice(pa1, pa2)
{
  let distance = distanceTravelledInFeet(pa1,pa2);
  if(distance < 400)
  {
  return 0; 
  }
  else if (distance <=2000 && distance> 400 )
  {
    return  (distance -400)*0.02;
  }
  else if (distance > 2000 && distance <2500)
  { 
    return 25;
  }
    
  else 
  {
  return "cannot travel that far";
  }
    
  }