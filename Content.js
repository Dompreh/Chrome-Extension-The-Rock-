let theRockImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0GT977VR62jO8j85OuX-tiM_Im1dgLAZkA&usqp=CAU",
    "https://talksport.com/wp-content/uploads/sites/5/2021/11/the-rock.jpeg?strip=all&w=960&quality=100",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrFu-Pm_Wt-5LtsoKTpPB7xphCAlcXWGneLqSeRbxuEgcHyPdQxbZMNwcpaWotb6ql7s&usqp=CAU",
    "https://cdn.quotesgram.com/img/64/1/1736204459-BDZCN.jpg",
    "https://i.insider.com/5ea99c45f242ab17334a1803?width=1000&format=jpeg&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyfecX3ZE4DvrZFisRPyWW-yCVkeTj_Hrdw&usqp=CAU",
    "https://cdn.guff.com/site_2/media/32000/31903/items/a0d0199b8678dd44a4c6ed2a.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/_wGw14T2VgQ-KCVKYUScYGeG800/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/04/12/013/n/1922398/4e09ce4975a96b27_GettyImages-666448194/i/Hottest-Pictures-Dwayne-Rock-Johnson.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSKoropxbil1lY1CqPcglwjUc8WV8hWCb6g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2hSY_5ucRE7NavL5TV7mOtZxz6trOBAaShCiehy5E7R9TinSlYyFbTO34LJZqL1rHko&usqp=CAU",
    "https://cdn.quotesgram.com/img/18/19/166248139-7681.jpg",  
];

const imgs=document.getElementsByTagName('img');
for(let i=0; i < imgs.length; i++ ){
    const randomImg = Math.floor(Math.random()*theRockImages.length)
    imgs[i].src=theRockImages[randomImg]
}
const header=document.getElementsByTagName('h3');
for(let i=0; i < header.length; i++ ){
    header[i].innerText="Ypee I got control of what you see"
}