<template>
	<div v-show="isShow" class="login-panel">

		<h3>Login</h3>
		<div id="login-input-username">
			<sapn>用户名:</sapn>
			<el-input v-model="username"
			              prefix-icon="el-icon-user"
			              placeholder="请输入内容"
			              class="login-input"></el-input>
		</div><br>
		<div id="login-input-password">
			<span>密 码:</span>
			<el-input placeholder="请输入密码"
			             prefix-icon="el-icon-lock"
			             v-model="password"
			             show-password
			             class="login-input"></el-input>
		</div><br>
		<div id="login-input-check">
			<span>验证码:</span>
      <Check @login="check"
                 ref="check"
                 class="login-input"></Check>
		</div><br>
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
		height: 350px;
		margin: 0 auto;
		padding: 10px;
		border-radius: 10px;
		background-color: white;
		box-shadow: 0px 0px 4px rgba(100, 100, 100, .3);
	}

	.login-panel div {
		display: flex;
		text-align: left;
		width: 300px;
		line-height: 40px;
		margin: 0px auto;
	}

	.login-input {
		flex: 3;
	}

	.login-panel div span {
		flex: 1;
	}

	#login-input-submit {
		width: 200px;
		text-align: center;
	}

</style>