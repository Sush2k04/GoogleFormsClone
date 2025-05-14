function validate() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const father = document.getElementById("father").value.trim();
  const mother = document.getElementById("mother").value.trim();
  const language = document.querySelector("input[name='language']:checked")

  if(!name || !age || !father || !mother || !language || !dob)
  {
    alert("Please fill all details");
    return false;
  }



  return true;
}
