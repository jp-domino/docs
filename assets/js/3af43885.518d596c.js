"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[2953],{62605:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(67294),r=t(74866),d=t(85162),i=t(92949),s=(t(91262),t(97904)),o=t(83599);t(99869);const l=(0,a.memo)((e=>{let{data:n}=e;return a.createElement(a.Fragment,null,a.createElement(s.HH,{type:"target",position:s.Ly.Left,style:{background:"#555"}}),a.createElement("div",null,a.createElement("strong",null,n.label)),a.createElement(s.HH,{type:"source",position:s.Ly.Right,id:"b"}))}));var c=t(33140),m=t(73091),p=t(2029),y=t(287);const u={default:l},x={tickLabels:{fontSize:8,fill:"#BCC2C4"},label:{fontSize:8,fill:"#BCC2C4"}};function f(e){let{children:n,title:t,data:l}=e,f=JSON.parse(n).rfInstance;const h="20em",{colorMode:D}=(0,i.I)();return a.createElement("div",null,a.createElement("h2",null,`Example: ${t}`),a.createElement(r.Z,null,a.createElement(d.Z,{value:"app",label:"App",default:!0},a.createElement("div",{style:{height:h}},a.createElement(s.x$,{nodes:f.nodes,nodeTypes:u,edges:f.edges,preventScrolling:!0,fitView:!0,panOnDrag:!1,proOptions:{hideAttribution:!0}},a.createElement(o.A,null)))),a.createElement(d.Z,{value:"output",label:"Output"},a.createElement("div",{style:{minHeight:h}},a.createElement(c.k,null,a.createElement(m.E,{label:"x",style:x}),a.createElement(m.E,{dependentAxis:!0,label:"y",style:x}),a.createElement(p.C,{style:{data:{fill:"#7B61FF"}},size:1,data:JSON.parse(l)})))),a.createElement(d.Z,{value:"spec",label:"App JSON spec"},a.createElement("div",{style:{minHeight:h}},a.createElement(y.L,{data:f})))))}},89418:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),r=t(25365);function d(e){let{children:n,index:t,folderPath:d}=e;const i=["notes.md","hardware.md","media.md"],s=["Theory and technical notes","Parts list and drivers","Media"][t],o="https://github.com/flojoy-io/docs/tree/main/docs/nodes"+d+i[t],l="string"==typeof n&&n.includes("Driver doc :");return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("details",null,a.createElement("summary",null,a.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},a.createElement("h4",null,s))),l?null:void 0!==n?a.createElement(r.D,null,n):a.createElement(r.D,null,["No theory or technical notes have been contributed for this node yet.","This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.","No supporting screenshots, photos, or videos have been added to the media.md file for this node."][t]),a.createElement("br",null),a.createElement("small",null,a.createElement("i",null,a.createElement("a",{href:o},"Edit ",i[t]," on GitHub")))),a.createElement("hr",null))}},57685:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);function r(e){let{children:n}=e;return""===n.trim()?"This function does not have a docstring description yet.":a.createElement(a.Fragment,null,a.createElement("blockquote",{style:{padding:"0.2rem"}},n),a.createElement("br",null))}},47062:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),r=t(38388);function d(e){let{children:n}=e;const t="This node does not currently have any input parameters.",d="parameters";if(""===n.trim())return t;let i=r.ZP.parse(n);if(Object.keys(i)[0]!=d)return t;let s=i.parameters;return a.createElement("div",null,a.createElement("h3",null,"Input parameters"),Object.keys(s).map(((e,n)=>a.createElement(a.Fragment,null,a.createElement("details",null,a.createElement("summary",{key:n},a.createElement("code",null,e)),a.createElement("ul",null,Object.keys(s[e]).map(((n,t)=>a.createElement("li",{key:t},n,": ",s[e][n])))))))))}},79267:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),r=t(90814);function d(e){let{children:n}=e,t=n;if(t.includes('"""')){let e=t.split('"""')[0],n=t.split('"""')[2];t=e.trimEnd()+n.trimStart().replace("\n\n","\n")}return a.createElement("div",null,a.createElement("h3",null,"Python code"),a.createElement("details",{open:!0},a.createElement(r.Z,{className:"language-python"},t)),a.createElement("br",null))}},91906:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);function r(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null),a.createElement("hr",null),a.createElement("br",null),a.createElement("br",null))}},36155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>f,default:()=>b,frontMatter:()=>x,metadata:()=>h,toc:()=>E});var a=t(87462),r=(t(67294),t(3905)),d=t(57685),i=t(79267),s=t(47062),o=t(62605),l=t(91906),c=t(89418);var m=t(17351);var p=t(86914),y=t(79307),u=t(38177);const x={},f=void 0,h={unversionedId:"nodes/transformers/arithmetic/ADD/ADD",id:"nodes/transformers/arithmetic/ADD/ADD",title:"ADD",description:"[//]: # (Custom component imports)",source:"@site/docs/nodes/transformers/arithmetic/ADD/ADD.md",sourceDirName:"nodes/transformers/arithmetic/ADD",slug:"/nodes/transformers/arithmetic/ADD/",permalink:"/nodes/transformers/arithmetic/ADD/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"MEASUREMENT_UPLOAD",permalink:"/nodes/loaders/frontier/MEASUREMENT_UPLOAD"},next:{title:"SUBTRACT",permalink:"/nodes/transformers/arithmetic/SUBTRACT/"}},D={},E=[{value:"Appendix",id:"appendix",level:2}],A={toc:E};function b(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},A,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(d.Z,{mdxType:"DocString"},"The ADD node can be used to add 2 or more numeric arrays, matrices, dataframes, or constants element-wise. When a constant is added to an array or matrix, each element in the array or matrix will be increased by the constant value. If 2 arrays or matrices of different sizes are added, the output will be the size of the larger array or matrix with only the overlapping elements changed."),(0,r.kt)(i.Z,{mdxType:"PythonCode"},'import numpy as np\nfrom flojoy import flojoy, DataContainer\n\n@flojoy\ndef ADD(dc_inputs: list[DataContainer], params: dicts):\n    """ Add 2 or more numeric arrays, matrices, dataframes, or constants element-wise. \n    When a constant is added to an array or matrix, each element in the array or \n    matrix will be increased by the constant value. If 2 arrays or matrices of different \n    sizes are added, the output will be the size of the larger array or matrix with \n    only the overlapping elements changed.\n    """\n\n    a = [0]\n    b = [0]\n\n    if len(dc_inputs) == 2:\n        a = dc_inputs[0].y\n        b = dc_inputs[1]["y"]\n\n    y = np.add(a, b)\n\n    return DataContainer(x={"a": a, "b": b}, y=y)\n'),(0,r.kt)(s.Z,{mdxType:"Parameters"},""),(0,r.kt)(l.Z,{mdxType:"SectionBreak"}),(0,r.kt)(o.Z,{title:"Add 2 numpy arrays",data:'[{"x":0.0,"y":0.0395410429},{"x":0.0101010101,"y":0.1696815527},{"x":0.0202020202,"y":0.2618444511},{"x":0.0303030303,"y":0.6070171204},{"x":0.0404040404,"y":0.7228015448},{"x":0.0505050505,"y":0.7470683112},{"x":0.0606060606,"y":0.7536513208},{"x":0.0707070707,"y":0.9655237542},{"x":0.0808080808,"y":1.0290083915},{"x":0.0909090909,"y":1.1296094864},{"x":0.101010101,"y":1.1158556283},{"x":0.1111111111,"y":1.119485694},{"x":0.1212121212,"y":1.0647177354},{"x":0.1313131313,"y":1.0174873424},{"x":0.1414141414,"y":1.1451250973},{"x":0.1515151515,"y":1.0771929142},{"x":0.1616161616,"y":0.9134131293},{"x":0.1717171717,"y":0.9812634065},{"x":0.1818181818,"y":0.7971223406},{"x":0.1919191919,"y":0.8729734082},{"x":0.202020202,"y":0.6734002398},{"x":0.2121212121,"y":0.5467659659},{"x":0.2222222222,"y":0.3505720538},{"x":0.2323232323,"y":0.3988720144},{"x":0.2424242424,"y":0.1898238199},{"x":0.2525252525,"y":0.1943693341},{"x":0.2626262626,"y":0.0864911493},{"x":0.2727272727,"y":-0.1019656285},{"x":0.2828282828,"y":-0.3554144982},{"x":0.2929292929,"y":-0.5100165939},{"x":0.303030303,"y":-0.598239102},{"x":0.3131313131,"y":-0.6853489616},{"x":0.3232323232,"y":-0.7729880645},{"x":0.3333333333,"y":-0.7739515342},{"x":0.3434343434,"y":-0.7849449812},{"x":0.3535353535,"y":-0.7656457527},{"x":0.3636363636,"y":-0.8576945493},{"x":0.3737373737,"y":-0.7910151818},{"x":0.3838383838,"y":-0.9148033649},{"x":0.3939393939,"y":-0.7854397074},{"x":0.404040404,"y":-0.9313637018},{"x":0.4141414141,"y":-0.8555179159},{"x":0.4242424242,"y":-0.7981988209},{"x":0.4343434343,"y":-0.5316285273},{"x":0.4444444444,"y":-0.6220733532},{"x":0.4545454545,"y":-0.315316395},{"x":0.4646464646,"y":-0.3114169292},{"x":0.4747474747,"y":-0.3096786909},{"x":0.4848484848,"y":-0.1593880927},{"x":0.4949494949,"y":0.0169149161},{"x":0.5050505051,"y":0.2517414706},{"x":0.5151515152,"y":0.2363521178},{"x":0.5252525253,"y":0.3965119402},{"x":0.5353535354,"y":0.6125939873},{"x":0.5454545455,"y":0.6322991308},{"x":0.5555555556,"y":0.8281956991},{"x":0.5656565657,"y":0.7678609421},{"x":0.5757575758,"y":1.0149839203},{"x":0.5858585859,"y":1.0180083632},{"x":0.595959596,"y":1.0736203835},{"x":0.6060606061,"y":1.032955295},{"x":0.6161616162,"y":1.0602408738},{"x":0.6262626263,"y":1.1172463796},{"x":0.6363636364,"y":1.1110078006},{"x":0.6464646465,"y":1.1109826767},{"x":0.6565656566,"y":1.0645684436},{"x":0.6666666667,"y":1.1082809611},{"x":0.6767676768,"y":0.9725911701},{"x":0.6868686869,"y":0.7321741518},{"x":0.696969697,"y":0.7185712203},{"x":0.7070707071,"y":0.6680687003},{"x":0.7171717172,"y":0.5774675704},{"x":0.7272727273,"y":0.4498649461},{"x":0.7373737374,"y":0.3786592731},{"x":0.7474747475,"y":0.0741850833},{"x":0.7575757576,"y":0.1360730731},{"x":0.7676767677,"y":-0.1180313075},{"x":0.7777777778,"y":-0.1221959569},{"x":0.7878787879,"y":-0.4513982917},{"x":0.797979798,"y":-0.438333894},{"x":0.8080808081,"y":-0.4631226733},{"x":0.8181818182,"y":-0.569821845},{"x":0.8282828283,"y":-0.8249889353},{"x":0.8383838384,"y":-0.8181132673},{"x":0.8484848485,"y":-0.8955175473},{"x":0.8585858586,"y":-0.8103451336},{"x":0.8686868687,"y":-0.9702015033},{"x":0.8787878788,"y":-0.9196340416},{"x":0.8888888889,"y":-0.792108248},{"x":0.898989899,"y":-0.8595364142},{"x":0.9090909091,"y":-0.7441240608},{"x":0.9191919192,"y":-0.7875390366},{"x":0.9292929293,"y":-0.7094329567},{"x":0.9393939394,"y":-0.5593777983},{"x":0.9494949495,"y":-0.5078769104},{"x":0.9595959596,"y":-0.4681297859},{"x":0.9696969697,"y":-0.1849567688},{"x":0.9797979798,"y":-0.1672012414},{"x":0.9898989899,"y":0.0358746853},{"x":1.0,"y":0.2277564449}]',nodeLabel:"ADD",mdxType:"AppDisplay"},'{\n    "rfInstance": {\n        "nodes": [\n            {\n                "width": 150,\n                "height": 135,\n                "id": "LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135ce",\n                "type": "default",\n                "data": {\n                    "id": "LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135ce",\n                    "label": "LINSPACE",\n                    "func": "LINSPACE",\n                    "type": "SIMULATION",\n                    "ctrls": {\n                        "start": {\n                            "functionName": "LINSPACE",\n                            "param": "start",\n                            "value": "10"\n                        },\n                        "end": {\n                            "functionName": "LINSPACE",\n                            "param": "end",\n                            "value": "0"\n                        },\n                        "step": {\n                            "functionName": "LINSPACE",\n                            "param": "step",\n                            "value": "1000"\n                        }\n                    },\n                    "selected": false\n                },\n                "position": {\n                    "x": -85.71428571428574,\n                    "y": 363.4285714285712\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": -85.71428571428574,\n                    "y": 363.4285714285712\n                },\n                "dragging": true\n            },\n            {\n                "width": 115,\n                "height": 115,\n                "id": "SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbd",\n                "type": "SIMULATION",\n                "data": {\n                    "id": "SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbd",\n                    "label": "SINE",\n                    "func": "SINE",\n                    "type": "SIMULATION",\n                    "ctrls": {\n                        "frequency": {\n                            "functionName": "SINE",\n                            "param": "frequency",\n                            "value": "1"\n                        },\n                        "offset": {\n                            "functionName": "SINE",\n                            "param": "offset",\n                            "value": "0"\n                        },\n                        "amplitude": {\n                            "functionName": "SINE",\n                            "param": "amplitude",\n                            "value": "1"\n                        },\n                        "phase": {\n                            "functionName": "SINE",\n                            "param": "phase",\n                            "value": "0"\n                        },\n                        "waveform": {\n                            "functionName": "SINE",\n                            "param": "waveform",\n                            "value": "sine"\n                        }\n                    },\n                    "selected": false\n                },\n                "position": {\n                    "x": 197.14285714285717,\n                    "y": 283.2857142857143\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 197.14285714285717,\n                    "y": 283.2857142857143\n                },\n                "dragging": true\n            },\n            {\n                "width": 115,\n                "height": 115,\n                "id": "RAND-434f7314-f239-4e7d-a9c6-629529db1d82",\n                "type": "SIMULATION",\n                "data": {\n                    "id": "RAND-434f7314-f239-4e7d-a9c6-629529db1d82",\n                    "label": "RAND",\n                    "func": "RAND",\n                    "type": "SIMULATION",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 188.99999999999994,\n                    "y": 469.57142857142867\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 188.99999999999994,\n                    "y": 469.57142857142867\n                },\n                "dragging": true\n            },\n            {\n                "width": 99,\n                "height": 115,\n                "id": "ADD-a586b5d7-4343-430d-89ce-3c2a3d156695",\n                "type": "ARITHMETIC",\n                "data": {\n                    "id": "ADD-a586b5d7-4343-430d-89ce-3c2a3d156695",\n                    "label": "ADD",\n                    "func": "ADD",\n                    "type": "ARITHMETIC",\n                    "ctrls": {},\n                    "inputs": [\n                        {\n                            "name": "y",\n                            "id": "add_y",\n                            "type": "target"\n                        }\n                    ],\n                    "selected": false\n                },\n                "position": {\n                    "x": 416.8571428571427,\n                    "y": 395.14285714285705\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 416.8571428571427,\n                    "y": 395.14285714285705\n                },\n                "dragging": true\n            },\n            {\n                "width": 250,\n                "height": 159,\n                "id": "SCATTER-da4e4991-d9a4-4c71-95e6-56b13266ede6",\n                "type": "VISOR",\n                "data": {\n                    "id": "SCATTER-da4e4991-d9a4-4c71-95e6-56b13266ede6",\n                    "label": "SCATTER",\n                    "func": "SCATTER",\n                    "type": "VISOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 615.5714285714288,\n                    "y": 371.4285714285715\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 615.5714285714288,\n                    "y": 371.4285714285715\n                },\n                "dragging": true\n            }\n        ],\n        "edges": [\n            {\n                "source": "LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135ce",\n                "sourceHandle": "main",\n                "target": "RAND-434f7314-f239-4e7d-a9c6-629529db1d82",\n                "targetHandle": "RAND",\n                "id": "reactflow__edge-LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135cemain-RAND-434f7314-f239-4e7d-a9c6-629529db1d82RAND"\n            },\n            {\n                "source": "LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135ce",\n                "sourceHandle": "main",\n                "target": "SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbd",\n                "targetHandle": "SINE",\n                "id": "reactflow__edge-LINSPACE-340e6c5c-8e47-4a5e-95ed-dc627e9135cemain-SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbdSINE"\n            },\n            {\n                "source": "ADD-a586b5d7-4343-430d-89ce-3c2a3d156695",\n                "sourceHandle": "main",\n                "target": "SCATTER-da4e4991-d9a4-4c71-95e6-56b13266ede6",\n                "targetHandle": "SCATTER",\n                "id": "reactflow__edge-ADD-a586b5d7-4343-430d-89ce-3c2a3d156695main-SCATTER-da4e4991-d9a4-4c71-95e6-56b13266ede6SCATTER"\n            },\n            {\n                "source": "SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbd",\n                "sourceHandle": "main",\n                "target": "ADD-a586b5d7-4343-430d-89ce-3c2a3d156695",\n                "targetHandle": "ADD",\n                "id": "reactflow__edge-SINE-2cd08316-0a0c-4c13-9b1d-382ba4d74cbdmain-ADD-a586b5d7-4343-430d-89ce-3c2a3d156695ADD"\n            },\n            {\n                "source": "RAND-434f7314-f239-4e7d-a9c6-629529db1d82",\n                "sourceHandle": "main",\n                "target": "ADD-a586b5d7-4343-430d-89ce-3c2a3d156695",\n                "targetHandle": "add_y",\n                "id": "reactflow__edge-RAND-434f7314-f239-4e7d-a9c6-629529db1d82main-ADD-a586b5d7-4343-430d-89ce-3c2a3d156695add_y"\n            }\n        ],\n        "viewport": {\n            "x": 234.66911838622127,\n            "y": 107.67920450356877,\n            "zoom": 0.7116576751667055\n        }\n    },\n    "ctrlsManifest": [\n        {\n            "type": "input",\n            "name": "Slider",\n            "id": "INPUT_PLACEHOLDER",\n            "hidden": false,\n            "minHeight": 1,\n            "minWidth": 2,\n            "layout": {\n                "x": 0,\n                "y": 0,\n                "h": 2,\n                "w": 2,\n                "minH": 1,\n                "minW": 2,\n                "i": "INPUT_PLACEHOLDER"\n            }\n        }\n    ]\n}'),(0,r.kt)(m.default,{mdxType:"Example1"}),(0,r.kt)(l.Z,{mdxType:"SectionBreak"}),(0,r.kt)("h2",{id:"appendix"},"Appendix"),(0,r.kt)(c.Z,{index:0,folderPath:"/transformers/arithmetic/ADD/appendix/",mdxType:"AppendixSection"},p.default),(0,r.kt)(c.Z,{index:1,folderPath:"/transformers/arithmetic/ADD/appendix/",mdxType:"AppendixSection"},y.default),(0,r.kt)(c.Z,{index:2,folderPath:"/transformers/arithmetic/ADD/appendix/",mdxType:"AppendixSection"},u.default))}b.isMDXComponent=!0},79307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const d={},i=void 0,s={unversionedId:"nodes/transformers/arithmetic/ADD/appendix/hardware",id:"nodes/transformers/arithmetic/ADD/appendix/hardware",title:"hardware",description:"",source:"@site/docs/nodes/transformers/arithmetic/ADD/appendix/hardware.md",sourceDirName:"nodes/transformers/arithmetic/ADD/appendix",slug:"/nodes/transformers/arithmetic/ADD/appendix/hardware",permalink:"/nodes/transformers/arithmetic/ADD/appendix/hardware",draft:!1,tags:[],version:"current",frontMatter:{}},o={},l=[],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},38177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const d={},i=void 0,s={unversionedId:"nodes/transformers/arithmetic/ADD/appendix/media",id:"nodes/transformers/arithmetic/ADD/appendix/media",title:"media",description:"",source:"@site/docs/nodes/transformers/arithmetic/ADD/appendix/media.md",sourceDirName:"nodes/transformers/arithmetic/ADD/appendix",slug:"/nodes/transformers/arithmetic/ADD/appendix/media",permalink:"/nodes/transformers/arithmetic/ADD/appendix/media",draft:!1,tags:[],version:"current",frontMatter:{}},o={},l=[],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},86914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const d={},i=void 0,s={unversionedId:"nodes/transformers/arithmetic/ADD/appendix/notes",id:"nodes/transformers/arithmetic/ADD/appendix/notes",title:"notes",description:"",source:"@site/docs/nodes/transformers/arithmetic/ADD/appendix/notes.md",sourceDirName:"nodes/transformers/arithmetic/ADD/appendix",slug:"/nodes/transformers/arithmetic/ADD/appendix/notes",permalink:"/nodes/transformers/arithmetic/ADD/appendix/notes",draft:!1,tags:[],version:"current",frontMatter:{}},o={},l=[],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},17351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const d={},i=void 0,s={unversionedId:"nodes/transformers/arithmetic/ADD/examples/EX1/example",id:"nodes/transformers/arithmetic/ADD/examples/EX1/example",title:"example",description:"In this example, LINSPACE generates an array from 0 to 99 (eg: [0, 1, 2\u2026 99]).",source:"@site/docs/nodes/transformers/arithmetic/ADD/examples/EX1/example.md",sourceDirName:"nodes/transformers/arithmetic/ADD/examples/EX1",slug:"/nodes/transformers/arithmetic/ADD/examples/EX1/example",permalink:"/nodes/transformers/arithmetic/ADD/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},o={},l=[],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"LINSPACE")," generates an array from 0 to 99 (eg: ","[0, 1, 2\u2026 99]","). "),(0,r.kt)("p",null,"This array is then passed to both the ",(0,r.kt)("inlineCode",{parentName:"p"},"SINE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RAND")," nodes, which compute ",(0,r.kt)("inlineCode",{parentName:"p"},"numpy.sine()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"numpy.rand()")," on each element of this array (respectively). "),(0,r.kt)("p",null,"Finally, these 2 arrays are added together element-wise - click the ",(0,r.kt)("em",{parentName:"p"},"Output")," tab above to see the result. You guessed it - the output is a noisy sine wave."))}m.isMDXComponent=!0}}]);