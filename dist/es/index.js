import e,{useState as t}from"react";import{Editor as o}from"react-draft-wysiwyg";import"react-draft-wysiwyg/dist/react-draft-wysiwyg.css";!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".input{border:1 solid #d3d3d3;border-radius:5px;height:35px;outline:none;padding-left:5px}.localEditor{height:45vh;margin-bottom:20px;overflow-y:auto}.localEditorBorder{border:1 solid #d3d3d3;border-radius:15;overflow-y:auto}input[type=file]{color:#0000}.inputfile{opacity:0;overflow:hidden;position:absolute}");var a=()=>{let a={subTopicName:"",subTopicDescription:"",contentData:"",uploadContent:[],selected:!1},r={topicName:"",selected:!1,topicDescription:"",contentData:"",uploadContent:[],subTopics:[]};const[i,n]=t([{topicName:"",selected:!1,topicDescription:"",contentData:"",uploadContent:["https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/images.jpeg","https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/Wallpaper.jpeg"],subTopics:[]}]),[l,s]=t(1),[c,p]=t(1),d=(e,t)=>{const o=i?.map(((o,a)=>{if(a+1!==l)return o;switch(t){case"topicName":return{...o,topicName:e};case"topicDescription":return{...o,topicDescription:e};case"topicContent":return{...o,contentData:e};case"uploadContent":return{...o,uploadContent:[...o?.uploadContent,e]};default:return o}}));n(o)},u=(e,t)=>{const o=i?.map(((o,a)=>{if(a+1===l){let a=o?.subTopics?.map(((o,a)=>{if(a+1!==c)return o;switch(t){case"subTopicName":return{...o,subTopicName:e};case"subTopicDescription":return{...o,subTopicDescription:e};case"subTopicContent":return{...o,contentData:e};case"uploadContent":return{...o,uploadContent:[...o?.uploadContent,e]};default:return o}}));return{...o,subTopics:a}}return o}));n(o)},m=(t,a,r)=>e.createElement("div",{id:r},((t,o)=>e.createElement("div",null,e.createElement("h5",{style:{marginBottom:10}},"topic"===o?"Topic Name :":"SubTopic Name :"),e.createElement("input",{className:"input",placeholder:"topic"===o?"Topic Name":"SubTopic Name",style:{flex:1,width:"99.3%"},value:"topic"===o?t.topicName:t.subTopicName,onChange:e=>"topic"===o?d(e.target.value,"topicName"):u(e.target.value,"subTopicName")})))(t,a),((t,a)=>e.createElement(e.Fragment,null,e.createElement("h5",{style:{marginBottom:10}},"Content :"),e.createElement(o,{initialContentState:t?.contentData,onChange:e=>"topic"===a?d(e,"topicContent"):u(e,"subTopicContent"),toolbarClassName:"toolbarClassName localToolBar",wrapperClassName:"wrapperClassName localEditor localEditorBorder",editorClassName:"editorClassName localEditor",style:{width:"100%"}})))(t,a),((t,o)=>{let a=t?.uploadContent?.length>0;return e.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},e.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},a&&t?.uploadContent?.map((t=>e.createElement("img",{src:t,alt:"",style:{height:94,width:100,marginRight:10,marginBottom:10}})))),e.createElement("div",{style:{marginBottom:20,width:a?100:200,height:94,flexDirection:"row",justifyContent:"center",alignItems:"center",border:"2px #8687a7 dashed",borderRadius:5}},e.createElement("input",{type:"file",name:"file",id:"file",multiple:!0,accept:"audio/*,audio/*,image/*,application/*,text/*,.js,.c,.py,.cpp",className:"inputfile",style:{height:94,width:a?100:200},onChange:e=>{""!==e.target.value&&("topic"===o?d(e.target.value,"uploadContent"):u(e.target.value,"uploadContent"))}}),e.createElement("h5",{htmlFor:"file",style:{marginLeft:a?43:35,marginTop:a?33:40,color:"#8687a7",fontSize:a?22:14}},e.createElement("p",null,a?"+":"Upload Media & Files"))))})(t,a)),h=i?.length,b=i?.[l-1]?.subTopics?.length;return e.createElement("div",{style:{padding:"20px"}},e.createElement("div",{style:{alignContent:"center",display:"flex",flexDirection:"row",flexWrap:"wrap"}},[...new Array(h)]?.map(((t,o)=>e.createElement("div",{style:{flexDirection:"row",position:"relative"}},e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",borderWidth:l===o+1?0:1,backgroundColor:l===o+1?"#3133b1":"transparent",color:l===o+1?"white":"black",position:"relative"},onClick:()=>{s(o+1),p(1)}},"Topic ",o+1),h>1&&e.createElement("button",{style:{position:"absolute",top:-10,left:50,color:"red",borderRadius:40,borderWidth:0,transform:"rotate(45deg)"},onClick:()=>(e=>{let t=i?.length,o=i?.filter(((t,o)=>o!==e));n(o),l===t&&s(l-1)})(o)},"+")))),e.createElement("div",null,e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",border:"2px #8687a7 dashed",backgroundColor:"transparent",fontSize:15,color:"#8687a7"},onClick:()=>{n([...i,r])}},"+"))),i?.map(((e,t)=>l===t+1?m(e,"topic",`topic ${t}`):null)),e.createElement("div",{style:{display:"flex",flexDirection:0===b?"column":"row",flexWrap:"wrap"}},[...new Array(b)]?.map(((t,o)=>e.createElement("div",{style:{flexDirection:"row",position:"relative"}},e.createElement("button",{style:{height:30,width:100,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",borderWidth:c===o+1?0:1,backgroundColor:c===o+1?"#3133b1":"transparent",color:c===o+1?"white":"black"},onClick:()=>p(o+1)},"Sub Topic ",o+1),e.createElement("button",{style:{position:"absolute",top:-10,left:85,color:"red",borderRadius:40,borderWidth:0,transform:"rotate(45deg)"},onClick:()=>(e=>{let t=i?.map(((t,o)=>{if(o===l-1){let o=t?.subTopics?.length,a=t?.subTopics?.filter(((t,o)=>o!==e));return c===o&&p(c-1),{...t,subTopics:a}}return t}));n(t)})(o)},"+")))),0===b&&e.createElement("h5",null,"Add SubTopic :"),e.createElement("button",{style:{height:30,width:65,borderRadius:5,marginRight:10,marginBottom:15,borderStyle:"solid",border:"2px #8687a7 dashed",backgroundColor:"transparent",fontSize:15,color:"#8687a7"},onClick:()=>{let e=i?.map(((e,t)=>{if(t+1===l){let t=[...e.subTopics,a];return{...e,subTopics:t}}return e}));n(e)}},"+")),i?.length>0&&i[l-1]?.subTopics?.map(((e,t)=>c===t+1?m(e,"subTopic",`sub ${t}`):null)))};export{a as LessonPlan};
