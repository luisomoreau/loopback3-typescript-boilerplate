// const fs = require('fs');
// const path = require('path');
//
// module.exports = function(app) {
//
//   createModel(app, "example", instance);
//
// };
//
//
// const createModel = (app, modelName, modelInstance) => {
//
//   var db = app.dataSources.db;
//
//
//   // Create a model from the user instance
//   var Model = db.buildModelFromInstance(modelName, modelInstance, {idInjection: true});
//
//   // Use the model for create, retrieve, update, and delete
//   //var obj = new Model(modelInstance);
//
//   Model.attachTo(db);
//   //Model.setup = app.Model.setup;
//   Model.setup();
//   app.model(Model);
//
//   //console.log(obj.toObject());
//
//   var ModelModel = (app.model(Model));
//   var ModelJSON = {};
//   ModelJSON.name = modelName;
//   ModelJSON.plural = ModelJSON.name + "s";
//   ModelJSON.base = 'PersistedModel';
//   ModelJSON.options = {
//     validateUpsert: true
//   };
//   ModelJSON.mixins = {
//     TimeStamp: {
//       required: false,
//       validateUpsert: true
//     }
//   };
//   ModelJSON.properties = ModelModel.definition.rawProperties;
//   ModelJSON.validations = [];
//   ModelJSON.relations = {};
//   ModelJSON.acls = [];
//   ModelJSON.methods = {};
//
//   ModelJSON = JSON.stringify(ModelJSON);
//   console.log(ModelJSON);
//
//   fs.writeFile(path.join(__dirname, '../..', 'common/models', modelName + '.json'), ModelJSON, function(err) {
//     if (err) throw err;
//   });
//
//   fs.writeFile(path.join(__dirname, '../..', 'common/models', modelName + '.ts'), tsTemplate.replace("example", modelName), function(err) {
//     if (err) throw err;
//   });
//
// }
//
//
// // Mongo document instance
// // Instance JSON document
// var instance = {};
//
// // Typescript template
// var tsTemplate = "import {Model} from '@mean-expert/model';\n" +
//   "/**\n" +
//   " * @module example\n" +
//   " * @description\n" +
//   " **/\n" +
//   "@Model({\n" +
//   "  hooks: {\n" +
//   "    access: {name: 'access', type: 'operation'},\n" +
//   "    persist: {name: 'persist', type: 'operation'},\n" +
//   "    afterSave: {name: 'after save', type: 'operation'},\n" +
//   "    beforeSave: {name: 'before save', type: 'operation'},\n" +
//   "    beforeDelete: {name: 'before delete', type: 'operation'},\n" +
//   "    afterDelete: {name: 'after delete', type: 'operation'},\n" +
//   "    beforeMyRemote: {name: 'myRemote', type: 'beforeRemote'},\n" +
//   "    afterMyRemote: {name: 'myRemote', type: 'afterRemote'},\n" +
//   "  },\n" +
//   "  remotes: {\n" +
//   "    myRemote: {\n" +
//   "      returns: {arg: 'result', type: 'array'},\n" +
//   "      http: {path: '/my-remote', verb: 'get'}\n" +
//   "    }\n" +
//   "  }\n" +
//   "})\n" +
//   "\n" +
//   "class example {\n" +
//   "  constructor(public model: any) {\n" +
//   "  }\n" +
//   "\n" +
//   "  access(ctx: any, next: Function): void {\n" +
//   "    console.log('example: access');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  persist(ctx: any, next: Function): void {\n" +
//   "    console.log('example: persist');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  beforeSave(ctx: any, next: Function): void {\n" +
//   "    console.log('example: before Save');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  beforeMyRemote(ctx: any, next: Function) {\n" +
//   "    console.log('example: before myRemote');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  myRemote(next: Function): void {\n" +
//   "    console.log('example: myRemote');\n" +
//   "    this.model.find(next);\n" +
//   "  }\n" +
//   "\n" +
//   "  afterMyRemote(ctx: any, next: Function) {\n" +
//   "    console.log('example: after myRemote');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  beforeDelete(ctx: any, next: Function): void {\n" +
//   "    console.log('example: before Delete');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "  afterDelete(ctx: any, next: Function): void {\n" +
//   "    console.log('example: after Delete');\n" +
//   "    next();\n" +
//   "  }\n" +
//   "\n" +
//   "}\n" +
//   "\n" +
//   "module.exports = example;\n"
