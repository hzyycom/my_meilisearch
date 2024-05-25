<template>
  
  <!-- 搜索索引 -->
  <ais-instant-search 
    index-name="test_cls_5:ctime:desc"
    :search-client="searchClient" 
    :on-state-change="onStateChange"
    :initial-ui-state="initialUiState"
  >
    
    <!-- 搜索框 -->
    <ais-search-box placeholder='输入关键词 聚合信息'/>
    
    <!-- 搜索条件 -->
    <ais-configure
      :hitsPerPage.camel="100"
      :distinct="true"
      :analytics="false"
      :enable-personalization.camel="true"
      
      :matchingStrategy="all"
    />

    <!-- :typoTolerance.camel="false" -->

    <!-- 搜索结果展示 -->
    <ais-hits>
      <template v-slot:item="{ item }">
        <div class="ais-hits-ctime">
          <p>{{ item.ctime }}</p>
        </div>
        <div>
          <ais-highlight :hit="item" attribute="brief"  class="item"/>
        </div>
        
      </template>
    </ais-hits>

  </ais-instant-search>
</template>




<script>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
// import "instantsearch.css/themes/satellite-min.css";


export default {
  //  组件参数
  props: ["host", "size"],

  data(props) {

    return {
      searchClient: instantMeiliSearch(
        props.host,
        "YqvEfpsUzmCtT5HK0aobSvssCwfQLpj-tdMbiY7mpW4"
      ).searchClient,
      initialUiState:{
        test_cls_5:{
          query: "杭州",
          page:10
      },
      },
      onStateChange({uiState, setUiState}){
        const searchIndex = 'test_cls_5:ctime:desc';
        var query = uiState[searchIndex]["query"];
        
        // 分割字符串并给每个word添加双引号
        if(query != "" && query != undefined){
          var words = query.split(" ");
          words = words.map(element =>{
            if(element != ""){
              element =  '"' + element + '"';
              return element;
            }
          })
          ;

          // 字符串数组拼接成一个字符串
          query = words.join(" ")
          console.log("query join: "  +  query);

          uiState[searchIndex]["query"] = query;
          setUiState(uiState);
        }else{
          uiState[searchIndex]["query"] = "";
          setUiState(uiState);
        }  
      }
      
    };
  },

};
</script>


<style>

@import "../css/basic_meilisearch.css"

</style>
