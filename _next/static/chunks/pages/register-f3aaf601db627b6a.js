(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9219:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(3180)}])},3180:function(e,t,s){"use strict";s.r(t);var r=s(5893),a=s(1664),i=s.n(a),l=s(7294),n=s(3376),c=s(465),u=s.n(c);t.default=()=>{let[e,t]=(0,l.useState)(""),[s,a]=(0,l.useState)(""),[c,_]=(0,l.useState)(""),[o,d]=(0,l.useState)(0),[x,m]=(0,l.useState)(["under","upper","outer","shoes","other"]),h=async t=>{t.preventDefault(),await n.x.item.post({body:{itemname:e,itemvalue:o,createdAt:new Date}})},b=async()=>{m([...x,c]);let e=[...x,c];await n.x.userlabel.post({body:{label:e}}),_("")};return(0,l.useEffect)(()=>{let e=async()=>{await n.x.userlabel.post({body:{label:["under","upper","outer","shoes","other"]}})};e()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{href:"../",children:(0,r.jsx)("div",{className:u().back,children:"所持品リストに戻る"})}),(0,r.jsxs)("div",{className:u().base,children:[(0,r.jsx)("div",{className:u().title,children:"商品登録"}),(0,r.jsxs)("label",{className:u().selectbox002,children:["商品の種類：",(0,r.jsxs)("select",{value:s,onChange:e=>{a(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"選択してください"}),x.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]}),(0,r.jsx)("input",{type:"text",className:u().textbox003,value:c,placeholder:"新しい商品の種類を追加",onChange:e=>_(e.target.value)}),(0,r.jsx)("button",{onClick:b,children:"商品の種類を追加"}),(0,r.jsxs)("form",{onSubmit:h,children:[(0,r.jsxs)("div",{className:u().form,children:[(0,r.jsxs)("div",{className:u().itemname,children:[(0,r.jsx)("label",{children:"商品名"}),(0,r.jsx)("input",{className:u().cformtext,type:"text",value:e,onChange:e=>t(e.target.value)})]}),(0,r.jsxs)("div",{className:u().itemvalue,children:[(0,r.jsx)("label",{children:"金額"}),(0,r.jsx)("input",{className:u().cformtext,type:"number",value:o,onChange:e=>d(Number(e.target.value))})]})]}),(0,r.jsx)("button",{className:u().btn,type:"submit",children:"登録"})]})]})]})})}},465:function(e){e.exports={title:"register_title__SWO1g",tasks:"register_tasks__Vw9_i",deleteBtn:"register_deleteBtn__EU2ld",btn:"register_btn__MZ6m2",base:"register_base__eDiLd",head:"register_head__t8UuN",form:"register_form__rjZi1",cformtext:"register_cformtext__XXHYL",itemname:"register_itemname__wXdsh",itemvalue:"register_itemvalue__S5QiV",back:"register_back__Uv4Ln",textbox003:"register_textbox003__GZAJi",selectbox002:"register_selectbox002__24dNr"}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=9219)}),_N_E=e.O()}]);