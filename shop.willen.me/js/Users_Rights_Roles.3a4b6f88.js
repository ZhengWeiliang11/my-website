(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var a=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):n(a(e))}},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),o=r("d039"),i=r("ad6d"),s="toString",l=RegExp.prototype,u=l[s],c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(c||d)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in l)?i.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},2666:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:7}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"姓名",prop:"username"}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),r("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),r("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),r("el-table-column",{attrs:{label:"状态",prop:"mg_state"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色："+e._s(e.userInfo.role_name))]),r("p",[e._v(" 分配新角色： "),r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.it,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},n=[],o=(r("99af"),r("96cf"),r("1da1")),i={data:function(){var e=function(e,t,r){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(a.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(a.test(t))return r();r(new Error("请输入合法的手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3~10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"密码的长度在6~15个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectedRoleId:""}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户列表失败!"));case 6:e.userlist=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败！"));case 7:t.$message.success("更新用户状态成功！");case 8:case"end":return r.stop()}}),r)})))()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:a=t.sent,n=a.data,201!==n.meta.status&&e.$message.error("添加用户失败！"),e.$message.success("添加用户成功！"),e.addDialogVisible=!1,e.getUserList();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询用户信息失败"));case 6:t.editForm=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/"+e.editForm.id,{email:e.editForm.email,mobile:e.editForm.mobile});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新用户信息失败"));case 8:e.editDialogVisible=!1,e.getUserList(),e.$message.success("更新用户信息成功");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("users/"+e);case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除用户失败！"));case 11:t.$message.success("删除用户成功！"),t.getUserList();case 13:case"end":return r.stop()}}),r)})))()},setRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userInfo=e,r.next=3,t.$http.get("roles");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取角色列表失败！"));case 7:t.rolesList=n.data,t.setRoleDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择要分配的角色"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectedRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新角色失败！"));case 8:e.$message.success("更新角色成功"),e.getUserList(),e.setRoleDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.selectedRoleId="",this.userInfo={}}}},s=i,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=u.exports},3024:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){e.addRoleDialogVisible=!0}}},[e._v("添加角色")])],1)],1),r("el-table",{attrs:{data:e.rolelist,border:"",stripe:"","row-key":"id"}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,n){return r("el-row",{key:a.id,class:["vcenter","bdbottom",0===n?"bdtop":""]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,n){return r("el-row",{key:a.id,class:[0===n?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a){return r("el-tag",{key:a.id,attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showEditRoleDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeRoleById(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addRoleDialogVisible=t},close:e.addRoleDialogClosed}},[r("el-form",{ref:"addRoleFormRef",attrs:{model:e.addRoleForm,rules:e.addRoleFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRoleForm.roleName,callback:function(t){e.$set(e.addRoleForm,"roleName",t)},expression:"addRoleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRoleForm.roleDesc,callback:function(t){e.$set(e.addRoleForm,"roleDesc",t)},expression:"addRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.editRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editRoleDialogVisible=t},close:e.editRoleDialogClosed}},[r("el-form",{ref:"editRoleFormRef",attrs:{model:e.editRoleForm,rules:e.editRoleFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.editRoleForm.roleName,callback:function(t){e.$set(e.editRoleForm,"roleName",t)},expression:"editRoleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.editRoleForm.roleDesc,callback:function(t){e.$set(e.editRoleForm,"roleDesc",t)},expression:"editRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.showSetRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.showSetRightDialogVisible=t},close:e.setRightDialogClosed}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightslist,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showSetRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},n=[];r("99af"),r("4160"),r("a15b"),r("159b");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function i(e){if(Array.isArray(e))return o(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function l(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||s(e)||l(e)||u()}r("96cf");var d=r("1da1"),f={data:function(){return{rolelist:[],addRoleDialogVisible:!1,addRoleForm:{roleName:"",roleDesc:""},addRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},showSetRightDialogVisible:!1,rightslist:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:"",editRoleForm:{},editRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},editRoleDialogVisible:!1}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取角色列表失败"));case 6:e.rolelist=a.data;case 7:case"end":return t.stop()}}),t)})))()},removeRightById:function(e,t){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$confirm("此操作将永久删除该标签，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=a.sent,"confirm"===n){a.next=5;break}return a.abrupt("return",r.$message.info("取消了删除"));case 5:return a.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(o=a.sent,i=o.data,200===i.meta.status){a.next=11;break}return a.abrupt("return",r.$message.error("删除权限失败！"));case 11:e.children=i.data;case 12:case"end":return a.stop()}}),a)})))()},showSetRightDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取权限数据失败！"));case 7:t.rightslist=n.data,t.getLeafKeys(e,t.defKeys),t.showSetRightDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){return r.getLeafKeys(e,t)}))},setRightDialogClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(c(e.$refs.treeRef.getCheckedKeys()),c(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a});case 4:if(n=t.sent,o=n.data,200===o.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配权限失败！"));case 8:e.$message.success("分配权限成功"),e.getRolesList(),e.showSetRightDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},addRoleDialogClosed:function(){this.$refs.addRoleFormRef.resetFields()},addRole:function(){var e=this;this.$refs.addRoleFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("roles",e.addRoleForm);case 4:a=t.sent,n=a.data,201!==n.meta.status&&e.$message.error("添加角色失败！"),e.$message.success("添加角色成功！"),e.addRoleDialogVisible=!1,e.getRolesList();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeRoleById:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("roles/"+e);case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除角色失败！"));case 11:t.$message.success("删除角色成功！"),t.getRolesList();case 13:case"end":return r.stop()}}),r)})))()},showEditRoleDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询角色信息失败"));case 6:t.editRoleForm=n.data,t.editRoleDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editRoleDialogClosed:function(){this.$refs.editRoleFormRef.resetFields()},editRoleInfo:function(){var e=this;this.$refs.editRoleFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("roles/"+e.editRoleForm.roleId,{roleName:e.editRoleForm.roleName,roleDesc:e.editRoleForm.roleDesc});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新角色信息失败"));case 8:e.editRoleDialogVisible=!1,e.getRolesList(),e.$message.success("更新角色信息成功");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},m=f,p=(r("7539"),r("2877")),b=Object(p["a"])(m,a,n,!1,null,"4e70cf5b",null);t["default"]=b.exports},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),o=r("7dd0"),i="String Iterator",s=n.set,l=n.getterFor(i);o(String,"String",(function(e){s(this,{type:i,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),o=r("9bdd"),i=r("e95a"),s=r("50c4"),l=r("8418"),u=r("35a1");e.exports=function(e){var t,r,c,d,f,m,p=n(e),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,R=u(p),y=0;if(v&&(h=a(h,g>2?arguments[2]:void 0,2)),void 0==R||b==Array&&i(R))for(t=s(p.length),r=new b(t);t>y;y++)m=v?h(p[y],y):p[y],l(r,y,m);else for(d=R.call(p),f=d.next,r=new b;!(c=f.call(d)).done;y++)m=v?o(d,h,[c.value,y],!0):c.value,l(r,y,m);return r.length=y,r}},"746f":function(e,t,r){var a=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||i(t,e,{value:o.f(e)})}},7539:function(e,t,r){"use strict";r("a226")},"9bdd":function(e,t,r){var a=r("825a"),n=r("2a62");e.exports=function(e,t,r,o){try{return o?t(a(r)[0],r[1]):t(r)}catch(i){throw n(e),i}}},a226:function(e,t,r){},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),s=r("83ab"),l=r("4930"),u=r("fdbf"),c=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),p=r("825a"),b=r("7b0b"),g=r("fc6a"),h=r("c04e"),v=r("5c6c"),R=r("7c73"),y=r("df75"),w=r("241c"),x=r("057f"),k=r("7418"),$=r("06cf"),F=r("9bf2"),_=r("d1e7"),D=r("9112"),S=r("6eeb"),I=r("5692"),O=r("f772"),j=r("d012"),V=r("90e3"),C=r("b622"),L=r("e538"),N=r("746f"),q=r("d44e"),A=r("69f3"),E=r("b727").forEach,z=O("hidden"),U="Symbol",B="prototype",P=C("toPrimitive"),T=A.set,K=A.getterFor(U),J=Object[B],Z=n.Symbol,M=o("JSON","stringify"),H=$.f,Q=F.f,W=x.f,G=_.f,X=I("symbols"),Y=I("op-symbols"),ee=I("string-to-symbol-registry"),te=I("symbol-to-string-registry"),re=I("wks"),ae=n.QObject,ne=!ae||!ae[B]||!ae[B].findChild,oe=s&&c((function(){return 7!=R(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=H(J,t);a&&delete J[t],Q(e,t,r),a&&e!==J&&Q(J,t,a)}:Q,ie=function(e,t){var r=X[e]=R(Z[B]);return T(r,{type:U,tag:e,description:t}),s||(r.description=t),r},se=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Z},le=function(e,t,r){e===J&&le(Y,t,r),p(e);var a=h(t,!0);return p(r),d(X,a)?(r.enumerable?(d(e,z)&&e[z][a]&&(e[z][a]=!1),r=R(r,{enumerable:v(0,!1)})):(d(e,z)||Q(e,z,v(1,{})),e[z][a]=!0),oe(e,a,r)):Q(e,a,r)},ue=function(e,t){p(e);var r=g(t),a=y(r).concat(pe(r));return E(a,(function(t){s&&!de.call(r,t)||le(e,t,r[t])})),e},ce=function(e,t){return void 0===t?R(e):ue(R(e),t)},de=function(e){var t=h(e,!0),r=G.call(this,t);return!(this===J&&d(X,t)&&!d(Y,t))&&(!(r||!d(this,t)||!d(X,t)||d(this,z)&&this[z][t])||r)},fe=function(e,t){var r=g(e),a=h(t,!0);if(r!==J||!d(X,a)||d(Y,a)){var n=H(r,a);return!n||!d(X,a)||d(r,z)&&r[z][a]||(n.enumerable=!0),n}},me=function(e){var t=W(g(e)),r=[];return E(t,(function(e){d(X,e)||d(j,e)||r.push(e)})),r},pe=function(e){var t=e===J,r=W(t?Y:g(e)),a=[];return E(r,(function(e){!d(X,e)||t&&!d(J,e)||a.push(X[e])})),a};if(l||(Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=V(e),r=function(e){this===J&&r.call(Y,e),d(this,z)&&d(this[z],t)&&(this[z][t]=!1),oe(this,t,v(1,e))};return s&&ne&&oe(J,t,{configurable:!0,set:r}),ie(t,e)},S(Z[B],"toString",(function(){return K(this).tag})),S(Z,"withoutSetter",(function(e){return ie(V(e),e)})),_.f=de,F.f=le,$.f=fe,w.f=x.f=me,k.f=pe,L.f=function(e){return ie(C(e),e)},s&&(Q(Z[B],"description",{configurable:!0,get:function(){return K(this).description}}),i||S(J,"propertyIsEnumerable",de,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),E(y(re),(function(e){N(e)})),a({target:U,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=Z(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!s},{create:ce,defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:fe}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),a({target:"Object",stat:!0,forced:c((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(b(e))}}),M){var be=!l||c((function(){var e=Z();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))}));a({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,r){var a,n=[e],o=1;while(arguments.length>o)n.push(arguments[o++]);if(a=t,(m(t)||void 0!==e)&&!se(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!se(t))return t}),n[1]=t,M.apply(null,n)}})}Z[B][P]||D(Z[B],P,Z[B].valueOf),q(Z,U),j[z]=!0},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:n})},a766:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),r("el-table-column",{attrs:{label:"路径",prop:"path"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},n=[],o=(r("96cf"),r("1da1")),i={data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限列表失败"));case 6:e.rightsList=a.data;case 7:case"end":return t.stop()}}),t)})))()}}},s=i,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=u.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in o)&&n(o,l,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},d28b:function(e,t,r){var a=r("746f");a("iterator")},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),o=r("e260"),i=r("9112"),s=r("b622"),l=s("iterator"),u=s("toStringTag"),c=o.values;for(var d in n){var f=a[d],m=f&&f.prototype;if(m){if(m[l]!==c)try{i(m,l,c)}catch(b){m[l]=c}if(m[u]||i(m,u,d),n[d])for(var p in o)if(m[p]!==o[p])try{i(m,p,o[p])}catch(b){m[p]=o[p]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),s=r("861d"),l=r("9bf2").f,u=r("e893"),c=o.Symbol;if(n&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new c(e):void 0===e?c():c(e);return""===e&&(d[t]=!0),t};u(f,c);var m=f.prototype=c.prototype;m.constructor=f;var p=m.toString,b="Symbol(test)"==String(c("test")),g=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(i(d,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var a=r("b622");t.f=a},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),s=r("50c4"),l=r("fc6a"),u=r("8418"),c=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=c("species"),g=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!p},{slice:function(e,t){var r,a,c,d=l(this),f=s(d.length),m=i(e,f),p=i(void 0===t?f:t,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(d,m,p);for(a=new(void 0===r?Array:r)(h(p-m,0)),c=0;m<p;m++,c++)m in d&&u(a,c,d[m]);return a.length=c,a}})}}]);
//# sourceMappingURL=Users_Rights_Roles.3a4b6f88.js.map