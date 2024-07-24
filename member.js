function skillsMember() {
    var skill = document.getElementById("skill").value;
    var skills = document.getElementById("skills");
    var newSkill = document.createElement("li");
    var text = document.createTextNode(skill);
    newSkill.appendChild(text);
    skills.appendChild(newSkill);
}