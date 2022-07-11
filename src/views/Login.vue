<template>
    <div class="container">
        <a-form id="form" :model="formState" name="normal_login" class="login-form" autocomplete="on"
            @submit="handleSubmit">

            <a-form-item name="username" :rules="[{ required: true, message: 'Please input any  username!' }]">
                <a-input id="name" size="large" type="text" placeholder="User name : admin"
                    v-model:value="formState.username" @change="handleChnage">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item name="password" :rules="[{ required: true, message: 'Please input any password!' }]">
                <a-input-password id="password" size="large" type="text" placeholder="Password : pass"
                    v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <div class="login-form-wrap">

            </div>

            <a-form-item>
                <a-button id="submit" size="large" type="primary" htmlType="submit" class="login-button"> Login
                </a-button>
            </a-form-item>
        </a-form>


    </div>

</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ILoginData } from '@/type/login';


export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
    },

    setup() {
        const router = useRouter()
        const store = useStore()

        const formState = reactive<ILoginData>({
            username: '',
            password: '',

        });

const handleChnage=(e: any)=>{
console.log(e)
}
        const handleSubmit = async () => {

            if (formState.username == "" || formState.password == "") {
                return message.warning("user name and password are any not empty string")
            }
            const res = await store.dispatch('Login', formState)
            console.log(res)
            if (res == true) {
                router.push({ path: '/' })
                return
            }
            return message.warning("Login error")
        }
        return {
    handleChnage,
            formState,
            handleSubmit
        };
    },

});
</script>
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: whitesmoke;

}

.login-form {
    margin-top: 20%;
    background-color: white;
    max-width: 400px;
    max-height: 400px;
    width: 30%;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 16px;

}



.login-form-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-form-forgot {
    margin-bottom: 24px;
}

.login-button {
    width: 100%;
}
</style>