<template>
  <div class="box">
    
    <section v-if="isCrashInfo">
        <p class="title">Crash List</p>
        <b-table
        :data="crash_list"
        striped
        narrowed
        bordered>
            <b-table-column 
            field="name"
            label="name"
            width="50%"
            v-slot="props">
            <a @click="loadCrashInfo(props.row.uuid)">{{props.row.name}}</a>
            </b-table-column>
            <b-table-column 
            field="uuid"
            label="uuid"
            width="50%"
            v-slot="props">
            {{props.row.uuid}}
            </b-table-column>
            
            
        </b-table>
    </section>
    <section v-else>
        <nav class="level">
        <!-- Left side -->
            <div class="level-left">
                <p class="title">Crash Information</p>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <b-button class="button is-warning" label="Back to List" @click="isCrashInfo=true">
                    </b-button>
                </div>
            </div>
        </nav>
        <b-field horizontal label="Crash Title">
            <p>{{currntCrashData.name}}</p>
        </b-field>
        <b-field horizontal label="Target">
            <p>{{currntCrashData.crash_target}}</p>
        </b-field>
        <b-field horizontal label="Fuzzer Name">
            <p>{{currntCrashData.fuzzer}}</p>
        </b-field>
        <b-field horizontal label="Crash Log">
            <p>{{crash_log}}</p>
        </b-field>
        <b-field horizontal label="Input data that caused crash in target program">
            <p>{{currntCrashData.crash_input}}</p>
            <b-button class="button is-primary is-small" label="Download" @click="downloadFile(currntCrashData.uuid,currntCrashData.crash_input)">
            </b-button>
        </b-field>
        <b-field horizontal label="Crash occurrence time in target program" >
            <p>{{currntCrashData.crash_time}}</p>
            <b-button class="button is-primary is-small" label="Download" @click="downloadFile(currntCrashData.uuid,currntCrashData.crash_time)">
            </b-button>
        </b-field>
        <b-field horizontal label="Taint analysis result of target program">
            <p>{{currntCrashData.crash_taint}}</p>
            <b-button class="button is-primary is-small" label="Download" @click="downloadFile(currntCrashData.uuid,currntCrashData.crash_taint)">
            </b-button>
        </b-field>
        <b-field horizontal label="Control Flow Graph of target program">
            <p>{{currntCrashData.crash_cfg}}</p>
            <b-button class="button is-primary is-small" label="Download" @click="downloadFile(currntCrashData.uuid,currntCrashData.crash_cfg)">
            </b-button>

        </b-field>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      isCrashInfo: true,
      currntCrashData:{},
      crash_title: "Test version14",
      reported_date:"Aug. 24, 2020, 2:26 a.m. (1 week, 6 days ago)",
      target:"/home/soonhong/driller",
      fuzzer_name:"Driller",
      crash_log:"",
      files:[
          "url1",
          "url2",
          "url3",
          "url4"
      ],
      crash_list:[],
      tmp_data:[
        {
            name : "Testcase2",
            uuid : "61b04cc138064b0da1eb3328ae31b937",
            crash_input : "test1",
            crash_time : "test2",
            crash_taint : "test3",
            crash_cfg : "test4"
        },
        {
            name : "Testcase4",
            uuid : "f85c255017984f978f0385e052d87795",
            crash_input : "test1",
            crash_time : "test2",
            crash_taint : "test3",
            crash_cfg : "test4"
        }
      ]
    }
  },
  methods:{
      downloadFile: function(_uuid,_filename){
        axios.get("http://IP address:3000/download/"+_uuid+"/"+_filename, { responseType: 'blob' })
        .then(response => {
            const blob = new Blob([response.data], { type: 'application' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = _filename
            link.click()
            URL.revokeObjectURL(link.href)
        })
      },
      loadCrashInfo: function(_uuid){
          this.isCrashInfo = false
          axios.get("http://IP address:3000/" + "crashinfo/"+_uuid).then(
            (response) => {
            
            this.currntCrashData = response.data
            console.log(this.currntCrashData)
            },
            (error) => {
            console.log(error);
            });
      },
      getCrashList: function(){
          axios.get("http://[IP address]:3000/" + "crashlist").then(
            (response) => {
            this.crash_list = response.data
            console.log(this.crash_list)
            },
            (error) => {
            console.log(error);
            }
        );
      },
  },
  mounted: function () {
      this.getCrashList()
  }

}
</script>
