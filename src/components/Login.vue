<template>
	<div v-show="isShow" class="login-panel">
		<h3>Login</h3>
		<div id="login-input-username">
			<span>用户名:</span>
			<el-input v-model="username"
			          prefix-icon="el-icon-user"
			          placeholder="请输入用户名"
			          class="login-input"></el-input>
		</div>
		<div id="login-input-password">
			<span>密 码:</span>
			<el-input placeholder="请输入密码"
			          prefix-icon="el-icon-lock"
			          v-model="password"
			          show-password
			          class="login-input"></el-input>
		</div>
		<div id="login-input-check">
			<span>验证码:</span>
      <Check @login="check"
             ref="check"
             class="login-input"></Check>
		</div>
		<div id="login-input-submit">
			<el-button type="primary"
			           @click="login"
			           class="login-input">登录</el-button>
		</div>

	</div>
</template>

<script>
	import Check from "../view/Home/childcomponent/Check";

	export default {
		name: "Login",
		data() {
			return {
				username: '',
				password: ''
			}
		},
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		components: {
			Check
		},
		methods: {
			check(index) {
				if (index === 1) {
					alert('登录成功')
				} else {
					console.log('验证码错误');
				}
			},
			login() {
				console.log(this.$refs.check);
				this.$refs.check.check()
			}
		}
	}
</script>

<style scoped>
	div {
		color: gray;
		text-align: center;
	}

	.login-panel {
		width: 330px;
		height: 330px;
		transition: al1 .2s linear;
		padding: 10px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50%);
		border-radius: 10px;
		background-color: white;
		box-shadow: 0 0 4px rgba(100, 100, 100, .3);
	}

	.login-panel div {
		display: flex;
		text-align: left;
		width: 90%;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.login-input {
		flex: 3;
	}

	.login-panel div span {
		height: 50px;
		line-height: 50px;
		flex: 1;
	}

	#login-input-submit {
		width: 70%;
		padding-top: 20px;
		text-align: center;
	}

	@media not screen and (min-width: 45em) {
		.login-panel{
			width: 95%;
			min-width: 250px;
			padding: 0;
			margin-top: 10px;
		}

		.login-panel div span {
			flex: 0;
			overflow: hidden;
		}

		.login-panel {
			border-radius: 0;
		}
	}

	h3 {
		margin-bottom: 10px;
	}

</style>