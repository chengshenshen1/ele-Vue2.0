<template lang="html">
	<div class="main-body">
		<div class="main-page">
			<div class="playlist-header">
				<div class="row-item-body">
					<div class="songs">
						歌曲({{songlist.length ? songlist.length : 0}})
					</div>
					<div class="singer">
						演唱者
					</div>
					<div class="album">
						专辑
					</div>
				</div>
			</div>
			<div class="playlist-body">
				<ul class="playlist">
					<li v-for="(song, index) in songlist">
						<div class="song-wrapper">
							<div class="checkbox">
								<input type="checkbox" class="no-select">
							</div>
							<div class="sort">
								<em :class="{currentsong: playingdex == index, isplaying: isplaying}">{{index + 1}}</em>
							</div>
							<div class="song">
								<div class="name">
									<p>{{song.name}}</p>
								</div>
								<div class="singer">
									<p>{{song.singer}}</p>
								</div>
								<div class="album">
									<p>{{song.album}}</p>
								</div>
							</div>
							<div class="control">
								<span class="like"></span>
								<span class="more"></span>
								<span class="del"></span>
							</div>
						</div>
						<div class="roam-wrapper" v-show="playingdex == index">
							<a class="roam">漫游相似歌曲</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="playlist-footer">
				<div class="all-control">
					<div class="all-checkbox">
						<input type="checkbox">
					</div>
					<div class="all">
						<a href="##" class="del">删除</a>
					</div>
					<div class="all">
						<a href="##" class="fav">收藏</a>
					</div>
					<div class="all">
						<a href="##" class="add">添加到精选集</a>
					</div>
					<div class="all">
						<a href="##" class="more">更多</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import data from './../../../data.json';
export default {
	data() {
		return {
			songlist: [],
			isplaying: false,
			playingdex: 2
		};
	},
	created() {
		this.songlist = data.songs;
	}
};
</script>

<style lang="less" rel="stylesheet/less">
@import "./mainbody.less";
</style>
