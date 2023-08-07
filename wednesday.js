var WednesdayL1Desk1 = L.rectangle(
    desk1Wall
    ,setRoomStyle(3)
).bindTooltip("Desk 1", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent3);;
});


var WednesdayL1Desk2 = L.rectangle(
    desk2Wall
    ,setRoomStyle(2)
).bindTooltip("Desk 2", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent2);
});

var WednesdayL1Desk3 = L.rectangle(
    desk3Wall
    ,setRoomStyle(2)
).bindTooltip("Desk 3", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent2);
});

var WednesdayL1Desk4 = L.rectangle(
    desk4Wall
    ,setRoomStyle(1)
).bindTooltip("Desk 4", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent1);
});


var WednesdayL1Desk5 = L.rectangle(
    desk5Wall
    ,setRoomStyle(2)
).bindTooltip("Desk 5", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent2);
});

var WednesdayL1Desk6 = L.rectangle(
    desk6Wall
    ,setRoomStyle(0)
).bindTooltip("Desk 6", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent0);
});

var WednesdayL1Desk7 = L.rectangle(
    desk7Wall
    ,setRoomStyle(1)
).bindTooltip("Desk 7", {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
sidebar.show()
sidebar.setContent(sideBarContent1);
});