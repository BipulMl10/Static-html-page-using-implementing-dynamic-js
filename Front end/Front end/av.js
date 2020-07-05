function day()
{
		var obj=new Date();
        var day=obj.getDate();
        var month=obj.getMonth()+1;
        var year=obj.getFullYear();
        switch (month) 
        {
  case 1:
    month = "Jan";
    break;
  case 2:
    month = "Feb";
    break;
  case 3:
    month = "Mar";
    break;
  case 4:
    month = "Apr";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "jun";
    break;
  case  7:
    month = "July";
    break;
    case  8:
    month = "Aug";
    break;
    case  9:
    month = "Sep";
    break;
    case  10:
    month = "oct";
    break;
    case  11:
    month = "Nov";
    break;
    case  12:
    month = "Dec";
    
}
		var fulldate=day+"-"+month+"-"+year;
        document.getElementById('text3').innerHTML=fulldate;
        document.getElementById('text3').style.color="white";
        document.getElementById('text3').style.width="200px";
        
        

}
function show_all()
{
	var show = "<div class='box11'><img src='i6.png' id='i1' height='18px' width='18px'><p id='bt'>Recieved Payements</p><div class='box12'><center>56</center></div>";
    show =show + "</div><div class='bx1'><p id='a21'>#</p><p id='a22'>Name</p><p id='a23'>Amount</p></div>";

    var  show1  = "<table class='a11' id ='content_table' ><tr><th>1</th><th>Mark</th><th>5000</th></tr><tr><th>2</th><th>Jacob</th><th>6532</th></tr><tr><th>3</th><th>Larry</th><th>4598</th></tr><tr><th>4</th><th>Jacob</th><th>6532</th></tr><tr><th>5</th><th>Larry</th><th>4598</th></tr>";
	show1 = show1 + "<tr><th>7</th><th>Larry</th><th>4598</th></tr><tr><th>7</th><th>Jacob</th><th>6532</th></tr><tr><th>8</th><th>Larry</th><th>4598</th></tr></table>";
    //show = show + "<br><input type='button' name="" value='Show All' id='bt1'  onmouseleave='show_less()'>";
    document.getElementById("header").innerHTML = show;
	document.getElementById("body").innerHTML = show1;
	
	//var ht = document.getElementById("content_table").style.height;
	//document.getElementById("bbox").style.height = "180px";
    //document.getElementById("bt1").style.top = "200px";
    document.getElementById('main').style.display="block";
    document.getElementById('bix').style.display="block";
    document.getElementById('del').style.display="block";


}	

function close1()
{   
	document.getElementById('main').style.display="none";
    document.getElementById('bix').style.display="none";
    document.getElementById('del').style.display="none";
}