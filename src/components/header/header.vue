<template>
<div id="top">
	<div id="header">
		<div class="logo">
			<h1><a href="http://www.xiami.com/" target="_blank">虾米音乐</a></h1>
		</div>
		<div class="search-wrap">
			<div class="search-content">
				<form action="http://www.xiami.com/search" method="get" id="search" target="_blank">
					<input id="searchStatus" class="icon" type="submit" />
					<div class="search-input">
						<input id="searchInput" autocomplete="off" type="text" name="key" />
					</div>
				</form>
			</div>
		</div>
		<div class="userinfo" id="userInfo">
			<div class="user">
				<div class="avatar">
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
import data from './../../../data.json';
export default {
	props: { // 通过props接收传过来的seller对象，如果是数据用['data']
		seller: {
			type: Object // 定义seller的类型
		}
	},
	data() {
		return {
			detailShow: false
		};
	},
	methods: {
		a() {
			console.log(data.songs[0].name, 1);
		},
		showDetail() {
			this.detailShow = !this.detailShow;
		}
	},
	created() {
		this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
	},
	filters: {

	},
	components: {}
};
</script>

<style lang="less" rel="stylesheet/less">@import "./header.less";</style>
