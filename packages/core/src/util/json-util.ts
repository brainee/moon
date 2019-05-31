/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/3/27
 **/


import * as  generateSchema from 'generate-schema';
import {compile} from 'json-schema-to-typescript';
import {IWebApiContext} from "../typings/api";
import {IJsonTsGenResult, ITsGenResult} from "../typings/util";

/**
 * 将json转换为ts定义
 *
 * @param value
 * @returns {any}
 */
export async function genTsFromJSON(name:string,value:any,context?: IWebApiContext):Promise<IJsonTsGenResult> {
  let schema  = generateSchema.json(name,value);
  let tsResult = await genTsFromSchema(name,schema,context);
  return {...tsResult, schema};
}


//考虑使用z隐式传参呢..

/**
 * 将json schema 转换为ts定义
 *
 * @param {string} name
 * @param jsonSchema
 * @returns {Promise<string>}
 */
export async function genTsFromSchema(name:string,jsonSchema:any,context?: IWebApiContext):Promise<ITsGenResult>{

  // context.webapiGroup.definitions
  // let reg  = /#\/definitions\//;
  // let parse = {
  //   order: 1,
  //   canParse:reg ,
  //   parse: function(refStr) {
  //     console.log('definitions==>',refStr,
  //       // context.webapiGroup.definitions[refStr.replace(reg,"")]
  //     )
  //     ;
  //
  //     // if(typeof(refStr)==='string'){
  //     //   return context.webapiGroup.definitions[refStr.replace(reg,"")];
  //     // }
  //   }
  // }

  // let _jsonSchema  = await $RefParser.dereference(jsonSchema);

  // console.log(_jsonSchema);
  let tsContent = await compile(
    jsonSchema,
    name,{
      bannerComment:"",
      // unreachableDefinitions:true,
      // $refOptions:{
      //   parse:{
      //     definitions:parse
      //   }
      // }
    }
  );

  let result ={
    //TODO 这是一个默认的规则;
    typeName:jsonSchema.title?jsonSchema.title.replace(/ */ig,""):name,
    tsContent
  }
  // console.log(result);
  return result;
}

export async function genTsFromDefines(definitions:{
  definitions:{[key:string]:any}
},name='IgnoreType'):Promise<string>{
  let tsContent = await compile(
    definitions,name
    ,{
      bannerComment:"",
      unreachableDefinitions:true,
    }
  );
  return tsContent;
}

