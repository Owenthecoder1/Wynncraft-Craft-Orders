var mxcmbtlvl = 106

function steponedone() {
  var isarcherchecked = false
  var iswarriorchecked = false
  var ismagechecked = false
  var isassassinchecked = false
  var isshamanchecked = false
  var clss = ""
  var cmbtlvl = 0
  var cmbtlvlinput = null
  var cmbtlvlisNaN = false
  var isslowchecked = false
  var isnormalchecked = false
  var isfastchecked = false
  var isanychecked = false
  var atkspd = ""
  var user = null
  var userinput = null
  var validclass = false
  var validcmbtlvl = false
  var validatkspd = false
  var validuser = false
  isarcherchecked = document.getElementById("Archer")
  iswarriorchecked = document.getElementById("Warrior")
  ismagechecked = document.getElementById("Mage")
  isassassinchecked = document.getElementById("Assassin")
  isshamanchecked = document.getElementById("Shaman")
  if(isarcherchecked.checked){
    clss = "Archer/Hunter"
    validclass = true
  }else if(iswarriorchecked.checked){
    clss = "Warrior/Knight"
    validclass = true
  }else if(ismagechecked.checked){
    clss = "Mage/Dark Wizard"
    validclass = true
  }else if(isassassinchecked.checked){
    clss = "Assassin/Ninja"
    validclass = true
  }else if(isshamanchecked.checked){
    clss = "Shaman/Skyseer"
    validclass = true
  }else{
      alert("Please select a class.")
  }
  cmbtlvlinput = document.getElementById("cmbtlvl")
  cmbtlvl = parseInt(cmbtlvlinput.value)
  cmbtlvlisNaN = isNaN(cmbtlvl)
  if(cmbtlvl <= 0 || cmbtlvl > mxcmbtlvl || cmbtlvlisNaN == true){
    alert("Combat Level must be valid.")
  }else{
    validcmbtlvl = true
  }
  isslowchecked = document.getElementById("Slow")
  isnormalchecked = document.getElementById("Normal")
  isfastchecked = document.getElementById("Fast")
  isanychecked = document.getElementById("Any")
  if(isslowchecked.checked){
    atkspd = "Slow"
    validatkspd = true
  }else if(isnormalchecked.checked){
    atkspd = "Normal"
    validatkspd = true
  }else if(isfastchecked.checked){
    atkspd = "Fast"
    validatkspd = true
  }else if(isanychecked.checked){
    atkspd = "Any"
    validatkspd = true
  }else{
      alert("Please select an attack speed.")
  }
  userinput = document.getElementById("User")
  user = userinput.value
  if(user == null || user == ""){
    alert("Username must be valid.")
  }else{
    validuser = true
  }
  if(validclass && validcmbtlvl && validatkspd && validuser){
    alert(user + " the " + clss + ", your level " + cmbtlvl 
          + " weapon with " + atkspd + " attack speed was NOT ordered.")
  }
}
