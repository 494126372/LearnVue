<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" clearable placeholder="请输入用户名">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            clearable
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" :loading="btnLoading" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" :loading="btnLoading" @click="LoginOut('ruleForm')">注销登陆</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/api.js";
import storage from "@/utils/storage";
import md5 from "js-md5";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      btnLoading: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value.trim().length == 0) {
                callback(new Error("用户名不为空"));
              } else {
                callback();
              }
            }
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              let regexp = /^[0-9a-zA-Z]{6,18}$/;
              if (value.trim().length > 18 || value.trim().length < 6) {
                callback(new Error("密码必须是6-18位数字或者字母组合"));
              } else {
                if (!regexp.test(value)) {
                  callback(new Error("密码只能是字母或者数字组合"));
                } else {
                  callback();
                }
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.btnLoading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (localStorage.getItem("token") == null) {
            var loginParams = {
              userName: this.ruleForm.username,
              passWord: this.ruleForm.password
            };
            login(loginParams)
              .then(data => {
                if (data != null) {
                  let user = {
                    UserName: data.UserName,
                    OrgName: data.OrgName,
                    RegionCode: data.RegionCode,
                    RoleName: data.RoleName
                  };
               
                  storage.localSet("user", user);
                     console.log(user);
                     alert("成功");
                  // this.$router.push("/");  // 登陆后跳转页面
                }
              })
              .catch(err => {
                this.btnLoading = false;
              });
          } else {
            alert("失败")
            this.$router.push("/");
          }
        } else {
          console.log("error submit!!");
        }
      });
    },
    LoginOut(){

         storage.localRemove("user");
        storage.localRemove("timeOut");
        storage.localRemove("token");
        storage.localRemove("refresh_token");
        storage.localRemove("loginTime");
        this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url(../../assets/img/login-bg.jpg); */
  background-size: 100%;
  background-color: antiquewhite;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
