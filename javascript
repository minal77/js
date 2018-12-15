# js
#StudentRejestrationForm

<html>
<head>
<script language="javascript">
function display()
{
var name=f1.txt1.value;
var mno=f1.txt2.value;
var addr=f1.txt3.value;
var city=f1.txt4.value;
var state=f1.txt5.value;
var pcode=f1.txt6.value;

if((!name)||(!mno))
{
alert("*All fields are compulsory*");
return false;
}
for(var i=0;i<name.length;i++)
{
var ch=name.charAt(i);
if(((ch<'a')||(ch>'z'))&&((ch<'A')||(ch>'Z'))&&(ch!=' '))
{
alert("Only alphabets..");
return false;
}
}
if(mno.length!=10)
{
alert("Enter 10digits mobile number");
return false;
}
if(pcode.length!=6)
{
alert("Enter 6 digits pin code");
return false;
}
document.write("<br>Name is: "+name);
}
</script>
</head>
<form name="f1">
<center>
<h1>Student Registration form</h1><br>
Name of Student:<input type="text" name="txt1"><br>
Mobile Number:&nbsp<input type="text" name="txt2"><br>
Address:<input type="textarea" name="txt3"><br>
City:<input type="text" name="txt4"><br>
State:<input type="text" name="txt5"><br>
Pincode:<input type="text" name="txt6"><br>
<input type="submit" onclick="display()" value="Submit">
<input type="reset">
</center>
</form>
</html>
