(()=>{"use strict";const t=new class{getBoardCells(){let t=document.getElementsByClassName("box");t=Array.from(t);let A=[];for(let u in t)A.push(t[u].dataset.id);this.getRandomCell(A,t)}getRandomCell(t,A){let u=t[Math.floor(Math.random()*t.length)];for(;u===this.GoblinCell;)u=t[Math.floor(Math.random()*t.length)];this.GoblinCell=u,this.datasetId="",A.filter((t=>t.dataset.id===u?this.datasetId=t.dataset.id:"some")),this.addImage(this.datasetId)}addImage(t){const A=document.querySelector("[data-id='"+t+"']"),u=document.createElement("img");u.className="goblin",u.src="data:image/png;base64,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",A.appendChild(u)}removeImage(){document.querySelector(".goblin").remove()}startInterval(){setInterval((()=>{this.removeImage(),this.getBoardCells()}),2e3)}};t.getBoardCells(),t.startInterval()})();