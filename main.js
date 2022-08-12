/*
--- GROUP ASSIGNMENT ---

Section: DCF255-NFF

Date: 12th August, 2022

Academic Policy:
We declare that the attached project is our own work in accordance with Seneca Academic Policy. No part 
of this assignment has been copied manually or electronically from any other source or distributed to other 
students.

About Group-803:
I, Nishit Shah, am the Leader of this group. The taskes, I assigned to my group members, are following:
WebSite : Nishit
Report  : Om and Harsh

My Group Members:
Nishit Shah  [130 176 217]
Om Sharma  [139 269 211]
Harsh Sethi [121 889 216]
*/

var getID = function (name) {
  return document.getElementById(name);
};

var displayDiv = function (id) {
  if (id === "what-is-dhcp") {
    getID("what-is-dhcp").style.display = "block";
    getID("why-use-dhcp").style.display = "none";
    getID("how-does-dhcp-work").style.display = "none";
    getID("references").style.display = "none";
  } else if (id === "why-use-dhcp") {
    getID("what-is-dhcp").style.display = "none";
    getID("why-use-dhcp").style.display = "block";
    getID("how-does-dhcp-work").style.display = "none";
    getID("references").style.display = "none";
  } else if (id === "how-does-dhcp-work") {
    getID("what-is-dhcp").style.display = "none";
    getID("why-use-dhcp").style.display = "none";
    getID("how-does-dhcp-work").style.display = "block";
    getID("references").style.display = "none";
  } else if (id === "references") {
    getID("what-is-dhcp").style.display = "none";
    getID("why-use-dhcp").style.display = "none";
    getID("how-does-dhcp-work").style.display = "none";
    getID("references").style.display = "block";
  }
};

// display default page
displayDiv("what-is-dhcp");

// button event functions to switch <div> tag visibility
getID("bttn-a").onclick = function () {
  displayDiv("what-is-dhcp");
};

getID("bttn-b").onclick = function () {
  displayDiv("why-use-dhcp");
};

getID("bttn-c").onclick = function () {
  displayDiv("how-does-dhcp-work");
};

getID("bttn-d").onclick = function () {
  displayDiv("references");
};
