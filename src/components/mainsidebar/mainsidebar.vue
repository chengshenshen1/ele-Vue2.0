<template lang="html">
	<div class="main-sidebar">
		<div class="menu-outer">
			<ul id="J_sidebarMenu">
				<li class="current" id="J_menuPlaying" data-page="J_pagePlayList">
					<router-link to="/ratings"><i class="icon-pause" :class="{iconPlay: isPlaying == 'play' }"></i>正在播放</router-link>
				</li>
				<li id="J_menuHistory" data-page="J_pageHistory">
					<router-link to="/ratings"><i class="icon-history"></i>播放历史</router-link>
				</li>
				<li id="J_menuMyfav" data-page="J_pageMyfav">
					<router-link to="/ratings"><i class="icon-myfav"></i>我收藏的单曲</router-link>
				</li>
			</ul>
		</div>
		<div class="collect-outer">
			<div class="collect-title">
				<h3>我创建的精选集</h3>
				<span><a class="icon-addCollect" id="J_createCollect"></a></span>
			</div>
		</div>
		<div class="collect-list">
			<div id="J_collectScrollView" class="ks-scroll-view">
				<!-- 滚动内容 -->
				<div class="ks-scroll-view-content" id="J_collectList">
					<div class="collect-none">
					</div>
				</div>
				<!-- 滚动内容 end -->
			</div>
		</div>
		<div class="promotion-block">
			<a href="http://www.xiami.com/apps/mobile" target="_blank"><img src="https://img.alicdn.com/tps/TB1Q5DVNpXXXXbjXVXXXXXXXXXX-185-100.png"></a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isPlaying: {
			type: String,
			default: 'play' // pause
		}
	}
};
</script>
<style lang="less" rel="stylesheet/less">@import "./mainsidebar.less";</style>
