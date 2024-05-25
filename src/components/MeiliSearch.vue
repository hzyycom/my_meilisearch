<template>
  
  <!-- 搜索索引 -->
  <ais-instant-search 
    index-name="test_cls_5:ctime:desc"
    :search-client="searchClient" 
    :on-state-change="onStateChange"
    :initial-ui-state="initialUiState"
  >
    
    <!-- 搜索框 -->
    <ais-search-box placeholder='搜索词加双引号"" 搜索更精准'/>
    
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
          console.log("uistatus: "  +  uiState['test_cls_5:ctime:desc']['query'])
          // uiState['test_cls_5:ctime:desc']["query"] = '"' + uiState['test_cls_5:ctime:desc']['query'] + '"';
          // setUiState(uiState);
      }
      
    };
  },

};
</script>


<style>

@import "../css/basic_meilisearch.css"

</style>
