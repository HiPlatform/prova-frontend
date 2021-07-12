module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ["airbnb", "prettier", "plugin:react/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": ["error", { tabWidth: 2, useTabs: true }],
		"react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
		"import/prefer-default-export": "off",
		"consistent-return": "off",
		"no-use-before-define": "off",
		"react/jsx-props-no-spreading": "off",
		"global-require": "off",
		"import/no-dynamic-require": "off",
		"react/no-array-index-key": "off",
		"import/no-unresolved": "off",
		"import/extensions": "off",
		"no-plusplus": "off",
		"no-restricted-syntax": "off",
		"guard-for-in": "off",
		"react/no-unescaped-entities": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
	},
};
