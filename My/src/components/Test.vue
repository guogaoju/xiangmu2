<template>
  <div id="vuetest">
	<table>
			<tr>
				<td>数学</td>
				<td><input type="text" v-model.number="math"></td>
			</tr>
			<tr>
				<td>物理</td>
				<td><input type="text" v-model.number="physics"></td>
			</tr>
			<tr>
				<td>英语</td>
				<td><input type="text" v-model.number="english"></td>
			<tr>
				<td>总分</td>
				<td>{{sum}}</td>
			</tr>
			<tr>
				<td>平均分</td>
				<td>{{average}}</td>
			</tr>
		</table>
	</div>	

</template>
<script>
  export default {
    vuetest = new Vue({
		el:'#vuetest',
		data:{
				math:'',
				physics:'',
				english:'',
				},
	computed :{
			sum:function () {
				return parseFloat(this.math)+this.physics+this.english;	
					},
			average :function(){
				return Math.round(this.sum/3);
					}	
			}
		})


  }
</script>