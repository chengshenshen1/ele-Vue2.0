module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		// keyword-spacing: ["error", { "before": true }]
		'keyword-spacing': ["error", { "before": true , "after": true }],
		// 函数关键词前没空格
		"space-before-function-paren": ["error", "never"],
		"semi": ["error", "always"],
		// 取消缩进
		"indent": 0,
		// 忽略tab
		"no-tabs": 0
	}
}
