var MondayDesks = [];

spaceList = [space1, space2, space3, space4, space5, space6, space7, space8, space9, space10, space11, space12, space13, space14, space15, space16, space17, space18, space19, space20, space21, space22, space23, space24, space25, space26, space27, space28, space29, space30]
roomStyleList = [4, 4, 3, 2, 4, 4, 2, 3, 2, 1, 3, 2, 1, 4, 4, 2, 1, 3, 2, 4, 4, 4, 4, 2, 3, 2, 1, 3, 2, 1];
sideBarList = [sideBarContent0, sideBarContent1, sideBarContent2, sideBarContent3, sideBarContent4]

for (let i = 0; i < spaceList.length; i++) {
    let roomStyleNum = roomStyleList[i];
    let sideBar = sideBarList[roomStyleNum];
    var space = L.rectangle
        (
            spaceList[i],
            setRoomStyle(roomStyleNum)
        ).bindTooltip(spaceListNames[i], {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function () {
            sidebar.show()
            console.log(i)
            sidebar.setContent(sideBar);
        });
    MondayDesks.push(space);
}