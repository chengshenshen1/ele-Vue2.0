<template>
<div id="app">
	<v-header></v-header>
	<div class="middle">
		<mainsidebar></mainsidebar>
		<mainbody></mainbody>
		<mainlrc></mainlrc>
	</div>
</div>
</template>

<script>
import header from 'components/header/header.vue';
import mainsidebar from 'components/mainsidebar/mainsidebar.vue';
import mainbody from 'components/mainbody/mainbody.vue';
import mainlrc from 'components/mainlrc/mainlrc.vue';
export default {
	data() {
		return {
			seller: {}
		};
	},
	created() {
		// this.$http.get('/api/seller').then((res) => {
		// 	res = res.body;
		// 	if (res.errno === ERR_OK) {
		// 		this.seller = res.data;
		// 	}
		// });
	},
	components: {
		'v-header': header,
		'mainsidebar': mainsidebar,
		'mainbody': mainbody,
		'mainlrc': mainlrc
	}
};
</script>
<!-- scope限定css样式 -->
<style lang="less" rel="stylesheet/less">
	#app {
		height: 100%;
		width: 100%;
		min-width: 960px;
		min-height: 500px;
		position: relative;
		-webkit-transition-property: all;
		-moz-transition-property: all;
		-o-transition-property: all;
		-ms-transition-property: all;
		transition-property: all;
		-webkit-transition-duration: 0.2s;
		-moz-transition-duration: 0.2s;
		-o-transition-duration: 0.2s;
		-ms-transition-duration: 0.2s;
		transition-duration: 0.2s;
		.middle {
			display: flex;
			width: 100%;
			position: absolute;
			top: 56px;
			bottom: 80px;
			background-color: #FFF;
		}
	}
</style>
